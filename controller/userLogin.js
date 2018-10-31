//用户登录
const { Router } = require('express');
const router = Router();
const jwt = require('jsonwebtoken');
const tokenConfig = require('../config/tokenConfig');
const persons = require('../modles/user');
router.post('/', async (req, res, next) => {
    try {
        let { idCard, password } = req.body;
        let data = await persons.findOne({ idCard });
        if (data) {
            if (data.password == password) {
                //token的配置项之一
                let userInfo = {
                    id: data._id,
                    name: data.username,
                    idCard: data.idCard,
                    header: data.header
                }
                //获取签名token expires [iksˈpaiəz] 失效
                let token = jwt.sign(userInfo, tokenConfig.secret, { expiresIn: tokenConfig.exp() });

                res.json({
                    code: 200,
                    data: token,
                    msg: '用户登录成功'
                })
            } else {
                res.json({
                    code: 405,
                    msg: '用户密码错误'
                })
            }
        } else {
            res.json({
                code: 404,
                msg: '该用户不存在'
            })
        }
    } catch (err) {
        next(err);
    }

})
//用户获取个人信息 
router.get('/userInfo', (req, res, next) => {
    let token = req.headers.token || req.body.token || req.query.token;
    jwt.verify(token, tokenConfig.secret, (err, decode) => {
        if (err) {
            res.json({
                code: 406,
                msg: '登录状态失效'
            });
            return;
        }
        persons.findOne({ _id:decode.id }).then(data => {
            res.json({
                code: 200,
                data,
                msg: '成功获取一名用户'
            })
        }).catch(err => {
            next(err);
        })

    })
});
//修改个人信息
router.put('/revizeInfo', (req, res, next) => {
        
        let token = req.headers.token || req.body.token || req.query.token;

        let {
            address,
            age,
            birthday,
            branchID,
            branchName,
            education,
            header,
            idCard,
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
        jwt.verify(token, tokenConfig.secret, (err, decode) => {
            if (err) {
                res.json({
                    code: 406,
                    msg: '登录状态失效'
                });
                return;
            };
           persons.update(
                {_id:decode.id },
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
            ).then(data=>{
                res.json({
                    code: 200,
                    data,
                    msg: '成功修改用户信息'
                })
            }).catch(err=>{
                next(err);
            });
    })    
})

//退出登录

module.exports = router;