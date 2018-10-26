module.exports={
    secret:"ysoi",
    exp(){
        return Math.round(Date.now()/1000+3600*24*5);
    }
}