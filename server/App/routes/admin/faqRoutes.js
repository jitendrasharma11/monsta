let express=require("express")
const { faqAdd, faqView, faqSingleView, faqUpdate, faqDelete, faqMultipleDelete, changeStatus } = require("../../controllers/admin/faqController")

let faqRoutes = express.Router()

faqRoutes.post("/add", faqAdd)

faqRoutes.get("/view", faqView)
faqRoutes.get("/view/:id", faqSingleView)

faqRoutes.put("/update/:id", faqUpdate)

faqRoutes.delete("/delete/:id", faqDelete)

faqRoutes.post("/delete", faqMultipleDelete)

faqRoutes.get("/edit-row-data/:id", faqSingleView)

faqRoutes.put("/update/:id", faqUpdate)

faqRoutes.post("/change-status",changeStatus)

module.exports = { faqRoutes }