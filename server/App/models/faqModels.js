let mongoose = require("mongoose")

let faqSchema = new mongoose.Schema({
    faqQuestion: {
        type: String,
        minLength: 5,
        unique: true,
        required: true
    },
    faqAnswer: {
        type: String,
        unique: true,
        required: true
    },
    faqOrder: Number,
    faqStatus: Boolean
})

let faqModel = mongoose.model("faq", faqSchema)

module.exports = (faqModel)