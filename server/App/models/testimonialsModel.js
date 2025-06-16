let mongoose = require("mongoose")

let testimonialsSchema = new mongoose.Schema({
    testimonialsImage: String,
    testimonialsName: {
        type: String,
        unique: true,
        required: true,
        minLength: 2,
        maxLength: 20
    },
    testimonialsDesignation: {
        type: String,
        unique: true,
        required: true,
        minLength: 2,
        maxLength: 20
    },
    testimonialsRating: Number,
    testimonialsOrder: Number,
    testimonialsMessage: {
        type: String,
        required: true,
        minLength: 5,
        unique: true
    },
    testimonialsStatus: Boolean
})


let testimonialsModel = mongoose.model("testimonials", testimonialsSchema)

module.exports = { testimonialsModel }