//连接mongoosedb服务器
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/eHome',{useNewUrlParser:true},(err,res)=>{
});
const db=mongoose.connection;
db.on('open',()=>{
    console.log('Connected Success');
});
db.on('error',()=>{
    console.log('Connected Fail');
});
module.exports=db;
