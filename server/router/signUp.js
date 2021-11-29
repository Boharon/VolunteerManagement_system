const express=require('express');
const router=express.Router();

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message: 'Massege recieved from post on /api/signUp'
    })
});

module.exports=router;