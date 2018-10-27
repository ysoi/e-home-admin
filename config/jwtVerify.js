//tooken核实
const jwt=require('express-jwt');
const tokenConfig=require('./tokenConfig');
const getToken=require('./controller/function/getToken');
module.exports=jwt({
    secret:tokenConfig.secret,
    getToken:getToken
})