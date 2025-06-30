let express = require("express");
const { checkToken } = require("../../middleware/checkToken");
const { addTOCart } = require("../../controllers/web/cartControllers");
let cartRoutes = express.Router();

cartRoutes.post('/add-to-cart',checkToken,addTOCart)

module.exports = { cartRoutes };