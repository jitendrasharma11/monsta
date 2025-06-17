const { testimonialsModel } = require("../../models/testimonialsModel")
const fs = require("fs");
const path = require("path");

let testimonialAdd = async (req, res) => {
    let { testimonialsName, testimonialsDesignation, testimonialsRating, testimonialsOrder, testimonialsMessage } = req.body
    let obj
    let testimonialInsert = {
        testimonialsName,
        testimonialsDesignation,
        testimonialsRating,
        testimonialsOrder,
        testimonialsMessage,
        testimonialsStatus: true
    }
    try {
        if (req.file) {
            if (req.file.filename) {
                testimonialInsert['testimonialsImage'] = req.file.filename
            }
        }



        let data = await testimonialsModel.insertOne(testimonialInsert)

        obj = {
            status: 1,
            msg: "Testimonials Added",
            data
        }
        res.send(obj)
    }
    catch (error) {
        obj = {
            status: 0,
            msg: "Testimonials Already Exist",
            error
        }
        res.send(obj)
    }

}

let testimonialsView = async (req, res) => {

    let testimonialSearch = {

    }

    if (req.query.testimonialsName != "") {
        testimonialSearch['testimonialsName'] = new RegExp(req.query.testimonialsName, "i")
    }



    let { currentPage, limit } = req.query


    let finalSkip = (currentPage - 1) * limit

    let totalRec = await testimonialsModel.find()

    let data = await testimonialsModel.find(testimonialSearch).skip(finalSkip).limit(limit)

    let obj = {
        status: 1,
        msg: "Testimonials Viewed",
        staticPath: process.env.TESTIMONIALSIMAGEPATH,
        totalRecords: totalRec.length,
        pages: Math.ceil(totalRec.length / limit),
        data
    }
    res.send(obj)
}


let testimonialsDelete = async (req, res) => {
    try {
        let { ids } = req.body;

        if (!ids?.length) return res.send({ status: 0, msg: "No IDs provided" });

        let testimonialImageData = await testimonialsModel.find({ _id: { $in: ids } }).select("testimonialsImage");

        testimonialImageData.forEach(v => {
            let fileName = v?.testimonialsImage;
            if (fileName) {
                let deletePath = `uploads/testimonials/${fileName}`;
                if (fs.existsSync(deletePath)) {
                    try { fs.unlinkSync(deletePath); } catch (e) { }
                }
            }
        });

        let data = await testimonialsModel.deleteMany({ _id: { $in: ids } });

        res.send({ status: 1, msg: "Testimonials Deleted", data });
    } catch (err) {
        res.status(500).send({ status: 0, msg: "Something went wrong", error: err.message });
    }
};

let testimonialsChangeStatus = async (req, res) => {

    let { ids } = req.body

    let data = await testimonialsModel.updateMany({ _id: ids }, [{ $set: { testimonialsStatus: { $not: "$testimonialsStatus" } } }])

    let obj = {
        status: 1,
        msg: "Testimonials Status Changed",
        data
    }
    res.send(obj)
}


let testimonialsSingleView = async (req, res) => {
    let { id } = req.params
    let data = await testimonialsModel.findOne({ _id: id })

    let obj = {
        status: 1,
        msg: "Testimonials Single Record",
        staticPath: process.env.TESTIMONIALSIMAGEPATH,
        data
    }
    res.send(obj)
}

let testimonialsUpdate = async (req, res) => {

    let { id } = req.params
    let { testimonialsName, testimonialsDesignation, testimonialsRating, testimonialsOrder, testimonialsMessage } = req.body
    let obj
    let testimonialInsert = {
        testimonialsName,
        testimonialsDesignation,
        testimonialsRating,
        testimonialsOrder,
        testimonialsMessage,
    }
    if (req.file) {
        if (req.file.filename) {
            testimonialInsert['testimonialsImage'] = req.file.filename

        }
    }
    try {

        let testimonialsImageData = await testimonialsModel.find({ _id: id }).select("testimonialsImage")
        for (let v of testimonialsImageData) {
            let deletePath = "uploads/testimonials/" + v.testimonialsImage
            fs.unlinkSync(deletePath)
        }





        let data = await testimonialsModel.updateMany({ _id: id }, { $set: testimonialInsert })

        obj = {
            status: 1,
            msg: "Testimonial Record Updated",
            data
        }
        res.send(obj)
    }
    catch (error) {
        obj = {
            status: 0,
            msg: "Testimonial Record Already Exist",
            error
        }
        res.send(obj)
    }


}

module.exports = { testimonialAdd, testimonialsView, testimonialsDelete, testimonialsChangeStatus, testimonialsSingleView, testimonialsUpdate }