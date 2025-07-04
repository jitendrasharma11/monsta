const { faqModel } = require("../../models/faqModels");

let faqAdd = async (req, res) => {
    let { faqQuestion, faqAnswer, faqOrder } = req.body;
    let obj;

    try {
        let faqInsert = {
            faqQuestion,
            faqAnswer,
            faqOrder,
            faqStatus: true
        };

        let data = await faqModel.create(faqInsert); // ✅ Changed from insertOne

        obj = {
            status: 1,
            msg: "Faq Added",
            data
        };
    } catch (error) {
        obj = {
            status: 0,
            msg: "Please Add Valid Faq",
            error
        };
    }

    res.send(obj);
};

let faqView = async (req, res) => {
    let searchObj = {};
    let { currentPage = 1, limit = 10 } = req.query;

    // ✅ Search condition
    if (req.query.faqQuestion && req.query.faqQuestion !== '') {
        searchObj.faqQuestion = new RegExp(req.query.faqQuestion, "i");
    }

    let finalSkip = (currentPage - 1) * limit;

    try {
        let data = await faqModel.find(searchObj).skip(finalSkip).limit(Number(limit));
        let allRecords = await faqModel.find(searchObj);

        let obj = {
            status: 1,
            AllNumberRec: allRecords.length,
            pages: Math.ceil(allRecords.length / limit),
            msg: "Faq View",
            data
        };

        res.send(obj);
    } catch (error) {
        res.send({
            status: 0,
            msg: "Error fetching FAQs",
            error
        });
    }
};

let faqSingleView = async (req, res) => {
    let { id } = req.params;

    try {
        let data = await faqModel.findOne({ _id: id });

        res.send({
            status: 1,
            msg: "Single faq",
            data
        });
    } catch (error) {
        res.send({
            status: 0,
            msg: "Error fetching single FAQ",
            error
        });
    }
};

let faqUpdate = async (req, res) => {
    let { id } = req.params;
    let { faqQuestion, faqAnswer, faqOrder } = req.body;

    let updateObj = {
        faqQuestion,
        faqAnswer,
        faqOrder
    };

    try {
        let data = await faqModel.updateOne({ _id: id }, { $set: updateObj });

        res.send({
            status: 1,
            msg: "Faq updated",
            data
        });
    } catch (error) {
        res.send({
            status: 0,
            msg: "Error updating FAQ",
            error
        });
    }
};

let changeStatus = async (req, res) => {
    let { ids } = req.body;

    try {
        let allfaq = await faqModel.find({ _id: ids }).select('faqStatus');

        for (let items of allfaq) {
            await faqModel.updateOne({ _id: items._id }, { $set: { faqStatus: !items.faqStatus } });
        }

        res.send({
            status: 1,
            msg: "Status Changed"
        });
    } catch (error) {
        res.send({
            status: 0,
            msg: "Status Change Failed",
            error
        });
    }
};

let faqDelete = async (req, res) => {
    let { id } = req.params;

    try {
        let faqDelete = await faqModel.deleteOne({ _id: id });

        res.send({
            status: 1,
            msg: "Faq deleted",
            faqDelete
        });
    } catch (error) {
        res.send({
            status: 0,
            msg: "Faq deletion failed",
            error
        });
    }
};

let faqMultipleDelete = async (req, res) => {
    let { ids } = req.body;

    try {
        let deletRes = await faqModel.deleteMany({ _id: ids });

        res.send({
            status: 1,
            msg: "Multiple faqs deleted",
            deletRes
        });
    } catch (error) {
        res.send({
            status: 0,
            msg: "Multiple deletion failed",
            error
        });
    }
};

module.exports = {
    faqAdd,
    faqView,
    changeStatus,
    faqSingleView,
    faqUpdate,
    faqDelete,
    faqMultipleDelete
};