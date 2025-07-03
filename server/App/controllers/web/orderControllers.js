const orderModel = require("../../models/orderModel")


let saveOrder = async (req, res) => {

    console.log(req.body)

    let { paymentMethod } = req.body

    if (paymentMethod == 1) { //COD
        let obj = { ...req.body }
        obj['orderStatus'] = 'process'
        await orderModel.insertOne(obj)
        //Delete Cart Items CartModel
        res.send("Order Save")

    }
    else { //Online

    }
}

module.exports = { saveOrder }