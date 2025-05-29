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

const { categoryInsert } = require("../../controllers/admin/categoryControllers");
let categorylRoutes = express.Router();

categorylRoutes.post('/insert', upload.single('categoryImage'), categoryInsert)

module.exports = { categorylRoutes }