let express=require("express");

const { slideView, ProductView, getsingleProduct, getBestSellingProduct, getTestimonials } = require("../../controllers/web/homePageControllers");


let homePageRoutes=express.Router();

homePageRoutes.get("/slider",slideView)

homePageRoutes.get("/home-product",ProductView)

homePageRoutes.get('/view/:slug', getsingleProduct)

homePageRoutes.get('/getBestsellProduct', getBestSellingProduct);

homePageRoutes.get('/getTestimonials', getTestimonials);


module.exports={homePageRoutes}