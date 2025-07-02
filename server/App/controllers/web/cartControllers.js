const { cartrModel } = require("../../models/cartModel");

let addTOCart = async (req, res) => {

    let { productId, productImage, productName, productPrice, productQuantity, color, userId } = req.body;


    let checkProductinCart = await cartrModel.findOne({ productId, color, userId })

    console.log("checkProductinCart", checkProductinCart)

    let resObj
    if (checkProductinCart) {

        resObj = {
            status: 0,
            msg: "Item Alerdy In Cart"
        }

        res.send(resObj)

    }
    else {

        let obj = {
            productId,
            productImage,
            productName,
            productPrice,
            productQuantity,
            color,
            userId
        }

        let cart = await cartrModel.insertOne(obj)


        resObj = {
            status: 1,
            msg: "Item Add In Cart",
            cart
        }

        res.send(resObj)

    }


}

let viewCart = async (req, res) => {

    let { userId } = req.body;

    let cartData = await cartrModel.find({ userId }).populate("color", "colorName")

    let obj = {

        status: 1,
        cartData,
        staticPath: process.env.PRODUCTIMAGEPATH,
    }
    res.send(obj)

}

let deleteCart = async (req, res) => {

    let {cartId} = req.params

    let cart = await cartrModel.deleteOne({ _id: cartId })

    let obj = {

        status: 1,
        msg: "Cart Items Delete",
        cart
    }

    res.send(obj)

}

module.exports = { addTOCart, viewCart, deleteCart }