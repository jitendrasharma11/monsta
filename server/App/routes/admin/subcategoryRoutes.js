let express=require("express");


const multer  = require('multer');
const { subcategoryInsert, subcategoryView, parentCategory } = require("../../controllers/admin/subcategoryControllers");
// const upload = multer({ dest: 'uploads/category' })
let storage = multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,"uploads/subcategory")
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`) //6515655515pradeep.jpg
                                                    ////6515655519pradeep.jpg
    }
})
const upload = multer({ storage: storage })






let subcategoryRoutes=express.Router();


subcategoryRoutes.post('/insert', upload.single('subcategoryImage'),  subcategoryInsert)
subcategoryRoutes.get('/view',   subcategoryView )
subcategoryRoutes.get('/parentcategory', parentCategory  )

module.exports={subcategoryRoutes}