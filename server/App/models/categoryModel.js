let mongoose=require("mongoose");
const { default: slugify } = require("slugify");
let categorySchema= new mongoose.Schema({
    categoryName:{
        type:String,
        unique:true,
        required:true,
        minLength:2,
        maxLength:20,
       
    },
    categoryImage:String,
    categoryOrder:Number,
    categoryStatus:Boolean,
    slug: String,
})

// Pre-save middleware to generate slug before saving
categorySchema.pre('save', function (next) {
  this.slug = slugify(this.categoryName, { lower: true });
  next();
});

let categoryModel=mongoose.model("category",categorySchema)
module.exports={categoryModel}