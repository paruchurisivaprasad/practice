let express=require('express')
let app=express()
let bodyParser=require('body-parser')
let fs=require('fs')


app.use(bodyParser.urlencoded({ extended:true }))





let txt=''
fs.readFile('message.txt','utf-8',(err,data)=>{

    console.log(data);
    txt=data
})


app.use('/adddata',(req,res,next)=>{

    


    let form=`<h1 style="background:black;color:green; padding:20px;">${txt}</h1><form action="/add" method="POST"> <input type="text" name="fruit"> <button type="submit">submit</button> </form> `

    res.send(form)

    

})

let cou=0

app.use('/add',(req,res,next)=>{

    let r=req.body;


   let strr=r.fruit

    fs.appendFile('message.txt',`${cou++}) `+ strr+" ",(err)=>{

        if (err)  throw err; 

         
  
    })

    res.status(302).redirect('/')


    fs.readFile('message.txt','utf-8',(err,data)=>{

        console.log(data);
        txt=data
    })
    
    

    

})

app.use('/',(req,res,next)=>{
    let h1='<a href="http://localhost:2300/adddata">redirect</a><h1 style="background:red; color:white; padding:20px;     text-transform: uppercase;     text-align:center;    "> this is home page</h1>'

    res.send(h1)
})

app.listen(2300,()=>{
    console.log('listening at 2300 port');


})
