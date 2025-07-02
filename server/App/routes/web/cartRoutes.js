let express = require("express");
const { checkToken } = require("../../middleware/checkToken");
const { addTOCart, viewCart, deleteCart } = require("../../controllers/web/cartControllers");

let cartRoutes = express.Router();

cartRoutes.post('/add-to-cart',checkToken,addTOCart)

cartRoutes.post('/view-cart',checkToken,viewCart)

cartRoutes.delete('/delete-cart/:cartId',deleteCart)

module.exports = { cartRoutes };