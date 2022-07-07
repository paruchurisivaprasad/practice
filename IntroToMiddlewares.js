let express=require('express')
let app=express()
let bodyParser=require('body-parser')


app.use(bodyParser.urlencoded({ extended:true }))


app.use('/adddata',(req,res,next)=>{

    


    let form=`<form action="/add" method="POST"> <input type="text" name="fruit"><br><input type="text" name="count"> <br><button type="submit">submit</button> </form> `

    res.send(form)

    

})


app.use('/add',(req,res,next)=>{

    let r=req.body;


console.log(r);


    res.status(302).redirect('/')

})


app.use('/',(req,res,next)=>{
    let h1='<a href="http://localhost:5200/adddata">redirect </a><h1 style="background:red; color:white; padding:20px;     text-transform: uppercase;     text-align:center;    "> this is home page</h1>'

    res.send(h1)
})

    

app.listen(5200,()=>{
    console.log(' port listening at 5200 port ');
})