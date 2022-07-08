let express=require('express')

let router=express.Router()

let path=require('path')

let getcontrollers=require('../controllers/product')

router.get('/shop',getcontrollers.getshop)


module.exports=router