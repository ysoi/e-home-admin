//互动模块
const mongoose = require('mongoose');
const interacts=new mongoose.Schema({
     user:{
         type:mongoose.Schema.ObjectId,
         ref:'persons',
     },
     content:{
         type:String
     },
     

},{versionKey:false,timestamps:{createAt:"create_time",updateAt:"update_time"}});
module.exports=mongoose.model('interacts',interacts);