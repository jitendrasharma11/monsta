const { sliderModel } = require("../../models/sliderModel");
const fs = require("fs");

let sliderInsert = async (req, res) => {
    let { sliderTitle, sliderOrder } = req.body;

    let obj = {
        sliderTitle,
        sliderOrder,
        sliderStatus: true
    };

    if (req.file?.filename) {
        obj.sliderImage = req.file.filename;
    }

    try {
        let sliderRes = await sliderModel.create(obj);
        res.send({ status: 1, msg: "Slider Save", sliderRes });
    } catch (error) {
        res.send({ status: 0, msg: "Slider name already exist...", error });
    }
};

let sliderView = async (req, res) => {
    let searchObj = {};
    let { currentPage, limit } = req.query;

    if (req.query.sliderTitle) {
        searchObj['sliderTitle'] = new RegExp(req.query.sliderTitle, "i");
    }

    let finalSkip = (currentPage - 1) * limit;

    let data = await sliderModel.find(searchObj).skip(finalSkip).limit(limit);
    let allRec = await sliderModel.find(searchObj);

    res.send({
        status: 1,
        msg: "Slider View",
        staticPath: process.env.SLIDERIMAGEPATH,
        AllNumberRec: allRec.length,
        pages: Math.ceil(allRec.length / limit),
        data
    });
};

let slidermultiDelete = async (req, res) => {
    let { ids } = req.body;

    let allSliders = await sliderModel.find({ _id: ids }).select("sliderImage");

    for (let v of allSliders) {
        let deletePath = "uploads/slider/" + v.sliderImage;
        if (fs.existsSync(deletePath)) {
            fs.unlinkSync(deletePath);
        }
    }

    await sliderModel.deleteMany({ _id: ids });

    res.send({ status: 1, msg: "Slider Deleted" });
};

let sliderSingleView = async (req, res) => {
    let { id } = req.params;
    let data = await sliderModel.findOne({ _id: id });

    res.send({
        status: 1,
        msg: "Single Slider",
        staticPath: process.env.SLIDERIMAGEPATH,
        data
    });
};

let sliderUpdate = async (req, res) => {
    let { id } = req.params;
    let { sliderTitle, sliderOrder, oldSliderImage } = req.body;

    let obj = {
        sliderTitle,
        sliderOrder,
        sliderStatus: true
    };

    if (req.file?.filename) {
        let deletePath = "uploads/slider/" + oldSliderImage;
        if (fs.existsSync(deletePath)) {
            fs.unlinkSync(deletePath);
        }
        obj.sliderImage = req.file.filename;
    }

    try {
        let data = await sliderModel.updateOne({ _id: id }, { $set: obj });
        res.send({ status: 1, msg: "Slider Updated", data });
    } catch (error) {
        res.send({ status: 0, msg: "Update Error", error });
    }
};

let sliderStatus = async (req, res) => {
    let { ids } = req.body;
    let allSliders = await sliderModel.find({ _id: ids }).select("sliderStatus");

    for (let item of allSliders) {
        await sliderModel.updateOne(
            { _id: item._id },
            { $set: { sliderStatus: !item.sliderStatus } }
        );
    }

    res.send({ status: 1, msg: "Status Changed" });
};

module.exports = {
    sliderInsert,
    sliderView,
    slidermultiDelete,
    sliderSingleView,
    sliderUpdate,
    sliderStatus
};