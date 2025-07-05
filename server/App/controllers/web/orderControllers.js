const Razorpay = require('razorpay');
const orderModel = require('../../models/orderModel');
const crypto = require('crypto');
const { cartrModel } = require('../../models/cartModel');
const orderMail = require('../../config/orderMail');

const instance = new Razorpay({
    key_id: 'rzp_test_WAft3lA6ly3OBc',
    key_secret: '68E17CNWY8SemCvZ6ylOkuOY',
});

let saveOrder = async (req, res) => {
    let { paymentMethod } = req.body;
    let obj = { ...req.body };

    if (paymentMethod == 1) { // COD
        obj['orderStatus'] = 'process';

        await orderModel.insertOne(obj);
        await cartrModel.deleteMany({ userId: obj.userId });

        // ✅ Send Email for COD
        await orderMail(
            obj.shippingAddress.billingEmail,
            "Order Confirmation - Monsta Furniture (COD)",
            `
                <h2>Thank you for your order!</h2>
                <p>Your COD order has been placed successfully.</p>
                <p><strong>Order Amount:</strong> ₹${obj.orderAmount}</p>
            `
        );

        res.send({ status: 1, msg: "Order Save", paymentMethod });
    } else { // Online Payment
        obj['orderStatus'] = 'pending';
        obj['paymentStatus'] = '1';

        let orderData = await orderModel.insertOne(obj);

        let orderObj = {
            amount: req.body.orderAmount * 100,
            currency: "INR",
            receipt: orderData._id.toString(),
        };

        let ordersRes = await instance.orders.create(orderObj);

        await orderModel.updateOne({ _id: orderData._id }, {
            $set: { razorpayOrderId: ordersRes.id }
        });

        res.send({ status: 1, msg: "Order Save", paymentMethod, ordersRes });
    }
};

let verifyOrder = async (req, res) => {
    let {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        userId,
        billingEmail,
        orderAmount
    } = req.body;

    const hmac = crypto.createHmac('sha256', "68E17CNWY8SemCvZ6ylOkuOY");
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const generated_signature = hmac.digest('hex');

    if (generated_signature === razorpay_signature) {
        await orderModel.updateOne(
            { razorpayOrderId: razorpay_order_id },
            {
                $set: {
                    paymentStatus: "2",
                    orderStatus: "2",
                    razorpayPayment: razorpay_payment_id
                }
            }
        );

        await cartrModel.deleteMany({ userId: userId });

        // ✅ Send Email on successful payment
        await orderMail(
            billingEmail,
            "Payment Successful - Monsta Furniture",
            `
                <h2>Your Payment was Successful!</h2>
                <p><strong>Payment ID:</strong> ${razorpay_payment_id}</p>
                <p><strong>Order Amount:</strong> ₹${orderAmount}</p>
                <p>We’ll process your order shortly.</p>
            `

            
        );
        console.log("📩 billingEmail:", billingEmail);

        res.send({ status: 1, msg: "Order Verified & Saved" });
    } else {
        res.send({ status: 0, msg: "Payment Verification Failed" });
    }
};

let viewOrder = async (req, res) => {
    let { userId } = req.body;
    let orders = await orderModel.find({ userId: userId });

    res.send({
        status: 1,
        data: orders,
        staticPath: process.env.PRODUCTIMAGEPATH,
    });
};

module.exports = { saveOrder, viewOrder, verifyOrder };