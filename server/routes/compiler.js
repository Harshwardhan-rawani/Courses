const express = require("express")
const routes = express.Router()
const { CodeCompiler } = require("../controller/compiler")

routes.post("/execute",CodeCompiler)

module.exports = routes