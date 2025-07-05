let express=require("express");
const { checkToken } = require("../../middleware/checkToken");
const { saveOrder, viewOrder, verifyOrder } = require("../../controllers/web/orderControllers");

let orderRoute=express.Router();

orderRoute.post("/order-save",checkToken,saveOrder)

orderRoute.post("/verify-order",checkToken,verifyOrder)


module.exports={orderRoute}
