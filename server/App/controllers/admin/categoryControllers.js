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
    let {currentPage,limit}=req.query

    if (req.query.categoryName != '') {
        searchObj['categoryName']=new RegExp(req.query.categoryName,"i")
        
    }
    let finalSkip=(currentPage-1)*limit

    let data = await categoryModel.find(searchObj).skip(finalSkip).limit(limit)

    let AllNumberRec = await categoryModel.find(searchObj)

    let obj = {
        status: 1,
        AllNumberRec:AllNumberRec.length,
        pages:Math.ceil(AllNumberRec.length/limit),
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
        data
    }
    res.send(obj)

}


const categoryUpdate = async (req, res) => {
    try {
        // Defensive fallback in case req.body is undefined
        const { id } = req.params;
        const { categoryName, categoryOrder, oldImage } = req.body || {};

        // Validation fallback
        if (!categoryName || !categoryOrder) {
            return res.status(400).send({ status: 0, msg: "Missing fields in request" });
        }

        let updateObj = {
            categoryName,
            categoryOrder
        };

        // If new image uploaded
        if (req.file) {
            updateObj.categoryImage = 'uploads/' + req.file.filename;

            // Delete old image if it exists
            const oldPath = path.join(__dirname, '../../', oldImage);
            if (oldImage && fs.existsSync(oldPath)) {
                fs.unlinkSync(oldPath);
            }
        }

        let data = await categoryModel.updateOne({ _id: id }, { $set: updateObj });

        res.send({
            status: 1,
            msg: "Category updated successfully",
            data
        });

    } catch (err) {
        console.error("Update Error:", err);
        res.status(500).send({
            status: 0,
            msg: "Something went wrong",
            error: err.message
        });
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