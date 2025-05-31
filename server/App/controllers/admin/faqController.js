const faqModels = require("../../models/faqModels")

let faqAdd = async (req, res) => {
    let { faqQuestion, faqAnswer, faqOrder } = req.body


    let obj
    try {
        let faqInsert = {
            faqQuestion,
            faqAnswer,
            faqOrder,
            faqStatus: true
        }


        let data = await faqModels.insertOne(faqInsert)

        obj = {
            status: 1,
            msg: "Faq Added",
            data
        }
        res.send(obj)
    }
    catch (error) {
        obj = {
            status: 0,
            msg: "Please Add Valid Faq",
            error
        }
        res.send(obj)
    }
    
}

let faqView = async (req, res) => {
    let searchObj = {

    }
    if (req.query.faqQuestion != '') {
        searchObj.faqQuestion= new RegExp(req.query.faqQuestion, "i");
        
    }
   

    let data = await faqModels.find(searchObj)
    let obj = {
        status: 1,
        mgs: "Faq View",
        data
    }
    res.send(obj)
}

// let faqView = async (req, res) => {

//     console.log(req.query.faqQuestion)
//     let isNumber =! isNaN(Number(req.query.faqQuestion))

//     let searchObj={}

//     // if (req.query.faqQuestion != '') {
//     //    searchObj.faqQuestion= new RegExp(req.query.faqQuestion, "i");
//     // }
//    if (req.query.faqOrder != '') {
//        searchObj.faqOrder=req.query.faqQuestion;
//     }
//     else{
//          searchObj.faqOrder={}
//     }
//     // let searchObj = {

//     // }
//     // if (req.query.faqQuestion != '') {
//     //     searchObj['faqQuestion'] = new RegExp(req.query.faqQuestion, "i");
//     // }

//     // if (req.query.faqAnswer != '') {
//     //     searchObj['faqAnswer'] = new RegExp(req.query.faqAnswer, "i");
//     // }
//     // if (req.query.faqOrder != '') {
//     //     searchObj['faqOrder'] = new RegExp(req.query.faqAnswer, "i");
//     // }

//     let data = await faqModels.find(searchObj)

//     let obj = {
//         status: 1,
//         msg: "faqs Viewd",
//         data
//     }
//     res.send(obj)
  
// }

let faqSingleView = async (req, res) => {
    let { id } = req.params

    let data = await faqModels.findOne({ _id: id })

    let obj = {
        status: 1,
        msg: "sinlge faq",
        data
    }
    res.send(obj)

}


let faqUpdate = async (req, res) => {
    let { id } = req.params
    let { faqQuestion, faqAnswer, faqOrder } = req.body

    let updateObj = {
        faqQuestion,
        faqAnswer,
        faqOrder
    }

    let data = await faqModels.updateOne({ _id: id }, { $set: updateObj })

    let obj = {
        status: 1,
        msg: "faq updated",
        data
    }

    res.send(obj)

}
let changeStatus = async (req, res) => {
    let { ids } = req.body;

    let allfaq = await faqModels.find({ _id: ids }).select('faqStatus')

    for (let items of allfaq) {
        await faqModels.updateOne({ _id: items._id }, { $set: { faqStatus: !items.faqStatus } })
    }

    let obj = {
        status: 1,
        mgs: "Status Change",

    }
    res.send(obj)


}
let faqDelete = async (req, res) => {
    let { id } = req.params

    let faqDelete = await faqModels.deleteOne({ _id: id })

    let obj = {
        status: 1,
        msg: "faq deleted",
        faqDelete
    }
    res.send(obj)
}

let faqMultipleDelete = async (req, res) => {
    let { ids } = req.body

    let deletRes = await faqModels.deleteMany({ _id: ids })

    let obj = {
        status: 1,
        msg: "faq deleted",
        deletRes
    }
    res.send(obj)
}

module.exports = { faqAdd, faqView, changeStatus, faqSingleView, faqUpdate, faqDelete, faqMultipleDelete }