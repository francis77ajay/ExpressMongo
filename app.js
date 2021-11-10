const { response } = require("express")
const express = require("express")
const mongoose = require("mongoose")
const url = 'mongodb://localhost/SchoolDB'


const app = express()

mongoose.connect(url)
const con = mongoose.connection

con.on('open',()=>{
    
    console.log('connected')
})
app.use(express.json())
const schoolRouter = require('../CRUD/routers/school')
app.use('/school',schoolRouter)


/*
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD,OPTIONS, PUT, PATCH, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin",
    "X-Requested-With", "Content-Type", "Accept")
    next()
    })

*/
app.listen(9000,()=>{
    console.log('server started')
} )