const { companyModel } = require("../../models/compnayProfileModel")
let fs = require("fs")
require("dotenv").config();

let staticPath= process.env.COMPANYIMAGEPATH

// console.log(staticPath)

let companyProfileAdd = async (req, res) => {

    let { companyName, companyEmail, companyMobileNumber, companyFacebookLink, companyAddress, companyInstagrmaLink, companyYoutubeLink, companyMapLink } = req.body

    let obj
    let companyProfileInsert = {
        companyName,
        companyEmail,
        companyMobileNumber,
        companyFacebookLink,
        companyAddress,
        companyInstagrmaLink,
        companyYoutubeLink,
        companyMapLink
    }

    if (req.file) {
        if (req.file.filename) {
            companyProfileInsert['companyImage'] = req.file.filename
        }
    }

    try {
        let data = await companyModel.insertOne(companyProfileInsert)
        obj = {
            status: 1,
            msg: "Company Profile Added",
            data
        }
        res.send(obj)
    }
    catch (error) {
        obj = {
            status: 0,
            msg: "Compnay Profile Already Exsists...!!",
            error
        }
        res.send(obj)
    }

}

let companyProfileView = async (req, res) => {
    let data = await companyModel.findOne()

    let obj = {
        status: 1,
        staticPath,
        msg: "Company Profile Viewed",
        data
    }
    res.send(obj)
}

let companyProfileEdit = async (req, res) => {
    let { id } = req.query
    console.log(id)
    let { companyName, companyEmail, companyMobileNumber, companyFacebookLink, companyAddress, companyInstagrmaLink, companyYoutubeLink, companyMapLink } = req.body
    let companyProfileInsert = {
        companyName,
        companyEmail,
        companyMobileNumber,
        companyFacebookLink,
        companyAddress,
        companyInstagrmaLink,
        companyYoutubeLink,
        companyMapLink
    }

    if (req.file) {
        if (req.file.filename) {
            companyProfileInsert['compnayImage'] = req.file.filename
        }
    }

    try {
        let companyView = await companyModel.find({ _id: id }).select("compnayImage")

        for (let v of companyView) {
            let deletePath = "uploads/companyProfile/" + v.compnayImage
            fs.unlinkSync(deletePath)
        }
        let data = await companyModel.updateOne({ _id: id }, { $set: companyProfileInsert })
        obj = {
            status: 1,
            msg: "Company Profile Updated",
            staticPath: process.env.COMPANYIMAGEPATH,
            data
        }
        res.send(obj)
    }
    catch (error) {
        obj = {
            status: 0,
            msg: "Company Profile Already Exists"
        }
        res.send(obj)
    }
}

module.exports = { companyProfileAdd, companyProfileView, companyProfileEdit }