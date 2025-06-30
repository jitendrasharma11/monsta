let express=require("express");

const { slideView, ProductView, getsingleProduct } = require("../../controllers/web/homePageControllers");


let homePageRoutes=express.Router();

homePageRoutes.get("/slider",slideView)

homePageRoutes.get("/home-product",ProductView)

homePageRoutes.get('/view/:slug', getsingleProduct)


module.exports={homePageRoutes}