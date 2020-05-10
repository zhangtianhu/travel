<template>
  <transition name="el-fade-in-linear">
    <div class="body">
    <span style="font-weight:bold;font-size:36px;margin-bottom:60px;margin-top:66px">TRAVEL</span>
      <el-input placeholder="手机或邮箱" type="mobile" v-model="username">
        <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
      </el-input>
      <el-input placeholder="密码" type="password" v-model="password">
        <i slot="prefix" class="el-input__icon el-icon-view"></i>
      </el-input>
      <el-button type="primary" @click="login">登录</el-button>
      <div class="bottom-nav">
        <router-link to="/register">
          <div>注册</div>
        </router-link>
        <div>忘记密码</div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'

export default {
  name: "Login",
  data: function() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function (e) {
      axios.post('http://localhost:10000/user/user/login',{
        'username': this.username,
        'password': this.password
      }).then(res => {
        res = res.data
        if(res.code !== 200) {
          this.$nextTick(() => {
            loading.close();
          });
          this.$notify.error({
            title: '错误',
            message: res.message
          })
          return
        }
        // 登录成功以后将Token值存到本地
        this.$store.state.token = res.data
        // decodeURIComponent对URI进行解码
        let redirect = decodeURIComponent(this.$route.query.redirect || '/');  // 获取登录成功后要跳转的路由。
        this.$nextTick(() => {
          loading.close();
        });
        this.$router.push({
          path: redirect
        })
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .body
    display: flex
    justify-items center
    flex-direction column
    align-items center
    width 100%
    height 100%
    background-image:url("./login.jpeg")
    opacity 0.9
    .el-input
      width 5.7rem
      opacity 0.7
      &:nth-child(1)
        margin-top .8rem
      &:nth-child(2)
        margin-top .3rem
    .el-button
      height .9rem
      margin-top .8rem
      width 5.7rem
    .el-input >>> input
      height .9rem
      outline none
    .bottom-nav
      margin-top .3rem
      display inline-flex
      width 5.7rem
      margin-bottom 100%
      justify-content space-between // 向两边分开
      div
        color #646464
  // 当高小于568px
  @media screen and (min-height: 568px) // iPhone 5/5S/5SE
    .body
      .bottom-nav
        margin-bottom 36.2%
  @media screen and (min-height: 640px) // Galaxy S5
    .body
      .bottom-nav
        margin-bottom 52.2%
  @media screen and (min-height: 667px) // iPhone 6/7/8
    .body
      .bottom-nav
        margin-bottom 57.3%
  @media screen and (min-height: 736px) // iPhone 6/7/8 Plus
    .body
      .bottom-nav
          margin-bottom 68.5%
  @media screen and (min-height: 812px) // iPhoneX
    .body
      .bottom-nav
        margin-bottom 96%
  @media screen and (min-height: 1024px) // iPad
    .body
      .bottom-nav
        margin-bottom 74.5%
</style>