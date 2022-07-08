let express=require('express')

let path=require('path')


let app=express()

let bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({ extended:true }))

app.use(express.static(path.join(__dirname,'public')))

let addproductroute=require('./routes/add-product')
let shoproute=require('./routes/shop')
let contactroute=require('./routes/contact')

app.use(addproductroute)
app.use(shoproute)
app.use(contactroute)

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'./','views','404.html'))
})

app.listen(4222,()=>{
    console.log('llistening at 4222 port ');
})

