const Users = require('../model/mainModel');

exports.index = (req,res,next)=>{
    let subdomain = req.vhost[0].toString();
    Users.findAll(
        {
            where: {subdomain:req.vhost[0]},
        }
    ).then(user=>{
            if(user[0] !== undefined){

                res.render('publicFiles/main/index',{
                    title:"Avukat bilmem ne - AvukatSitesi.com",
                    path:"/",
                    result: user[0]
                })
            }else{
                res.render('publicFiles/orderFiles/index',{
                    title:"Böyle bir alan adı yok!",
                    path:"/nullDomain"
                })
            }
        }
    ).catch(() => {
            res.render('publicFiles/orderFiles/index',{
            title:"Bu alan adını satın almak ister misin?",
            path:"/"
        })
    });

}