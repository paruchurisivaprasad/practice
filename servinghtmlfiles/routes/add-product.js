let express=require('express')

let router=express.Router()

let path=require('path')

router.get('/add-product',(req,res,next)=>{


    res.sendFile(path.join(__dirname,'../','views','addproduct.html'))
})


router.post('/add-product',(req,res,next)=>{

    let r=req.body;
console.log(r);
    res.status(302).redirect('/shop')

})


module.exports=router
