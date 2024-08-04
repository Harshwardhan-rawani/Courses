require('dotenv').config();
const express = require("express")
const app =  express()
const path = require("path")
const cors = require("cors")

const getconnection = require("./Connection")

getconnection(process.env.MONGODB_URL )
//model
const auth = require("./models/Auth")
//routes 
const compiler = require("./routes/compiler")
const video = require("./routes/video")
const authroute = require("./routes/Auth")


Port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname)));
app.use(cors())


app.use('/api', compiler);
app.use("/",authroute)
app.use("/",video)
app.listen(Port,()=>{console.log(`Server connected on localhost: ${Port}`)})