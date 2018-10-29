// const jwt=require('express-jwt');
const {Router}=require('express');
const router=Router();
// const tokenConfig=require('./config/tokenConfig');
// const jwt=require('jsonwebtoken');
const user=require('../modles/user');
//管理员
const auth = require('../config/auth');
//添加用户
router.post('/add', auth, async (req, res, next) => {
    try {
        const {
            address, 
            age,
            birthday,
            // branchID,
            branchName,
            education,
            header,
            hometown,
            // id,
            idCard,
            jobRank,
            joinPartyTime,
            lastPayTime,
            leadPerson,
            nation,
            partyIdentity,
            partyStatus,
            password,
            phone,
            qqNum,
            salary,
            sex,
            totalScore,
            username,
            wxNum
        } = req.body;
        const data = await user.create({
            address,
            age,
            birthday,
            // branchID,
            branchName,
            education,
            header,
            hometown,
            // id,
            idCard,
            jobRank,
            joinPartyTime,
            lastPayTime,
            leadPerson,
            nation,
            partyIdentity,
            partyStatus,
            password,
            phone,
            qqNum,
            salary,
            sex,
            totalScore,
            username,
            wxNum
        });
        res.json({
            code: 200,
            data,
            msg: '成功添加用户'
        })
    } catch (err) {
        next(err);
    }

});
//获取用户列表
router.get('/list', async (req, res, next) => {
    try {
        let data = await user.find()
        res.json({
            code: 200,
            data,
            msg: '成功获取用户列表'
        })
    } catch (err) {
        next(err);
    }
})
//删除用户
router.delete('/:idCard',auth,async(req,res,next)=>{
    try{
        let {idCard}=req.params;
        let data=await user.remove({idCard})
        res.json({
            code:200,
            data,
            msg:'成功删除一名用户'
        })
    }catch(err){
        next(err);
    }
});
//修改用户信息
// router.put('/:idCard',auth,async(req,res,next)=>{
//     let {idCard}=req.params;
//     {
//         address,
//         age,
//         birthday,
//         branchID,
//         branchName,
//         education,
//         header,
//         hometown,
//         id,
//         idCard,
//         jobRank,
//         joinPartyTime,
//         lastPayTime,
//         leadPerson,
//         nation,
//         partyIdentity,
//         partyStatus,
//         password,
//         phone,
//         qqNum,
//         salary,
//         sex,
//         totalScore,
//         username,
//         wxNum
//     }=req.body;
//     let data = await user.update(
//         { idCard },
//         {
//             $set: {
//                 address,
//                 age,
//                 birthday,
//                 branchID,
//                 branchName,
//                 education,
//                 header,
//                 hometown,
//                 id,
//                 jobRank,
//                 joinPartyTime,
//                 lastPayTime,
//                 leadPerson,
//                 nation,
//                 partyIdentity,
//                 partyStatus,
//                 password,
//                 phone,
//                 qqNum,
//                 salary,
//                 sex,
//                 totalScore,
//                 username,
//                 wxNum
//             }
//         },
//         upsert = false,
//         multi = false
//     );
//     res.json({
//         code:200,
//         data,
//         msg:'成功修改用户信息'
//     })
// })


module.exports = router;




//创建用户
// router.post("/createUser",())
