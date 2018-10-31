//回复模块
const mongoose = require('mongoose');
const replies=new mongoose.Schema({
    interact:{
        type:mongoose.Schema.ObjectId,
        ref:'interacts'
    },
     user:{
         type:mongoose.Schema.ObjectId,
         ref:'persons',
     },
     content:{
         type:String
     }
},{versionKey:false,timestamps:{createAt:"create_time",updateAt:"update_time"}});
module.exports=mongoose.model('replies', replies);