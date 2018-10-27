// const jwt=require('express-jwt');
const {Router}=require('express');
const router=Router();
const tokenConfig=require('./config/tokenConfig');
const jwt=require('jsonwebtoken');
const user=require('./modles/user');
//管理员







//创建用户
router.post("/createUser",())
