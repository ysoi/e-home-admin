const { Router } = require('express');
const router = Router();
const jwt = require('jsonwebtoken');
const tokenConfig = require('../config/tokenConfig');
const interacts = require('../modles/interact');
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