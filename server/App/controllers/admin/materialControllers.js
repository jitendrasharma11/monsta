const { materialModels } = require("../../models/materialModels")


let materialInsert = async (req, res) => {

    let { materialName, materialOrder } = req.body
    let obj
    try {
        let inserObj = {
            materialName,
            materialStatus: true,
            materialOrder
        }
        let materialRes = await materialModels.insertOne(inserObj)
        obj = {
            status: 1,
            msg: "material Save",
            materialRes
        }
        res.send(obj)

    }
    catch (error) {
        obj = {
            status: 0,
            msg: "Material name already exist...",
            error
        }
        res.send(obj)
    }



}

let materialView = async (req, res) => {
    let data = await materialModels.find()
    let obj = {
        status: 1,
        mgs: "material View",
        data
    }
    res.send(obj)
}
let materialDelete = async (req, res) => {
    let { id } = req.params;
    let delRes = await materialModels.deleteOne({ _id: id })
    let obj = {
        status: 1,
        mgs: "material Delete",
        delRes
    }
    res.send(obj)
}

let materialmultiDelete = async (req, res) => {
    let { ids } = req.body;

    let delRes = await materialModels.deleteMany({ _id: ids })
    let obj = {
        status: 1,
        mgs: "material Multi Delete",
        delRes

    }
    res.send(obj)

}
let changeStatus=async (req,res)=>{
    let {ids}=req.body;
   
    let updateRes=await materialModels.updateMany(
        {_id:ids},
        [
            {
                $set: {
                    materialStatus: { $not: "$materialStatus" }
                }
            }
        ]
    )
    // let allmateria=await materialModel.find({_id:ids}).select('materialStatus')
 
    // for(let items of allmateria){
    //     await materialModel.updateOne({_id:items._id},{$set:{ materialStatus:!items.materialStatus }})
    // }
 
    // console.log(allmateria)
    let obj={
        status:1,
        mgs:"Status Change",
        updateRes
       
    }
    res.send(obj)
 
 
}

let updatematerial = async (req, res) => {
    let { id } = req.params;
    let { materialName, materialOrder } = req.body

    let updObj = {
        materialName,
        materialOrder
    }

    let updRes = await materialModels.updateOne({ _id: id }, { $set: updObj })

    let obj = {
        status: 1,
        msg: "Material Updated",
        updRes

    }
    res.send(obj)

}

let singlematerialView = async (req, res) => {
    let { id } = req.params
    let data = await materialModels.findOne({ _id: id })
    let obj = {
        status: 1,
        mgs: "material View",
        data
    }
    res.send(obj)
}

module.exports = { materialInsert, materialView, materialDelete, materialmultiDelete, updatematerial, singlematerialView, changeStatus }