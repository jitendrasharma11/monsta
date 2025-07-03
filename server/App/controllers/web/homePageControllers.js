const { productModel } = require("../../models/productModel");
const { sliderModel } = require("../../models/sliderModel");
const { testimonialsModel } = require("../../models/testimonialsModel");

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

const getBestSellingProduct = async (req, res) => {
    try {
        const data = await productModel.find({ productbestSelling : true })
            .populate('parentCategory', 'categoryName')
            .populate('subCategory', 'subcategoryName')
            .populate('subSubCategory', 'subsubcategoryName')
            .populate('productColor', 'colorName')
            .populate('productMeterial', 'materialName');

        res.send({
            status: 1,
            msg: "Best Selling Products",
            staticPath: process.env.PRODUCTIMAGEPATH,
            data
        });
    } catch (error) {
        res.send({ status: 0, msg: "Error fetching best-selling products", error });
    }
};

let getTestimonials = async (req, res) => {
    try {

        let data = await testimonialsModel.find({ testimonialsStatus: true });


        let obj;
        obj = {
            status: 1,
            msg: "testimonial find",
            data,
            staticPath: process.env.TESTIMONIALSIMAGEPATH,

        }

        res.send(obj);
        console.log("suc", obj);
    }
    catch (error) {
        obj = {
            status: 0,
            error
        }
        res.send(obj)
        console.log("error", obj)
    }
}

module.exports = { slideView ,ProductView, getsingleProduct,getBestSellingProduct, getTestimonials}