const mongoose = require('mongoose');
const news = new mongoose.Schema({
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'adminUser',
    },
    comment:String,
    content:String,
    count:Number,
    currentTime:Date,
    isScan:Number,
    newsId:Number,
    pic: String,
    title: {
        type:String,
        require:true
    },
    titleDesc: String,
    type:{
        type:Number
        // type:mongoose.SchemaTypes.ObjectId,
        // ref:'category'

    },
},{versionKey:false,tiemstamps:{createAt:"createTime",updateAt:"updateTime"}});
module.exports=mongoose.model('news',news);
