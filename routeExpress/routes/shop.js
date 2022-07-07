
let express=require('express')

let router=express.Router()

router.get('/',(req,res,next)=>{
    let h1='<a href="http://localhost:2500/admin/add-product">redirect </a><h1 style="background:red; color:white; padding:20px;     text-transform: uppercase;     text-align:center;    "> this is home page</h1>'

    res.send(h1)
})


module.exports=router