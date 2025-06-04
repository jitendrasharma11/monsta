let mongoose=require("mongoose")
let subcategorySchema= new mongoose.Schema({
    subcategoryName:{
        type:String,
        unique:true,
        required:true,
        minLength:2,
        maxLength:20,
       
    },                                                             //68349b674839b8e8f61e41f1                 
    parentCategory: {type: mongoose.Types.ObjectId, ref: "category"}, //68374556e568bbcaa6ba031b
    subcategoryImage:String,
    subcategoryOrder:Number,
    subcategoryStatus:Boolean
})

let subcategoryModel=mongoose.model("subcategory",subcategorySchema)
module.exports={subcategoryModel}