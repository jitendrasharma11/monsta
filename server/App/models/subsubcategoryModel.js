let mongoose=require("mongoose");
const { default: slugify } = require("slugify");

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
    subsubcategoryStatus:Boolean,
    slug: String,
})

subsubcategorySchema.pre('save', function (next) {
  this.slug = slugify(this.subsubcategoryName, { lower: true });
  next();
});

let subsubcategoryModel=mongoose.model("subsubcategory",subsubcategorySchema)
module.exports={subsubcategoryModel}