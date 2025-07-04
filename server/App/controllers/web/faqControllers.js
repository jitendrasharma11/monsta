const { faqModel } = require("../../models/faqModels");

let getFaq = async (req, res) => {
    try {

        let data = await faqModel.find({ faqStatus: true });


        let obj;
        obj = {
            status: 1,
            msg: "Faq find",
            data,

        }

        res.send(obj);
        console.log("suc", obj);
    }
    catch (error) {
        obj = {
            status: 0,
            error
        }
        res.send(obj)
        console.log("error", obj)
    }
}

module.exports = { getFaq}