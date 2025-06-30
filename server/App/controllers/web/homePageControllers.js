const { productModel } = require("../../models/productModel");
const { sliderModel } = require("../../models/sliderModel");

let slideView = async(req, res) => {
    let data = await sliderModel.find();

    res.send({
        status: 1,
        msg: "Slider View",
        staticPath: process.env.SLIDERIMAGEPATH,
        data
    });
}

let ProductView = async(req, res) => {

    let productType=req.query.productType ?? 1

    let data=await productModel.find({productType:productType})
    .populate('parentCategory','categoryName')
    .populate('subCategory','subcategoryName')
    .populate('subSubCategory','subsubcategoryName')
    .populate('productColor','colorName')
    .populate('productMeterial','materialName')
    let obj={
        status:1,
        staticPath:process.env.PRODUCTIMAGEPATH,
        data
        
    }
    res.send(obj)
    
}
let getsingleProduct = async (req, res) => {
    let { slug } = req.params;
    let data = await productModel.findOne({ slug: slug })
        .populate('parentCategory', 'categoryName')
        .populate('subCategory', 'subcategoryName')
        .populate('subSubCategory','subsubcategoryName')
        .populate('productColor', 'colorName')
        .populate('productMeterial','materialName') 

    res.send({
        status: 1,
        msg: "Product Single Data",
        staticPath: process.env.PRODUCTIMAGEPATH,
        data
    });
};

module.exports = { slideView ,ProductView, getsingleProduct }