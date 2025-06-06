const { whychooseModel } = require("../../models/whychoosemodel");
let fs=require("fs")

let whychooseInsert = async (req, res) => {
    let { whychooseTitle, whychooseOrder, whychooseDescription } = req.body;

    let obj = {
        whychooseTitle,
        whychooseStatus: true,
        whychooseOrder,
        whychooseDescription,
    };

    if (req.file?.filename) {
        obj.whychooseImage = req.file.filename;
    }

    try {
        let whychooseRes = await whychooseModel.create(obj);  // use `.create`, not `insertOne`
        res.send({
            status: 1,
            msg: "Why Choose Saved",
            data: whychooseRes
        });
    } catch (error) {
        res.send({
            status: 0,
            msg: "Why Choose insert error",
            error
        });
    }
};

let whychooseView = async (req, res) => {
  
    let searchObj = {

    }
    let {currentPage,limit}=req.query

    if (req.query.whychooseTitle != '') {
        searchObj['whychooseTitle']=new RegExp(req.query.whychooseTitle,"i")
        
    }
    let finalSkip=(currentPage-1)*limit

    let data = await whychooseModel.find(searchObj).skip(finalSkip).limit(limit)

    let AllNumberRec = await whychooseModel.find(searchObj)

    let obj = {
        status: 1,
        AllNumberRec:AllNumberRec.length,
        pages:Math.ceil(AllNumberRec.length/limit),
        msg: "Why Choose View",
        staticPath: process.env.WHYCHOOSEIMAGEPATH,
        data
    }
    res.send(obj)
}

let whychoosemultiDelete = async (req, res) => {
    let { ids } = req.body

    let whychooseView = await whychooseModel.find({ _id: ids }).select("whychooseImage")

    for (let v of whychooseView) {
        let deletePath = "uploads/whychoose/"+ v.whychooseImage
        fs.unlinkSync(deletePath)
    }

    let data = await whychooseModel.deleteMany({ _id: ids })


    let obj = {
        status: 1,
        msg: "Why Choose Deleted",

    }
    res.send(obj)
}

let whychooseStatus = async (req, res) => {
    let { ids } = req.body;

    try {
        let items = await whychooseModel.find({ _id: { $in: ids } }).select('whychooseStatus');

        for (let item of items) {
            await whychooseModel.updateOne(
                { _id: item._id },
                { $set: { whychooseStatus: !item.whychooseStatus } }
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

module.exports = { 
    whychooseInsert, 
    whychooseView, 
    whychoosemultiDelete, 
    whychooseStatus 
};