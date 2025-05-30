const { categoryModel } = require("../../models/categoryModel")

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
    let data = await categoryModel.find()

    let obj = {
        status: 1,
        msg: "Category View",
        staticPath: process.env.CATEGORYiMAGEPATH,
        data
    }
    res.send(obj)
}

module.exports = { categoryInsert, categoryView }