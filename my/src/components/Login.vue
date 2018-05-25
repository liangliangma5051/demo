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
          密码:
          <input  type="text" placeholder="密码" v-model="password">
        </li>
      </ul>
      <div>
        <a class="see col1cc419" >随便看看&gt;</a>
      </div>

      <div class="submit-button bac1cc419" @click="loginUser">登录</div>
      <p class="agreement">点击登录，即表示您已阅读并同意<a class="see text-underline">《用户协议》</a></p>
    </div>

    <!--第三方登陆-->
    <div class="other-login">
      <div class="line">
        <p>其他登录方式</p>
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
  import { mapActions} from 'vuex'
  export default {

    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        name: '',
        password: ''
      }
    },
    mounted () {
    },
    methods: {
      ...mapActions([
        'login'
      ]),
      loginUser() {
        // debugger
        let name = this.name;
        let password = this.password;
        this.$http.post('/api/userApi/loginUser', {
          name: name,
          password: password,
        }).then((response) => {
          this.login(response.data)
        }).catch((err)=>{
          console.log(err.message);
        })
      }
    }
  }
</script>
