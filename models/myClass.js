const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
        
        class:{
            type:String,
            required:false
        }

        , 
        standard:{
            type: String,
            required:false
        },
        division:{
            type:String,
            required:false
        },
        

        



})

module.exports = mongoose.model('myClass',classSchema)