const { subcategoryModel } = require("../../models/subcategoryModel")

let subcategoryInsert=async(req,res)=>{
    
    let {subcategoryName, subcategoryOrder}=req.body

    let obj={
       subcategoryName,
       subcategoryOrder
    }

    if(req.file){
        if(req.file.filename){
            obj[`subcategoryImage`]=req.file.filename
        }
    }
    try {
            let subcategoryRes = await subcategoryModel.insertOne(obj)
            obj = {
                status: 1,
                msg: "Category Save",
                subcategoryRes
            }
            res.send(obj)
    
        }
        catch (error) {
            obj = {
                status: 0,
                msg: "Sub Category name already exist...",
                error
            }
            res.send(obj)
        }
}
module.exports={subcategoryInsert}