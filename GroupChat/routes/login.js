let express=require('express')

let router=express.Router()

router.get('/login',(req,res)=>{

    let form='<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/userdata" method="post"> <input id="username" type="text" placeholder="enter username" name="userdetails"> <button type="submit">submit</button> </form>'

    res.send(form)
})


router.post('/userdata',(req,res)=>{

    let resbody=req.body;



    res.status(302).redirect('/')



})

module.exports=router;