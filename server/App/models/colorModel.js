let mongoose = require("mongoose")
let colorSchema = new mongoose.Schema({

    colorName: {
        type: String,
        unique: true,
        required: true,
        minLength: 2,
        maxLength: 20,
    },
    colorCode: String,
    colorOrder: Number,
    colorStatus: Boolean
})

let colorModel = mongoose.model("color", colorSchema)

module.exports = { colorModel }