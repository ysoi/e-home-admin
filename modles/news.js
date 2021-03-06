
const mongoose = require('mongoose');
 
const news  = new mongoose.Schema({
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

},{versionKey: false, timestamps: {createdAt: 'create_time', updatedAt:
 'update_time'}});

 module.exports = mongoose.model('news',news) 
