const express = require("express");
const multer = require('multer');
const path = require('path');
const {
    sliderInsert,
    sliderSingleView,
    sliderView,
    slidermultiDelete,
    sliderStatus,
    sliderUpdate
} = require("../../controllers/admin/sliderController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/slider");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

const sliderRoutes = express.Router();

sliderRoutes.post('/insert', upload.single('sliderImage'), sliderInsert);
sliderRoutes.get('/view', sliderView);
sliderRoutes.get("/single-view/:id", sliderSingleView);
sliderRoutes.post("/multi-delete", slidermultiDelete); 
sliderRoutes.post("/status-change", sliderStatus);  
sliderRoutes.put("/update/:id", upload.single('sliderImage'), sliderUpdate); // ✅ now PUT

module.exports = { sliderRoutes };