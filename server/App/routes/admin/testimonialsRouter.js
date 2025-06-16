let express = require("express")
let multer = require("multer")
const { testimonialAdd, testimonialsView, testimonialsDelete, testimonialsChangeStatus, testimonialsSingleView, testimonialsUpdate } = require("../../controllers/admin/testimonialController")

let testimonialsRouter = express.Router()

let storage = multer.diskStorage({
    destination: function (req, file, cd) {
        return cd(null, "uploads/testimonials")
    },
    filename: function (req, file, cd) {
        cd(null, `${Date.now()}-${file.originalname}`)
    }
})

let uploads = multer({ storage: storage })

testimonialsRouter.post("/add", uploads.single("testimonialsImage"), testimonialAdd)

testimonialsRouter.get("/view", testimonialsView)

testimonialsRouter.post("/delete", testimonialsDelete)

testimonialsRouter.put("/change-status", testimonialsChangeStatus)

testimonialsRouter.get("/view/:id",testimonialsSingleView)

testimonialsRouter.put("/edit/:id",uploads.single("testimonialsImage"),testimonialsUpdate)

module.exports = { testimonialsRouter }