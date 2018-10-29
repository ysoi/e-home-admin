const {Router}=require('express');
const router=Router();
const category=require('../modles/category');
const auth=require('../config/auth');
//添加管理员

router.post('/addCategory',auth,async (req,res,next)=>{
    try{
       const {
           title,
           type,
        }=req.body;
        const data=await category.create({
           title,
           type,
        });
        res.json({
            code:200,
            data,
            msg:'成功添加新闻类别'
        })
    }catch(err){
        next(err);
    }
  
    
});
//获取所有新闻类别
router.get('/categoryList',auth,async(req,res,next)=>{
    try{
        let data= await category.find()
        res.json({
            code:200,
            data,
            msg:'成功获取新闻类别列表'
        })
    }catch(err){
        next(err);
    }
})
module.exports =router;