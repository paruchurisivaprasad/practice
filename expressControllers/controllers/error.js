let path=require('path')


exports.err404=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','404.html'))
}