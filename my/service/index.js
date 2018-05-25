// node 后端服务器
const express = require('express');
const app = express();
const userApi = require('./api/userApi/');
const bodyParser = require('body-parser');
const isLogin = require('./lnterceptor');
const dbOptions= require('./db');
const router = express.Router();
const myConnection = require('express-myconnection');
var mysql = require('mysql');


app.use(myConnection(mysql, dbOptions, 'single'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 后端api路由

var cookie = require('cookie-parser');
app.use(cookie())


app.use('/api/userApi',  isLogin.checkAuth,userApi);


// 监听端口
// app.listen(3000);
// console.log('success listen at port:3000......');
module.exports = app;
