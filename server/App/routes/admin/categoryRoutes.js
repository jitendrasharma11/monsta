let express = require("express");
const multer = require('multer')
// const upload = multer({ dest: 'uploads/category' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "uploads/category") //uploads/category path name folder
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

const { categoryInsert, categoryView, categorymultiDelete, categorySingleView, categoryStatus, categoryUpdate } = require("../../controllers/admin/categoryControllers");
let categorylRoutes = express.Router();

categorylRoutes.post('/insert', upload.single('categoryImage'), categoryInsert)

categorylRoutes.get('/view', categoryView)

categorylRoutes.get("/edit-row-data/:id", categorySingleView)

categorylRoutes.post("/delete", categorymultiDelete) 

categorylRoutes.post("/change-status", categoryStatus)

categorylRoutes.put("/update/:id", categoryUpdate)

module.exports = { categorylRoutes }