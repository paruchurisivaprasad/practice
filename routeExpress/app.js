let express=require('express')

let app=express();

let bodyParser=require('body-parser')

let AdminRoute=require('./routes/admin')
let ShopRoute=require('./routes/shop')
app.use(bodyParser.urlencoded({ extended:true }))

app.use('/admin',AdminRoute)
app.use('/shop',ShopRoute)




app.use((req,res,next)=>{
    res.send('<h1 style="color:red;"> Page not found </h1>')
})


app.listen(2500,()=>{
    console.log(`you are listening to port ${2500}`);
})