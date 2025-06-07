const { adminModel } = require("../../models/adminModel")

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
module.exports={adminLogin} 