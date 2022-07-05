let express=require('express')

let app= express()

app.get('/',(req,res)=>{
    res.send("this route doesn't exit use /home , /about , /node ")
})

app.get('/home',(req,res)=>{
    let h1='<h1 style="color:blue;">Welcome to Home page'
    res.send(h1)
})

app.get('/about',(req,res)=>{
    let h2='<h2> this is about page</h2>'

    res.send(h2)
})

app.get('/node',(req,res)=>{
    let h3='<h3>my first node project</h3>'

    res.send(h3)
})

app.listen(4001,()=>{
    console.log('port listening at 4001');
})