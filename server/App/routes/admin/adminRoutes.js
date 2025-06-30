let express=require("express")
const { colorRoutes } = require("./colorRoutes")
const { materialRoutes } = require("./materialRoutes")
const { faqRoutes } = require("./faqRoutes")
const { countryRoutes } = require("./countryRoutes")
const { categorylRoutes } = require("./categoryRoutes")
const {whychooseRoutes} = require("./whychooseRoutes")
const { subcategoryRoutes } = require("./subcategoryRoutes")
const { adminauthRoutes } = require("./adminauthRoutes")
const { subsubcategoryRoutes } = require("./subsubcategoryRoutes")
const { productRoutes } = require("./productRoute")
const { companyProfileRoutes } = require("./companyProfileRoutes")
const { testimonialsRouter } = require("./testimonialsRouter")
const { sliderRoutes } = require("./sliderRoutes")

let adminRoutes=express.Router()

adminRoutes.use("/auth",adminauthRoutes) //http://localhost:8000/admin/auth/
adminRoutes.use("/color",colorRoutes) //http://localhost:8000/admin/color/
adminRoutes.use("/material",materialRoutes) //http://localhost:8000/admin/material/
adminRoutes.use("/faq",faqRoutes) //http://localhost:8000/admin/faq/
adminRoutes.use("/country",countryRoutes) //http://localhost:8000/admin/country/
adminRoutes.use("/category/",categorylRoutes) //http://localhost:8000/admin/category/
adminRoutes.use("/whychoose", whychooseRoutes);//http://localhost:8000/admin/whychoose/
adminRoutes.use("/subcategory", subcategoryRoutes);//http://localhost:8000/admin/subcategory/
adminRoutes.use("/subsubcategory", subsubcategoryRoutes);//http://localhost:8000/admin/subsubcategory/
adminRoutes.use("/testimonials", testimonialsRouter) //http://localhost:8000/admin/testimonials/
adminRoutes.use("/product", productRoutes);//http://localhost:8000/admin/product/
adminRoutes.use("/company-profile",companyProfileRoutes) //http://localhost:8000/admin/company-profile/
adminRoutes.use("/slider",sliderRoutes) //http://localhost:8000/admin/slider/



module.exports={adminRoutes}