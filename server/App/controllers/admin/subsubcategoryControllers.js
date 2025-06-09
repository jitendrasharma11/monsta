const { categoryModel } = require("../../models/categoryModel");
const { subcategoryModel } = require("../../models/subcategoryModel");
const { subsubcategoryModel } = require("../../models/subsubcategoryModel");
const fs = require("fs");

// Insert
let subsubcategoryInsert = async (req, res) => {
    try {
        let { subsubcategoryName, subsubcategoryOrder, parentCategory, subcategory } = req.body;


        let obj = {
            subsubcategoryName,
            subsubcategoryOrder,
            parentCategory,
            subcategory,
            subsubcategoryStatus: true
        };

        console.log(obj)

        if (req.file && req.file.filename) {
            obj.subsubcategoryImage = req.file.filename;
        }

        console.log("Insert Object:", obj);

        let subsubcategoryRes = await subsubcategoryModel.insertOne(obj);
        res.send({
            status: 1,
            msg: "Sub Subcategory Saved",
            subsubcategoryRes
        });

    } catch (error) {
        console.error("Insert Error:", error);
        res.send({
            status: 0,
            msg: "Something went wrong",
            error: error.message || error
        });
    }
};

// View (with pagination and search)
let subsubcategoryView = async (req, res) => {
    let { currentPage, limit, subsubcategoryName } = req.query;
    let searchObj = {};

    if (subsubcategoryName && subsubcategoryName.trim() !== "") {
        searchObj['subsubcategoryName'] = new RegExp(subsubcategoryName, 'i');
    }

    let finalSkip = (currentPage - 1) * limit;

    let data = await subsubcategoryModel
        .find(searchObj)
        .populate('parentCategory')
        .populate('subCategory')
        .skip(finalSkip)
        .limit(limit);

    let allRecords = await subsubcategoryModel.find(searchObj);
    res.send({
        status: 1,
        msg: "Sub Subcategory View",
        staticPath: process.env.SUBSUBCATEGORYIMAGEPATH,
        AllNumberRec: allRecords.length,
        pages: Math.ceil(allRecords.length / limit),
        data
    });
};

// Single View
let subsubcategorySingleView = async (req, res) => {
    let { id } = req.params;
    let data = await subsubcategoryModel.findOne({ _id: id });
    res.send({
        status: 1,
        msg: "Single Sub Subcategory",
        data
    });
};

// Update
let subsubcategoryUpdate = async (req, res) => {
    let { id } = req.params;
    let { subsubcategoryName, subsubcategoryOrder, parentCategory, subcategory } = req.body;

    let updateObj = {
        subsubcategoryName,
        subsubcategoryOrder,
        parentCategory,
        subcategory,
        subsubcategoryStatus: true
    };

    try {
        if (req.file && req.file.filename) {
            let old = await subsubcategoryModel.findOne({ _id: id }).select("subsubcategoryImage");
            let deletePath = "uploads/subsubcategory/" + old.subsubcategoryImage;
            if (fs.existsSync(deletePath)) fs.unlinkSync(deletePath);
            updateObj["subsubcategoryImage"] = req.file.filename;
        }

        let data = await subsubcategoryModel.updateOne({ _id: id }, { $set: updateObj });

        res.send({
            status: 1,
            msg: "Sub Subcategory Updated",
            data
        });
    } catch (error) {
        res.send({
            status: 0,
            msg: "Enter valid Sub Subcategory records",
            error
        });
    }
};

// Multi Delete
let subsubcategoryMultiDelete = async (req, res) => {
    let { ids } = req.body;

    let items = await subsubcategoryModel.find({ _id: ids }).select("subsubcategoryImage");
    for (let v of items) {
        let deletePath = "uploads/subsubcategory/" + v.subsubcategoryImage;
        if (fs.existsSync(deletePath)) fs.unlinkSync(deletePath);
    }

    await subsubcategoryModel.deleteMany({ _id: ids });

    res.send({
        status: 1,
        msg: "Sub Subcategory Deleted"
    });
};

// Status Toggle
let subsubcategoryStatus = async (req, res) => {
    let { ids } = req.body;
    try {
        let all = await subsubcategoryModel.find({ _id: { $in: ids } }).select('subsubcategoryStatus');

        for (let item of all) {
            await subsubcategoryModel.updateOne(
                { _id: item._id },
                { $set: { subsubcategoryStatus: !item.subsubcategoryStatus } }
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

// For Dropdown
let parentCategory = async (req, res) => {
    let data = await categoryModel.find({ categoryStatus: true }).select("categoryName");
    res.send({
        status: 1,
        data
    });
};

let subCategory = async (req, res) => {
    let data = await subcategoryModel.find({ subcategoryStatus: true }).select("subcategoryName");
    res.send({
        status: 1,
        data
    });
};

module.exports = {
    subsubcategoryInsert,
    subsubcategoryView,
    subsubcategorySingleView,
    subsubcategoryUpdate,
    subsubcategoryMultiDelete,
    subsubcategoryStatus,
    parentCategory,
    subCategory
};