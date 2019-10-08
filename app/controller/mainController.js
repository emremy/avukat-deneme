const Users = require('../model/mainModel');

exports.index = (req,res,next)=>{
    let subdomain = req.vhost[0].toString();
    Users.findAll(
        {
            where: {subdomain:subdomain},
            attributes: ['id','subdomain','nameAndSurname','information','zipCode','email','country','city','phonenumber']
        }
    ).then(user=>{
        console.log(user[0])
            res.render('publicFiles/main/index',{
                title:"Avukat bilmem ne - AvukatSitesi.com",
                path:"/",
                result: user[0]
            })
        }
    ).catch(() => {
            res.render('publicFiles/orderFiles/index',{
            title:"Bu alan adını satın almak ister misin?",
            path:"/"
        })
    });

}