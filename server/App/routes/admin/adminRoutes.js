let express=require("express")
const { colorRoutes } = require("./colorRoutes")
const { materialRoutes } = require("./materialRoutes")
const { faqRoutes } = require("./faqRoutes")
const { countryRoutes } = require("./countryRoutes")
const { categorylRoutes } = require("./categoryRoutes")
const {whychooseRoutes} = require("./whychooseRoutes")
const { subcategoryRoutes } = require("./subcategoryRoutes")
const { adminauthRoutes } = require("./adminauthRoutes")

let adminRoutes=express.Router()

adminRoutes.use("/auth",adminauthRoutes) //http://localhost:8000/admin/auth/
adminRoutes.use("/color",colorRoutes) //http://localhost:8000/admin/color/
adminRoutes.use("/material",materialRoutes) //http://localhost:8000/admin/material/
adminRoutes.use("/faq",faqRoutes) //http://localhost:8000/admin/faq/
adminRoutes.use("/country",countryRoutes) //http://localhost:8000/admin/country/
adminRoutes.use("/category/",categorylRoutes) //http://localhost:8000/admin/category/
adminRoutes.use("/whychoose", whychooseRoutes);//http://localhost:8000/admin/whychoose/
adminRoutes.use("/subcategory", subcategoryRoutes);//http://localhost:8000/admin/subcategory/



module.exports={adminRoutes}