//token API鉴权凭证


module.exports=function(req){
    var token=req.body.token||req.headers.token||req.query.token;
    if(token){
        return token
    }else{
        return null;
    }
}