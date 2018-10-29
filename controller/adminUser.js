const {Router}=require('express');
const router=Router();
const adminUser=require('../modles/addAdmin');
const auth=require('../config/auth');
//添加管理员

router.post('/adminUser',auth,async (req,res,next)=>{
    try{
       const {
            username,
            nickname,
            password,
            avatar,
            desc,
            job,
            phone,
            sex
        }=req.body;
        const data=await adminUser.create({
            username,
            nickname,
            password,
            avatar,
            desc,
            job,
            phone,
            sex
        });
        res.json({
            code:200,
            data,
            msg:'成功添加管理员'
        })
    }catch(err){
        next(err);
    }
  
    
});
//获取所有的管理员
router.get('/adminList',auth,async(req,res,next)=>{
    try{
        let adminList= await adminUser.find()
        // .populate({
        //     select:"-password"
        // });
        res.json({
            code:200,
            data:adminList,
            msg:'成功获取管理员列表'
        })
    }catch(err){
        next(err);
    }
}),
//管理员登录
router.post('/login', async (req,res,next)=>{
    try{
        let {username,password}=req.body;
        if(username&&password){
           const user=await adminUser.findOne({username});
           if(user){
                if(password==user.password){
                    req.session.user=user;
                    res.json({
                        code:200,
                        msg:'登录成功',

                    })
                }else{
                    res.json({
                        code:403,
                        msg:'用户密码不对'
                    })
                }
           }else{
                res.json({
                    code:402,
                    msg:'该用户不存在'
                })
           }

        }else{
            res.json({
                code:401,
                msg:'缺少必要信息'
            })
        }
    }catch(err){
        next(err);
    }
});

module.exports =router;