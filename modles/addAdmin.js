const mongoose=require('mongoose');
const adminUser= new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    nickname:String,
    password:{
        type:String,
    },
    avatar:String,
    desc:String,
    job:String,
    phone:String,
    sex:Number,
},{versionKey:false,tiemstamps:{createAt:'crate_time',updateAt:'update_time'}})
module.exports=mongoose.model('adminUser',adminUser);