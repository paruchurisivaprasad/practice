
let express=require('express')

let router=express.Router()





router.get('/add-product',(req,res,next)=>{

    let form=`<form action="/admin/add-product" method="POST"> <input type="text" name="fruit"><br><br><input type="text" name="count"><br> <br><button type="submit">submit</button> </form> `

    res.send(form)
})


router.post('/add-product',(req,res,next)=>{

    let r=req.body;
console.log(r);
    res.status(302).redirect('/shop')

})


module.exports=router
