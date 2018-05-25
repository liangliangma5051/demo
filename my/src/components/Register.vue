<template>
  <div>
    <!--返回上一页-->
    <div class="return">
      <i onclick="history.go(-1)"></i>
    </div>
    <!--登录-->
    <div class="login-wrap">
      <h1>欢迎来到一诺</h1>
      <ul class="clear-fix">
        <li>
          用戶名
          <input id="tel" type="text" placeholder="请输入名字" v-model="name">
        </li>
        <li>
          年齡:
          <input id="number" type="number" placeholder="年齡" v-model="age">
        </li>
        <li>
          密码:
          <input  type="text" placeholder="密码" v-model="password">
        </li>
        <li>
          性別：
          <select v-model="sex">
            <option value="1">男</option>
            <option value="2">女</option>
          </select>

        </li>
      </ul>

      <div class="submit-button bac1cc419" @click="addUser">注册/登录</div>
      <p class="agreement">点击登录，即表示您已阅读并同意<a class="see text-underline">《用户协议》</a></p>
    </div>

    <!--第三方登陆-->
    <div class="other-login">
      <div class="line">
        <p @click="allName">其他登录方式</p>
      </div>
      <ul class="login-icon clear-fix">
        <li class="fl clear-fix">
          <a>
            <img class="fr" src="../../src/assets/images/wx-icon.png" alt="">
          </a>
        </li>
        <li class="fr clear-fix">
          <a>
            <img class="fl"  src="../../src/assets/images/qq-icon.png" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        name: '',
        age: '',
        password: '',
        sex: ''
      }
    },
    methods: {
      addUser() {
            this.$http.post('/api/userApi/addUser', {
              name: this.name,
              age: this.age,
              sex: this.sex,
              password: this.password
            }).then((response) => {
              // this.$router.push('/')
            }).catch((err)=>{

            })
      },
      allName() {
        this.$http.post('/api/userApi/allName', {
          name: this.name,
        }).then((response) => {

        })
      }
    }

  }
</script>
