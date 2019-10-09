module.exports.index = (req,res,next) =>{
    res.render('publicFiles/notSubdomain/index',{
        title:"Avukat sitesine hoş geldiniz",
        path:"notSubdomain/"
    });
}

module.exports.login = (req,res,next) => {
    res.render('publicFiles/notSubdomain/login',{
        title:"Avukat giriş | Avukatsitesi.com",
        path: 'notSubdomain/giris'
    })
}