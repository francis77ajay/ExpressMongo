const express = require("express")
const router = express.Router()
const Students = require('../models/student')
const MyClass = require('../models/classSchema')
const { addListener } = require("../models/student")


router.get('/',async(req,res)=>{
  try{  
      
    const student = await Students.find()
    res.json(student);
    console.log('Get request ');
}catch(err){
    res.send('error sending' + err )
    }
    try{  
      
        const myclass = await MyClass.find()
        res.json();
        console.log('Get request ');
    }catch(err){
        res.send('error sending' + err )
        }
})

router.post('/',async(req,res)=>{
    const student = new Students({
        name: req.body.name,
        rollNo: req.body.rollNo,
        mobileNo: req.body.mobileNo,
        classId: req.body.classId
    })
    const myclass = new MyClass({
        standard: req.body.standard,
        division: req.body.division,
        classId: req.body.classId
    })
    try{
           const a1 = await student.save()
           res.json(a1)

    }catch(err){
        res.send('Error')
    }
    try{
        const a2 = await myclass.save()
        res.json(a2)

 }catch(err){
     res.send('Error')
 }
})
router.patch('/:id',async(req,res)=>{
    try{
            const student = await Students.findById(req.params.id)
            
            student.name = req.body.name
            student.rollNo = req.body.rollNo
            student.mobileNo= req.body.mobileNo,
            student.classId= req.body.classId

            const a1 = await student.save()
            res.json(a1)
    }catch(err){
        res.send('error patching')
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const student = await Students.findByIdAndRemove(req.params.id)
        const a1 = await student.remove()
        res.json(a1)
        console.log("a1")
    }catch(err){
        res.send('error Deleting')
        
    }
})

module.exports = router