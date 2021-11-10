const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
        name:{
            type: String,
            required:true
        },
        rollNo:{
            type:String,
            required:true
        },
        mobileNo:{
            type:String,
            required:true
        },
        classId:{
            type:String,
            required:true
        }



})

module.exports = mongoose.model('Student',studentSchema)