const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
        name:{
            type: String,
            required:false,
            
        },
        rollNo:{
            type:String,
            required:false,
            unique:true
        },
        classId:{
            type:String,
            required:false,
        },
        mobileNo:{
            type:String,
            required:false
        },
        standard:{
            type:String,
            required:false
        },
        division:{
            type:String,
            required:false
        },
        class:ObjectId
        

        
    }/*,{
        timestamps:true
    
}*/)

module.exports = mongoose.model('student',studentSchema)