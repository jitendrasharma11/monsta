const { subcategoryModel } = require("../../models/subcategoryModel");
const { categoryModel } = require("../../models/categoryModel");
const fs = require("fs");

// Insert
let subcategoryInsert = async (req, res) => {
    let { subcategoryName, subcategoryOrder, parentCategory } = req.body;

    let obj = {
        subcategoryName,
        subcategoryOrder,
        parentCategory,
        subcategoryStatus: true
    };

    if (req.file && req.file.filename) {
        obj['subcategoryImage'] = req.file.filename;
    }

    try {
        let subcategoryRes = await subcategoryModel.insertOne(obj);
        res.send({
            status: 1,
            msg: "Subcategory Saved",
            subcategoryRes
        });
    } catch (error) {
        res.send({
            status: 0,
            msg: "Subcategory name already exists...",
            error
        });
    }
};

// View (with pagination and search)
let subcategoryView = async (req, res) => {
    let { currentPage, limit, subcategoryName } = req.query;
    let searchObj = {};

    if (subcategoryName && subcategoryName.trim() !== "") {
        searchObj['subcategoryName'] = new RegExp(subcategoryName, 'i');
    }

    let finalSkip = (currentPage - 1) * limit;

    let data = await subcategoryModel
        .find(searchObj)
        .populate('parentCategory', 'categoryName')
        .skip(finalSkip)
        .limit(limit);

    let allRecords = await subcategoryModel.find(searchObj);
    res.send({
        status: 1,
        msg: "Subcategory View",
        staticPath: process.env.SUBCATEGORYIMAGEPATH,
        AllNumberRec: allRecords.length,
        pages: Math.ceil(allRecords.length / limit),
        data
    });
};

// Single View
let subcategorySingleView = async (req, res) => {
    let { id } = req.params;
    let data = await subcategoryModel.findOne({ _id: id });
    res.send({
        status: 1,
        msg: "Single Subcategory",
        data
    });
};

// Update
let subcategoryUpdate = async (req, res) => {
    let { id } = req.params;
    let { subcategoryName, subcategoryOrder, parentCategory } = req.body;

    let updateObj = {
        subcategoryName,
        subcategoryOrder,
        parentCategory,
        subcategoryStatus: true
    };

    try {
        if (req.file && req.file.filename) {
            let old = await subcategoryModel.findOne({ _id: id }).select("subcategoryImage");
            let deletePath = "uploads/subcategory/" + old.subcategoryImage;
            if (fs.existsSync(deletePath)) fs.unlinkSync(deletePath);
            updateObj["subcategoryImage"] = req.file.filename;
        }

        let data = await subcategoryModel.updateOne({ _id: id }, { $set: updateObj });

        res.send({
            status: 1,
            msg: "Subcategory Updated",
            data
        });
    } catch (error) {
        res.send({
            status: 0,
            msg: "Enter valid Subcategory records",
            error
        });
    }
};

// Multi Delete
let subcategoryMultiDelete = async (req, res) => {
    let { ids } = req.body;

    let items = await subcategoryModel.find({ _id: ids }).select("subcategoryImage");
    for (let v of items) {
        let deletePath = "uploads/subcategory/" + v.subcategoryImage;
        if (fs.existsSync(deletePath)) fs.unlinkSync(deletePath);
    }

    await subcategoryModel.deleteMany({ _id: ids });

    res.send({
        status: 1,
        msg: "Subcategory Deleted"
    });
};

// Status Toggle
let subcategoryStatus = async (req, res) => {
    let { ids } = req.body;
    try {
        let all = await subcategoryModel.find({ _id: { $in: ids } }).select('subcategoryStatus');

        for (let item of all) {
            await subcategoryModel.updateOne(
                { _id: item._id },
                { $set: { subcategoryStatus: !item.subcategoryStatus } }
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

module.exports = {
    subcategoryInsert,
    subcategoryView,
    subcategorySingleView,
    subcategoryUpdate,
    subcategoryMultiDelete,
    subcategoryStatus,
    parentCategory
};