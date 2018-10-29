const { Router } = require('express');
const router = Router();
const carouse = require('../modles/carouse');
const auth = require('../config/auth');
//添加轮播
router.post('/add', auth, async (req, res, next) => {
    try {
        const {
            imgUrl,
            title,
            type,
            url
        } = req.body;
        const data = await carouse.create({
            imgUrl,
            title,
            type,
            url
        });
        res.json({
            code: 200,
            data,
            msg: '成功添加轮播图'
        })
    } catch (err) {
        next(err);
    }


});
//获取轮播图列表
router.get('/list', async (req, res, next) => {
    try {
        let data = await carouse.find()
        res.json({
            code: 200,
            data,
            msg: '成功获取轮播图列表'
        })
    } catch (err) {
        next(err);
    }
})
//删除轮播图
router.delete('/:url',auth,async(req,res,next)=>{
    try{
        let {url}=req.params;
        let data=await carouse.remove({url})
        res.json({
            code:200,
            data,
            msg:'成功删除一张轮播图'
        })
    }catch(err){
        next(err);
    }
})
module.exports = router;