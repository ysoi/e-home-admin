//鉴权
module.exports=function(req,res,next){
    if(req.session&&req.session.user){
        next()
    }else{
        res.json({
            code:404,
            msg:'登录状态失效'
        })
    }
}