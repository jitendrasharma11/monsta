let mongoose=require("mongoose")
let subcategorySchema= new mongoose.Schema({
    subcategoryName:{
        type:String,
        unique:true,
        required:true,
        minLength:2,
        maxLength:20,
       
    },
    subcategoryImage:String,
    subcategoryOrder:Number,
    subcategoryStatus:Boolean
})

let subcategoryModel=mongoose.model("subcategory",subcategorySchema)
module.exports={subcategoryModel}