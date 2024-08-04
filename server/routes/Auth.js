const express = require("express")
const routes = express.Router()
const {Login,Signup} = require("../controller/Auth")

routes.post("/login",Login)
routes.post("/signup",Signup)

module.exports = routes