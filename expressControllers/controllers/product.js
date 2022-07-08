let path=require('path')


exports.getProducts=(req,res,next)=>{


    res.sendFile(path.join(__dirname,'../','views','addproduct.html'))
}

exports.postProducts=(req,res,next)=>{

    let r=req.body;
console.log(r);
    res.status(302).redirect('/shop')

}

exports.getcontact=(req,res)=>{

    res.sendFile(path.join(__dirname,'../','views','contact.html'))

}

exports.postcontact=(req,res)=>{
    let result=req.body;

    console.log(result);

    res.redirect('/suc')


}

exports.redSuccess=(req,res)=>{



    res.sendFile(path.join(__dirname,'../','views','successmsg.html'))
}

exports.getshop=(req,res,next)=>{

    res.sendFile(path.join(__dirname,'../','views','shop.html'))
}