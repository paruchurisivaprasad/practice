let express=require('express')
let app=express()


let fs=require('fs')

 let bodyParser=require('body-parser')
 app.use(bodyParser.urlencoded({ extended:true }))

let loginRoute=require('./routes/login')
let homeroute=require('./routes/home')
let successroute=require('./routes/successPage')
let messageroute=require('./routes/messagesPage')


 app.use(loginRoute)

 app.use(homeroute)

 app.use(successroute)

 app.use(messageroute)


 app.use((req,res,next)=>{
    res.send('<h1 style="color:red;"> Page not found </h1>')
})
 





 app.listen(7000,()=>{
    console.log('port listening at 7000');
 })