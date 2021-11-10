const mongoose = require('mongoose')


const classSchema = new mongoose.Schema({
        standard:{
            type: String,
            required:true
        },
        division:{
            type:String,
            required:true
        }



})

module.exports = classSchema
module.exports = mongoose.model('Myclass',classSchema)