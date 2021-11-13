const express = require("express")
const router = express.Router()
const Students = require('../models/student')
const Myclass = require('../models/myClass')
const { addListener } = require("../models/student")

 
router.get('/student',async(req,res)=>{
  try{  
      
    const student = await Students.find()
    res.json(student);
    console.log('Get request ');
}catch(err){
    res.send('error sending' + err )
    }
})
router.get('/filtered/class/:class',async(req,res)=>{
    try{  
        const myclass = await Myclass.findOne({"class":req.params.class})
        console.log(myclass)
      const student = await Students.find({"class":myclass._id})
      console.log(student)
      res.json(student);
      console.log('Get request ');
  }catch(err){
      res.send('error sending' + err )
      }
  })
  router.get('/filtered/standard/:standard',async(req,res)=>{
    try{  
      const student = await Students.find({"standard":req.params.standard})
      console.log(student)
      res.json(student);
      console.log('Get request ');
  }catch(err){
      res.send('error sending' + err )
      }
  })
router.get('/class',async(req,res)=>{
    try{  
        
      const myclass = await Myclass.find()
      console.log(myclass);
      res.json(myclass);
      
  }catch(err){
      res.send('error sending' + err )
      }
  })
router.post('/student',async(req,res)=>{
    const student = new Students({
        name: req.body.name,
        rollNo: req.body.rollNo,
        mobileNo: req.body.mobileNo,
        classId: req.body.classId
    })
    console.log(student)
    try{ console.log(student)
           const a1 =  await student.save()
          res.json(a1)
         
    }catch(err){
        res.send('Error'+err)
    }

})
router.post('/class',async(req,res)=>{
    const myclass = new Myclass({
        class:req.body.class,
        standard:req.body.standard,
        division:req.body.division
    })
   
    try{    
           const a2 = await myclass.save()
           res.json(a2)

    }catch(err){
        res.send('Error'+err)
    }

})
router.patch('/updateCLASS/:id',async(req,res)=>{
    try{ 
        const tempID=req.params.id
        const student = await Students.findById(tempID)
        const qery = student.classId
        const myclass =  await Myclass.findOne({"class":qery})
        student.division = myclass.division
        student.standard = myclass.standard
        student.class = myclass._id
        const a1 = await student.save()
        res.json(a1)
    }catch(err){
        res.send('error Deleting'+err)
        
    }
})
router.patch('/DELstudent+class/:id',async(req,res)=>{
    try{ console.log("1")
  
    }catch(err){
        res.send('error Deleting'+err)
        
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

router.delete('/student/:id',async(req,res)=>{
    try{
        const student = await Students.findByIdAndRemove(req.params.id)
        const a1 = await student.remove()
        res.json(a1)
        console.log("a1")
    }catch(err){
        res.send('error Deleting')
        
    }
})
router.delete('/class/:class',async(req,res)=>{
    try{ console.log("a1")
        const myclass = Myclass.findOne({"class":req.params.class})
         await Myclass.findByIdAndRemove(myclass._id)
        const a1 = await myclass.remove()
        res.json(a1)
        console.log("a1")
    }catch(err){
        res.send('error Deleting')
        
    }
})

module.exports = router