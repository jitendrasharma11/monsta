let express = require("express");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "uploads/whychoose") //uploads/whychoose path name folder
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload =multer({ storage: storage })

const { whychooseInsert, whychooseView } = require("../../controllers/admin/whychooseControllers");
let whychooseRoutes = express.Router();

whychooseRoutes.post('/insert', upload.single('whychooseImage'), whychooseInsert)

whychooseRoutes.get('/view', whychooseView)

module.exports = { whychooseRoutes }