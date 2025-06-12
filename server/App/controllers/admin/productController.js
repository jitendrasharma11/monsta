
const { categoryModel } = require("../../models/categoryModel")
const { colorModel } = require("../../models/colorModel")
const { materialModels } = require("../../models/materialModels")
const { subcategoryModel } = require("../../models/subcategoryModel")


let parentCategory=async (req,res)=>{
    let data=await categoryModel.find().select("categoryName")
    let obj={
        status:1,
        data
       
        
    }
    res.send(obj)
}

let subCategory=async (req,res)=>{
    let {parentid}=req.params; ///68374556e568bbcaa6ba031b
    let data=await subcategoryModel.find( {parentCategory:parentid} ).select("subcategoryName")
    let obj={
        status:1,
        data
       
        
    }
    res.send(obj)
}

let getColor=async (req,res)=>{
    let data=await colorModel.find({colorStatus:true}).select("colorName")
    let obj={
        status:1,
        data
       
        
    }
    res.send(obj)
}
let getMeterial=async (req,res)=>{
    let data=await materialModels.find({materialStatus:true}).select("materialName")
    let obj={
        status:1,
        data
       
        
    }
    res.send(obj)
}
module.exports={parentCategory,subCategory,getColor,getMeterial}