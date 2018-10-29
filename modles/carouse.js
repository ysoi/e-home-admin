const mongoose = require('mongoose');
const carouse=new mongoose.Schema({
      imgUrl:{
          type:String,
          unique:true,
          require:true
      },
      title:{
          type:String,
          unique:true
      },
    type:{
        type: mongoose.SchemaTypes.ObjectId,
        require:true,
        ref:'category',
    },
    url:{
        type:String,
        unique:true,
        require:true
    }
},{versionKey:false,timestamps:{createAt:"create_time",updateAt:"update_time"}});
module.exports=mongoose.model('carouse',carouse);
