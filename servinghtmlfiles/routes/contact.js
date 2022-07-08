let express=require('express')

let router=express.Router()
let path=require('path')



router.get('/contact',(req,res)=>{

    res.sendFile(path.join(__dirname,'../','views','contact.html'))

})

router.post('/contactform',(req,res)=>{
    let result=req.body;

    console.log(result);

    res.redirect('/suc')


})


router.get('/suc',(req,res)=>{



    res.sendFile(path.join(__dirname,'../','views','successmsg.html'))
})


module.exports=router