let express=require('express')

let app=express()

app.get('',(req,res)=>{

res.send('paruchuri sivaprasad')
})

app.listen(4000,()=>{

    console.log(" listening at 4000 port ");

})