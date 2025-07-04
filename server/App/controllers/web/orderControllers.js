
const Razorpay = require('razorpay');
const orderModel = require('../../models/orderModel');
var instance = new Razorpay({
   key_id: 'rzp_test_WAft3lA6ly3OBc',
   key_secret: '68E17CNWY8SemCvZ6ylOkuOY',
 });

let saveOrder=async (req,res)=>{
   let {paymentMethod}=req.body
   let obj={...req.body}
   if(paymentMethod==1){ //COD
        
        obj['orderStatus']='process'
        await orderModel.insertOne(obj)
         //Delete Cart Items CartModel
         
        res.send({status:1,msg:"Order Save",paymentMethod})
       
   }
   else{ //Online
      //DB Order Create
      obj['orderStatus']='pending' 
      obj['paymentStatus']='1'
      let orderData=await orderModel.insertOne(obj)
      //RazorPay
      //Amount 500*100,
      //"currency": "INR",
      //"receipt": orderData._id,

      let orderObj={
         "amount": req.body.orderAmount*100,
         "currency": "INR",
         "receipt": orderData._id
      }
       console.log(orderObj)
       
      let ordersRes=await instance.orders.create(orderObj)

      await orderModel.updateOne({_id:orderData._id},{$set:{
         razorpayOrderId:ordersRes.id
      }})

     
      res.send({status:1,msg:"Order Save",paymentMethod,ordersRes})

   }  
}

module.exports={saveOrder}