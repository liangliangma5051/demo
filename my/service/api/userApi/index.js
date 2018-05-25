var models = require('../../db');
var express = require('express');
var router = express.Router();

var $sql = require('./userSqlMap');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var errorCodes = require('../../utils/errorCodes');

//使用连接池
const secret = 'aaa';
var  token;

// 向前台返回JSON方法的简单封装
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '0',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

var createToken=(res)=>{
  token =jwt.sign({
    name:'abc123'
  },secret,{
    expiresIn:60*30
  });
  res.cookie('token', token, { expires: new Date(Date.now() + 900000), httpOnly: true });
}

//检测用户名
router.post('/allName',function (req, res) {
  let param = req.body;
  req.getConnection((err, connection)=>{
    connection.query('select count(name) as pageSize from user where name = "'+param.name+'"', function(err, result) {

      if(result[0].pageSize>0){
        res.json(errorCodes.userName)
      }else{
        res.json(errorCodes.errorOk)
      }
    });
  })
})

router.post('/addUser',function (req, res) {
  let shasum = crypto.createHash('sha1');
  let param = req.body;
  let shasumpass=shasum.update(param.password).digest('hex');
  req.getConnection((err, connection)=>{
    connection.query($sql.addUser,[param.name,param.age,param.sex,shasumpass], function(err, result) {
      jsonWrite(res, result);
      // connection.release();
    });
  })
})

// 登录设置token cookie
router.post('/loginUser',function (req, res) {
  let shasum = crypto.createHash('sha1');
  let param = req.body;
  let shasumpass=shasum.update(param.password).digest('hex');
  req.getConnection((err, connection)=>{
    connection.query($sql.loginUser,[param.name,shasumpass], function(err, result) {
      if(result.length ===1){
        createToken(res)
        res.json({
          token:token
        });
      }else{
        res.json({
          code: '0',
          msg: '操作失败'
        });
      }
      // connection.release();
    });
  })
})


module.exports= router
