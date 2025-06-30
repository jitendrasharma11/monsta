let mongoose = require("mongoose")
let cartSchema = new mongoose.Schema({

    productName: {
        type: String,
        unique: true,
        required: true,
        minLength: 2,
        maxLength: 20,
    },
    productImage: String,
    productPrice:Number,
    productQuantity: Number,
    colorStatus: Boolean
})

let colorModel = mongoose.model("color", cartSchema)

module.exports = { colorModel }