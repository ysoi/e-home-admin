// const jwt=require('express-jwt');
const {Router}=require('express');
const router=Router();
const persons=require('../modles/user');
const auth=require('../config/auth');
router.post('/add', auth, async (req, res, next) => {
    try {
        const {
            address,
            age,
            birthday,
            branchID,
            branchName,
            education,
            header,
            hometown,
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
        let data = await persons.create({
            address,
            age,
            birthday,
            branchID,
            branchName,
            education,
            header,
            hometown,
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
            msg: '新闻创建成功'
        })
    } catch (err) {
        next(err);
    }
});
//获取用户列表
router.get('/list', async (req, res, next) => {
    try {
        let data = await persons.find()
        res.json({
            code: 200,
            data,
            msg: '成功获取用户列表'
        })
    } catch (err) {
        next(err);
    }
});
//获取某一用户信息
router.get('/:idCard', async (req, res, next) => {
    try {
        let {idCard}=req.params;
        let data = await persons.find({idCard});
        // console.log(data);
        res.json({
            code: 200,
            data,
            msg: '成功获取一名用户'
        })
    } catch (err) {
        next(err);
    }
});
//删除用户
router.delete('/:idCard',auth,async(req,res,next)=>{
    try{
        let {idCard}=req.params;
        let data=await persons.remove({idCard})
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
router.put('/:idCard', auth, async (req, res, next) => {
    try {
        let { idCard } = req.params;
        let {
            address,
            age,
            birthday,
            branchID,
            branchName,
            education,
            header,
            hometown,
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
        let data = await persons.update(
            { idCard },
            {
                $set: {
                    address,
                    age,
                    birthday,
                    branchID,
                    branchName,
                    education,
                    header,
                    hometown,
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
                }
            },
            upsert = false,
            multi = false
        );
        res.json({
            code: 200,
            data,
            msg: '成功修改用户信息'
        })
    } catch (err) {
        next(err);
    }

})


module.exports = router;




