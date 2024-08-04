const express = require("express")
const routes = express.Router()
const {videoupload, getvideoupload} = require("../controller/video") 
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'views/uploads/videos');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });
routes.post('/upload', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'video', maxCount: 1 }]), videoupload)
routes.get('/upload',getvideoupload)

module.exports = routes