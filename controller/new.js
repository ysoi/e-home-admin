const {Router}=require('express');
const router=Router();
const news=require('../modles/news');
const auth=require('../config/auth');
router.post('/addNews',auth, async(req,res,next)=>{
    try{
        let{
            author,
            comment,
            content,
            count,
            isScan,
            newsId,
            pic,
            title,
            titleDesc,
            type,
        }=req.body
        const addNews=await news.create({
            author,
            comment,
            content,
            count,
            isScan,
            newsId,
            pic,
            title,
            titleDesc,
            type, 
        });
        res.json({
            code:200,
            data:addnews,
            msg:'新闻创建成功'
        })
    }catch(error){
        next(error);
    }
});
//获取新闻列表
router.get('/newsList',async (req,rew,next)=>{
  try{
    let{page=1,size=10}=req.query;
       page=parseInt(page);
       page=parseInt(size);
    let newsList=news.find().skip((page-1)*size).limit(size).populate({
           path:'adminUser',
           select:"-password"
       }).populate({
           path:'categories'
       });
    res.json({
        code:200,
        data:newsList,
        msg:'成功获取新闻列表'
    })

  }catch(error){
      next(error);
  }
})
//获取单个新闻
router.get('/:newsId',async (req,rew,next)=>{
    try{
      let {newsId}=req.params;
      let newsDetail=news.findById(newId).populate({
             path:'adminUser',
             select:"-password"
         }).populate({
             path:'categories'
         });
      res.json({
          code:200,
          data:newsDetail,
          msg:'成功获取单个新闻'
      })
  
    }catch(error){
        next(error);
    }
  })
module.exports=router;