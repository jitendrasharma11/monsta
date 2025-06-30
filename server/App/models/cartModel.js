let mongoose = require("mongoose")
let cartSchema = new mongoose.Schema({

    productName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 2000,
    },
    productId: {type: mongoose.Types.ObjectId, ref: "product"},
    productImage: String,
    productPrice:Number,
    productQuantity: Number,
    productColor: {type: mongoose.Types.ObjectId, ref: "color"},
    userId: {type: mongoose.Types.ObjectId, ref: "user"},
})

let cartrModel = mongoose.model("cart", cartSchema)

module.exports = { cartrModel }