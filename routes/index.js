var {Router} = require('express');
var router = Router();
const adminUser=require('../controller/adminUser');
const news=require('../controller/new');
/* GET home page. */
router.use('/admin',adminUser);
router.use('/news',news);
module.exports = router;
