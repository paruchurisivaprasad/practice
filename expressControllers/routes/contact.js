let express=require('express')

let router=express.Router()

let path=require('path')

let getcontrollers=require('../controllers/product')

router.get('/contact',getcontrollers.getcontact)

router.post('/contactform',getcontrollers.postcontact)


router.get('/suc',getcontrollers.redSuccess)


module.exports=router