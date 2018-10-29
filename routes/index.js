var {Router} = require('express');
var router = Router();
const adminUser=require('../controller/adminUser');
const news=require('../controller/new');
const category=require('../controller/category');
const detail=require('../controller/detail');
const carouse=require('../controller/carouse');
const user=require('../controller/user');

/* GET home page. */
router.use('/admin',adminUser);
router.use('/news',news);
router.use('/category',category);
router.use('/detail',detail);
router.use('/carouse',carouse);
router.use('/user',user);

module.exports = router;
