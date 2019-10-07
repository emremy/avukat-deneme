const mainModel = require('../model/mainModel');

exports.index = (req,res,next)=>{
    var resultUser = mainModel.name.indexOf(req.vhost[0]);
    if(resultUser >= 0){
        res.render('publicFiles/index',{
            title:"Avukat bilmem ne - AvukatSitesi.com",
            path:"/"
        });
    }else{
        res.render('orderFiles/index',{
            title:"Bu alan adını satın almak ister misin?",
            path:"/"
        })
    }

}