const { countryModel } = require("../../models/countryModel")



let countryAdd = async (req, res) => {
    let { countryName, countryOrder } = req.body

   
    let obj

    try {

        let countryInsert = {
            countryName,
            countryOrder,
            countryStatus: true
        }

        let data = await countryModel.insertOne(countryInsert)

        console.log(countryInsert)
        obj = {
            status: 1,
            msg: "Country Added",
            data
        }
        res.send(obj)
    }
    catch (error) {
        obj = {
            status: 0,
            msg: "Please Enter Valid Country",
            error
        }
        res.send(obj)
    }
}

let countryView = async (req, res) => {
    let data = await countryModel.find()

    let obj = {
        status: 1,
        msg: "Country View",
        data
    }
    res.send(obj)
}


let CountrySingleView = async (req, res) => {
    let { id } = req.params

    let data = await countryModel.findOne({ _id: id })

    let obj = {
        status: 1,
        msg: "Sigle Country View",
        data
    }
    res.send(obj)
}

let countryUpdate = async (req, res) => {
    let { countryName, countryOrder } = req.body
    let { id } = req.params
    let countryUpdate = {
        countryName,
        countryOrder,
    }
    let data = await countryModel.updateOne({ _id: id }, { $set: countryUpdate })


    let obj = {
        status: 1,
        msg: "Updated Country Data",
        data
    }
    

    res.send(obj)



}
let changeStatus = async (req, res) => {
    let { ids } = req.body;

    let allcountry = await countryModel.find({ _id: ids }).select('countryStatus')

    for (let items of allcountry) {
        await countryModel.updateOne({ _id: items._id }, { $set: { countryStatus: !items.countryStatus } })
    }

    let obj = {
        status: 1,
        mgs: "Status Change",

    }
    res.send(obj)


}
let countryDelete = async (req, res) => {
    let { id } = req.params

    let data = await countryModel.deleteOne({ _id: id })

    let obj = {
        status: 1,
        msg: "Country Deleted",
        data
    }
    res.send(obj)
}

let countryMultiDelete = async (req, res) => {
    let { ids } = req.body
    let data = await countryModel.deleteMany({ _id: ids })

    let obj = {
        status: 1,
        msg: "Multiple Country Deleted",
        data
    }
    res.send(obj)
}
module.exports = { countryAdd, countryView, CountrySingleView, changeStatus ,countryUpdate, countryDelete, countryMultiDelete }