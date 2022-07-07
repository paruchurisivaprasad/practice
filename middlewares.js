let express=require('express')

let app=express()



app.use((req,res,next)=>{

console.log("dummy");

next()
})

app.use((req,res,next)=>{

    console.log('another middleware');
    let h='<h2>GOOD MORNING</h2>'
    res.send(h)
})

app.listen(4000,()=>{

    console.log(" listening at 4000 port ");

})