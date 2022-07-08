let express=require('express')

let router=express.Router()


router.get('/messages',  (req,res)=>{
    

    let h5=  `<h2 style="color:green;"> success</h2> <br> <a href="http://localhost:7000/login">redirect to username</a><br><br><a href="http://localhost:7000/allmessages">redirect to messages page</a>`

    res.send(h5)


    



})


module.exports=router