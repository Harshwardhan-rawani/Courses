const express = require("express")
const routes = express.Router()
const {getcourse, postcourse, deleteCourse, upload } = require("../controller/course")

routes.get("/courses",getcourse)
routes.post('/courses', upload.single('image'), postcourse);
routes.delete ("/courses/:id",deleteCourse)

module.exports = routes