// let express = require("express");
// const multer = require('multer');
// const { subcategoryInsert } = require("../../controllers/admin/subcategoryControllers");

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         return cb(null, "uploads/subcategory") //uploads/subcategory path name folder
//     },
//     filename: function (req, file, cb) {
//         cb(null, `${Date.now()}-${file.originalname}`)
//     }
// })

// const upload = multer({ storage: storage })


// let subcategoryRoutes = express.Router();

// subcategoryRoutes.post('/insert', upload.single('subcategoryImage'), subcategoryInsert)

// module.exports = { subcategoryRoutes }