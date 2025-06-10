const { transporter } = require("../../config/mailConfig");
const { adminModel } = require("../../models/adminModel")
let myOTP=new Map()

let adminLogin=async(req,res)=>{

    let checkAdmin=await adminModel.findOne(req.body)
    let resobj;
    if(checkAdmin){

        resobj={

         status:1,
         adminId:checkAdmin._id,
         msg: "Login Sucessfully"
           
        }
         
    }
    else{
       resobj={
            
         status:0,
         msg: "InValid Username & Password"
           
        }
    }
   
    res.send(resobj)
}
let forgotSendOTP=async (req,res)=>{
    let {email}=req.body
    console.log(email)
    let admin=await adminModel.findOne({adminEmail:email})
    if(admin){
       
        let otp=Math.floor(Math.random()*99999999).toString().slice(0,6)

        myOTP.set("MYOTP",otp) //Backend OTP Store
        const info = await transporter.sendMail({
            from: '"Ecom | Forgot Password OTP" <jitendrasharma30990@gmail.com>',
            to:email ,
            subject: "OTP Mail | Forgot Password",
            text: "OTP Mail", // plain‑text body
            html: `<b>OTP ${otp}</b>`, // HTML body
          });
        
          res.send({status:1,msg:"OTP SEND"})
    }
    else{
        res.send({status:0,msg:"Invalid Email Id"})
    }

  
}

let verifyOTP=(req,res)=>{
    let {otp}=req.body;
    let backendOTP= myOTP.get("MYOTP") 
    if(backendOTP==otp){
        res.send({status:1,msg:"OTP verified successfully. You can now reset your password."})
    }
    else{
        res.send({status:0,msg:"Invalaid OTP"})   
    }
}
let resetPassword=async (req,res)=>{
    let {email,newPassword}=req.body

    let updateRes=await adminModel.updateOne({adminEmail:email},{$set:{
        adminPassword:newPassword
    }})

    res.send({status:1,msg:"reset your password successfully."})

}
module.exports={adminLogin, forgotSendOTP , verifyOTP , resetPassword } 