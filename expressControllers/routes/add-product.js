let express=require('express')

let router=express.Router()

let getcontrollers=require('../controllers/product')

let path=require('path')

router.get('/add-product',getcontrollers.getProducts)


router.post('/add-product',getcontrollers.postProducts)


module.exports=router
