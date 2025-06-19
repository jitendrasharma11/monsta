const { categoryModel } = require("../../models/categoryModel")
let path = require('path');
let fs = require("fs")

let categoryInsert = async (req, res) => {

    let { categoryName, categoryOrder } = req.body

    let obj = {
        categoryName,
        categoryStatus: true,
        categoryOrder
    }

    if (req.file) {
        if (req.file.filename) {
            obj[`categoryImage`] = req.file.filename
        }
    }
    try {
        let categoryRes = await categoryModel.insertOne(obj)
        obj = {
            status: 1,
            msg: "Category Save",
            categoryRes
        }
        res.send(obj)

    }
    catch (error) {
        obj = {
            status: 0,
            msg: "Category name already exist...",
            error
        }
        res.send(obj)
    }
}

let categoryView = async (req, res) => {


    let searchObj = {

    }
    let { currentPage, limit } = req.query

    if (req.query.categoryName != '') {
        searchObj['categoryName'] = new RegExp(req.query.categoryName, "i")

    }
    let finalSkip = (currentPage - 1) * limit

    let data = await categoryModel.find(searchObj).skip(finalSkip).limit(limit)

    let AllNumberRec = await categoryModel.find(searchObj)

    let obj = {
        status: 1,
        AllNumberRec: AllNumberRec.length,
        pages: Math.ceil(AllNumberRec.length / limit),
        msg: "Category View",
        staticPath: process.env.CATEGORYiMAGEPATH,
        data
    }
    res.send(obj)
}


let categorymultiDelete = async (req, res) => {
    let { ids } = req.body

    let categoryView = await categoryModel.find({ _id: ids }).select("categoryImage")

    for (let v of categoryView) {
        let deletePath = "uploads/category/" + v.categoryImage
        fs.unlinkSync(deletePath)
    }

    let data = await categoryModel.deleteMany({ _id: ids })


    let obj = {
        status: 1,
        msg: "Category Deleted",

    }
    res.send(obj)
}

let categorySingleView = async (req, res) => {
    let { id } = req.params

    let data = await categoryModel.findOne({ _id: id })

    let obj = {
        status: 1,
        msg: "sinlge category",
        staticPath: process.env.CATEGORYiMAGEPATH,
        data
    }
    res.send(obj)

}


let categoryUpdate = async (req, res) => {
    let { id } = req.params;
    let obj;
    let { categoryName, categoryOrder } = req.body;

    let categoryAdd = {
        categoryName,
        categoryOrder,
        categoryStatus: true
    };

    try {
        if (req.file && req.file.filename) {

            let categoryView = await categoryModel.find({ _id: id }).select("categoryImage");

            for (let v of categoryView) {
                let deletePath = "uploads/category/" + v.categoryImage;
                if (fs.existsSync(deletePath)) {
                    fs.unlinkSync(deletePath);
                }
            }

            categoryAdd['categoryImage'] = req.file.filename;
        }

        let data = await categoryModel.updateOne({ _id: id }, { $set: categoryAdd });

        obj = {
            status: 1,
            msg: "Category Updated",
            data
        };
        res.send(obj);
    } catch (error) {
        console.error("Error updating category:", error);
        obj = {
            status: 0,
            msg: "Enter Valid Category Records"
        };
        res.send(obj);
    }
};
let categoryStatus = async (req, res) => {
    let { ids } = req.body;

    try {
        let allCategories = await categoryModel.find({ _id: { $in: ids } }).select('categoryStatus');

        for (let item of allCategories) {
            await categoryModel.updateOne(
                { _id: item._id },
                { $set: { categoryStatus: !item.categoryStatus } }
            );
        }

        res.send({
            status: 1,
            msg: "Status Changed"
        });
    } catch (error) {
        res.send({
            status: 0,
            msg: "Status Change Error",
            error
        });
    }
};
module.exports = { categoryInsert, categoryView, categorymultiDelete, categoryStatus, categorySingleView, categoryUpdate }