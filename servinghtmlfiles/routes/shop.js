let express=require('express')

let router=express.Router()
let path=require('path')


router.get('/shop',(req,res,next)=>{

    res.sendFile(path.join(__dirname,'../','views','shop.html'))
})


module.exports=router