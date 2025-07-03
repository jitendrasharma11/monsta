let express=require("express");
const { checkToken } = require("../../middleware/checkToken");
const { saveOrder } = require("../../controllers/web/orderControllers");

let orderRoute=express.Router();

orderRoute.post("/order-save",checkToken,saveOrder)


module.exports={orderRoute}
