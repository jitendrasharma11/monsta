const express = require("express");
const multer = require("multer");
const { 
    whychooseInsert, 
    whychooseView, 
    whychoosemultiDelete, 
    whychooseStatus 
} = require("../../controllers/admin/whychooseControllers");


const whychooseRoutes = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/whychoose");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage: storage });


whychooseRoutes.post('/insert', upload.single('whychooseImage'), whychooseInsert);
whychooseRoutes.get('/view', whychooseView);
whychooseRoutes.post('/delete', whychoosemultiDelete);
whychooseRoutes.post('/change-status', whychooseStatus);


module.exports ={whychooseRoutes}