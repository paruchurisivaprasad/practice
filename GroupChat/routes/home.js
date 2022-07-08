let express=require('express')

let router=express.Router()
let fs=require('fs')
let loginlocal=require('./login')

router.get('/',(req,res)=>{
let homeform='<form onsubmit="document.getElementById(`username`).value= localStorage.getItem(`username`)" action="/postmsg" method="post"> <input type="text" placeholder="enter message" name="message"><input id="username" type="text" placeholder="enter username" name="userdetails"> <button type="submit">submit</button> </form>'

res.send(homeform)

})


router.post('/postmsg', (req,res)=>{

    let msg=req.body.message;
    let users=req.body.userdetails;

    





    fs.appendFile('message.txt',` ${users} : ${msg}  `, (err)=>{

        if (err)  throw err; 

  
    })



    res.status(302).redirect('/messages')
})

module.exports=router;