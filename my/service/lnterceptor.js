var jwt = require('jsonwebtoken');
const secret = 'aaa';
var  token ;
exports.checkAuth = function (req,res,next){
   token = req.cookies.token
  if(req.url == '/loginUser' || req.url == '/allName'){
     next()
     // return;
  }else {
    if(token){
      jwt.verify(token,secret,function (err,decode) {
        if(!err){
          console.log(decode.name)
          next()
        }else{
          res.json({
            islogin:'验证失败重新登录'
          })
        }
      })
    }else {
      res.json({
        islogin:'没登录'
      })
    }
  }

}
