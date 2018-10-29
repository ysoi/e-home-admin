const mongoose=require('mongoose');
//创建骨架
const  user=new mongoose.Schema({
    address:{
        type:String,
        default:'河南郑州'
    },
    age:{
        type:Number,
        default:20
    },
    birthday:{
        type:Date,
    },
    // branchID:{
    //     type:String,
    //     require:true
    // },
    branchName:{
        type:String,
        default:"信息工程学院党支部"
    },
    education:{
        type:String,
        default:'本科'
    },
    header:{
        type:String,
        default:'http://oowantxlb.bkt.clouddn.com/upload/front/810e55dfbbe2166a156e1aa4380da15a.png'
    },
    hometown:{
        type:String,
        default:"中国-上海"
    },
    // id:{
    //     type:Number,
    //     unique:true,
    //     require:true,
       
    // },
    idCard:{
        type:String,
        unique:true,
        require:true,
    },
    jobRank:{
        type:String,
        default:"教授"
    },
    joinPartyTime:{
        type:Date,
        require:true,
        default:null
    },
    lastPayTime:{
        type:Date,
        require:true,
        default:null
    },
    leadPerson:{
        type:String,
        require:true
    },
    nation:{
        type:String,
        require:true
    },
    partyIdentity:{
        type:String,
        require:true,
       
    },
    partyStatus:{
        type:Number,
        require:true,
      
    },
    password:{
        type:String,
        require:true,
        
    },
    phone:{
        type:String,
    },
    qqNum:{
        type:String,
        require:true,
        unique:true
    },
    salary:{
        type:Number,
    },
    sex:{
         type:Number,
         default:0
    },
    totalScore:{
        type:Number,
        require:true
    },
    username:{
        type:String,
        require:true,
        unique:true
    },
    wxNum:{
        type:String,
        require:true,
        unique:true
    }

},
{versionKey:false,timestamps:{createAt:"create_time",updateAt:"update_time"}}
)
module.exports=mongoose.model('user',user);