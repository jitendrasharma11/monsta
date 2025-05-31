const { whychooseModel } = require("../../models/whychoosemodel");


let whychooseInsert = async (req, res) => {
    let { whychooseTitle, whychooseOrder, whychooseDescription } = req.body;

    let obj = {
        whychooseTitle,
        whychooseStatus: true,
        whychooseOrder,
        whychooseDescription,
    };

    if (req.file) {
         if (req.file.filename) {
            obj[`whychooseImage`] = req.file.filename
        }
    }

     try {
        let whychooseRes = await whychooseModel.insertOne(obj)
        obj = {
            status: 1,
            msg: "Why Choose Save",
            whychooseRes
        }
        res.send(obj)

    }
    catch (error) {
        obj = {
            status: 0,
            msg: "Why Choose name already exist...",
            error
        }
        res.send(obj)
    }
}

let whychooseView = async (req, res) => {

    let data = await whychooseModel.find();
    let obj = {
        status: 1,
        msg: "Why choose View",
        staticPath: process.env.WHYCHOOSEIMAGEPATH,
        data,

    }
    res.send(obj)

};

module.exports = { whychooseInsert, whychooseView };