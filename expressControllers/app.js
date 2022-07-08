let express=require('express')

let path=require('path')


let app=express()

let bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({ extended:true }))

app.use(express.static(path.join(__dirname,'public')))

let addproductroute=require('./routes/add-product')
let shoproute=require('./routes/shop')
let contactroute=require('./routes/contact')
let error404=require('./controllers/error')

app.use(addproductroute)
app.use(shoproute)
app.use(contactroute)

app.use(error404.err404)

app.listen(7700,()=>{
    console.log('llistening at 7700 port ');
})

