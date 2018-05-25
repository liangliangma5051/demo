// sql语句
var sqlMap = {
  // 注册用户
    addUser: 'insert into user(id, name, age, sex, password) values (0, ?, ?,?,?)',
  // 登录
    loginUser:'select name, age, sex from user where name= ? and password=?'

}

module.exports = sqlMap;
