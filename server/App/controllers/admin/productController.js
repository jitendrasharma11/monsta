
const { categoryModel } = require("../../models/categoryModel")
const { colorModel } = require("../../models/colorModel")
const { materialModels } = require("../../models/materialModels")
const { productModel } = require("../../models/productModel")
const { subcategoryModel } = require("../../models/subcategoryModel")
const { subsubcategoryModel } = require("../../models/subsubcategoryModel")

let productInsert = async (req, res) => {

    let obj = { ...req.body }
    console.log(req.files)
    if (req.files) {
        if (req.files.productImage) {
            obj['productImage'] = req.files.productImage[0].filename //'1749921370810-1.jpg'
        }

        if (req.files.productBackimage) {
            obj['productBackimage'] = req.files.productBackimage[0].filename //'1749921370817-1.jpg'
        }
        if (req.files.productGallery) {
            obj['productGallery'] = req.files.productGallery.map((items) => items.filename)
            //[ "1749921370822-1.jpg","1749921370825-2.jpg"]
        }


    }

    let products = await productModel.insertOne(obj)
    console.log(obj)
    let resObj = {
        status: 1,
        msg: "Product Saved",
        products
    }
    res.send(resObj)

}

let parentCategory = async (req, res) => {
    let data = await categoryModel.find({ categoryStatus: true }).select("categoryName")
    let obj = {
        status: 1,
        data


    }
    res.send(obj)
}

let subCategory = async (req, res) => {
    let { parentid } = req.params; ///68374556e568bbcaa6ba031b
    let data = await subcategoryModel.find({ parentCategory: parentid, subcategoryStatus: true }).select("subcategoryName")
    let obj = {
        status: 1,
        data


    }
    res.send(obj)
}


let subsubCategory = async (req, res) => {
    let { subcategoryId } = req.params;

    let data = await subsubcategoryModel
        .find({ subCategory: subcategoryId, subsubcategoryStatus: true })
        .select("subsubcategoryName");

    let obj = {
        status: 1,
        data
    };
    res.send(obj);
}

let getColor = async (req, res) => {
    let data = await colorModel.find({ colorStatus: true }).select("colorName")
    let obj = {
        status: 1,
        data


    }
    res.send(obj)
}
let getMeterial = async (req, res) => {
    let data = await materialModels.find({ materialStatus: true }).select("materialName")
    let obj = {
        status: 1,
        data


    }
    res.send(obj)
}
module.exports = { parentCategory, subCategory, getColor, getMeterial, subsubCategory, productInsert }