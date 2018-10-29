const mongoose = require('mongoose');
const newsDetail=new mongoose.Schema({
    author:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'adminUser',
    },
    comment:String,
    content:String,
    count:Number,
    isScan:{
        type:Number,
        default:0
    },
    newsId:{
        type:String,
        require:true
    },
    pic:{
       type:String,
       require:true
    },
    title:{
        type:String,
        require:true
    },
    titleDesc:String,
    type:{
        type: mongoose.SchemaTypes.ObjectId,
        require:true,
        ref:'category',
    },
},{versionKey:false,timestamps:{createAt:"create_time",updateAt:"update_time"}});
module.exports=mongoose.model('newsDetail',newsDetail);
