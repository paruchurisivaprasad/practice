let express=require('express')

let router=express.Router()

let fs=require('fs')

let txt=''




router.get('/allmessages',(req,res)=>{

    fs.readFile('message.txt','utf-8',   (err,data)=>{

        txt=  data
    
    })
    

res.send(txt)

    
    
})

module.exports=router