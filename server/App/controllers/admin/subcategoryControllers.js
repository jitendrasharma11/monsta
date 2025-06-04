const { categoryModel } = require("../../models/categoryModel")
const { subcategoryModel } = require("../../models/subcategoryModel")


let subcategoryInsert=async (req,res)=>{

    let {subcategoryName,subcategoryOrder,parentCategory}=req.body
    let obj={
        subcategoryName,
        subcategoryOrder,
        parentCategory,
        subcategoryStatus:true
    }

    if(req.file){
        if(req.file.filename){
            obj['subcategoryImage']=req.file.filename
        }
    }
    try{
       
        let subcategoryRes=await subcategoryModel.insertOne(obj)
        obj={
            status:1,
            msg:"Subcategory Save",
            subcategoryRes
        }
        res.send(obj)
        
    }
    catch(error){
        obj={
            status:0,
            mgs:"sub category name already exist...",
            error
        }
        res.send(obj)
    }

  
}


let subcategoryView=async (req,res)=>{

    let data=await subcategoryModel.find().populate('parentCategory','categoryName')
    let obj={
        status:1,
        mgs:"Sub Cat View",
        data
        
    }
    res.send(obj)
}

let parentCategory=async (req,res)=>{
    let data=await categoryModel.find({categoryStatus:true}).select("categoryName")
    let obj={
        status:1,
        data
       
        
    }
    res.send(obj)
}

module.exports={parentCategory,subcategoryInsert,subcategoryView}