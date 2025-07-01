let mongoose = require("mongoose")
let cartSchema = new mongoose.Schema({

    productName: {
        type: String,
     
    },
    productId: {type: mongoose.Types.ObjectId, ref: "product"},
    productImage: String,
    productPrice:Number,
    productQuantity: Number,
    color: {type: mongoose.Types.ObjectId, ref: "color"},
    userId: {type: mongoose.Types.ObjectId, ref: "user"},
})

let cartrModel = mongoose.model("cart", cartSchema)

module.exports = { cartrModel }