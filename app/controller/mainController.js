exports.index = (req,res,next)=>{
    res.render('publicFiles/index',{
        title:"Avukat bilmem ne - AvukatSitesi.com",
        path:"/"
    });
}