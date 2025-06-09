let mongoose=require("mongoose")

let subsubcategorySchema= new mongoose.Schema({
    subsubcategoryName:{
        type:String,
        required:true,
        minLength:2,
        maxLength:20,
       
    },                                                                            
    parentCategory: {type:mongoose.Schema.ObjectId, ref: "category"},
    subCategory: {type: mongoose.Schema.ObjectId, ref: "subcategory"},
    subsubcategoryImage:String,
    subsubcategoryOrder:Number,
    subsubcategoryStatus:Boolean
})

let subsubcategoryModel=mongoose.model("subsubcategory",subsubcategorySchema)
module.exports={subsubcategoryModel}