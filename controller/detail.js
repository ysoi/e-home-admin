const {Router}=require('express');
const router=Router();
const newsDetail=require('../modles/detail');
const auth=require('../config/auth');
router.post('/addDetail',auth,async(req,res,next)=>{
    try{
       const {
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

        }=req.body;
    //    console.log(req.body);
       let data=await newsDetail.create({
            author,
            comment,
            content,
            count,
            isScan,
            newsId,
            pic,
            title,
            titleDesc,
            type
        });
        // console.log(data);
        res.json({
            code:200,
            data,
            msg:'新闻详情创建成功'
        })
    }catch(err){
        next(err);
    }
});
//获取新闻列表
router.get('/detailList',async(req,res,next)=>{
  try{
    let {page=1,size=10}=req.query;
       page=parseInt(page);
       size=parseInt(size);
    let data= await newsDetail.find().skip((page-1)*size).limit(size).sort({_id:-1})
    .populate({
           path:'author',
           select:"-password"
       }).populate({
           path:'type'
       })
       ;
    res.json({
        code:200,
        data,
        msg:'成功获取新闻详情列表'
    })

  }catch(error){
      next(error);
  }
});
//获取单个新闻
router.get('/:newsId',async (req,res,next)=>{
    try{
      let {newsId}=req.params;
      let data= await newsDetail.findOne({newsId}).populate({
             path:'author',
             select:"-password"
         }).populate({
             path:'type'
         });
      res.json({
          code:200,
          data,
          msg:'成功获取单个新闻详情'
      })
  
    }catch(error){
        next(error);
    }
  });
  //删除某个新闻
//   router.delete('/:newsId',auth,async(req,res,next)=>{
//     let {newsId}=req.params;
//     let data= await news.findOne({newsId}).populate({
//            path:'author',
//            select:"-password"
//        }).populate({
//            path:'type'
//        });
//     res.json({
//         code:200,
//         data,
//         msg:'成功获取单个新闻'
//     })

//   }catch(error){
//       next(error);
//   }
//   })
module.exports=router;