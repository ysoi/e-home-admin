//解密token
const jwt=require('jsonwebtoken');
const tokenConfig=require('./tokenConfig');
function getJwtInfo(token,req,res,next){
    jwt.verify(token,tokenConfig.secret,(err,decode)=>{
        
    })
}