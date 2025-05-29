const { colorModel } = require("../../models/colorModel")

let colorInsert = async (req, res) => {
    let { colorName, colorCode , colorOrder } = req.body
    let obj
    try {
        let insertObj = {
            colorName,
            colorCode,
            colorStatus:true,
            colorOrder

        }
        let colorRes = await colorModel.insertOne(insertObj)

        obj = {
            status: 1,
            msg: "Save Color",
            colorRes
        }
        res.send(obj)
    }
    catch (error) {
        obj = {
            status: 0,
            error
        }
        res.send(obj)
    }
}
let colorView = async (req, res) => {
    let data = await colorModel.find()
    let obj = {
        status: 1,
        msg: "View Color",
        data
    }
    res.send(obj)
}
let colorDelete = async (req, res) => {
    let { id } = req.params;
    let delRes = await colorModel.deleteOne({ _id: id })
    let obj = {
        status: 1,
        msg: "Delete Color",
        delRes
    }
    res.send(obj)
}
let colormultiDelete = async (req, res) => {
    let { ids } = req.body;
    let delRes = await colorModel.deleteMany({ _id: ids })
    let obj = {
        status: 1,
        msg: "Delete Color Multi",
        delRes

    }
    res.send(obj)
}
let updateColor = async (req, res) => {
    let { colorName, colorCode, colorStatus, colorOrder } = req.body
    let { id } = req.params;
    let updObj = {
        colorName,
        colorCode,
        colorStatus,
        colorOrder
    }
    let updRes = await colorModel.updateOne({ _id: id }, { $set: updObj })
    let obj = {
        status: 1,
        msg: "Color update",
        updRes

    }
    res.send(obj)
}
let changeStatus = async (req, res) => {
    let { ids } = req.body;

    let allcolor = await colorModel.find({ _id: ids }).select('colorStatus')

    for (let items of allcolor) {
        await colorModel.updateOne({ _id: items._id }, { $set: { colorStatus: !items.colorStatus } })
    }

    let obj = {
        status: 1,
        mgs: "Status Change",

    }
    res.send(obj)


}
let singlecolorView = async (req, res) => {
    let {id} =req.params
    let data = await colorModel.findOne({_id:id})
    let obj = {
        status: 1,
        msg: "View Color",
        data
    }
    res.send(obj)

}

module.exports = { colorInsert, colorView, colorDelete, colormultiDelete, changeStatus , updateColor, singlecolorView }