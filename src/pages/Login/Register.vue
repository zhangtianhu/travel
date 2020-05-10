<template>
  <transition name="el-fade-in-linear">
    <div class="body">
        <span style="font-weight:bold;font-size:36px;margin-bottom:60px;margin-top:66px">TRAVEL</span>
      <el-input placeholder="手机号" v-model="username" :class="{ input: isInputColor}">
        <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
      </el-input>
      <el-input placeholder="密码" type="password" v-model="password">
        <i slot="prefix" class="el-input__icon el-icon-view"></i>
      </el-input>
      <div class="tip" v-bind:class="{ color: isColor }">
        密码为8-16位大小写字母、数字或符号2种以上组合
      </div>
      <el-button type="primary" @click="check">立即注册</el-button>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
export default {
  name: "Register",
  data: function() {
    return {
      username: '',
      password: '',
      isInputColor: false,
      isColor: false
    }
  },
  methods: {
    check: function (e) {
      let mobile = this.username
      let password = this.password
      axios.post('http://localhost:10000/user/user/register', {
          'mobile': mobile,
          'password': password,
          // 'code': this.code
      }).then(res => {
        res = res.data
        if(res.code !== 200) {
          this.$notify.error({
            title: '错误',
            message: res.message
          });
          return
        }
        // 验证通过并注册成功则跳转到主界面
        this.$router.push("/")
      })
    },
    register: function (e) {
      // 前端正则验证, 后端也需要验证
      let mobilePattern = /^1[3|4|5|8][0-9]\d{4,8}$/
      let passowrdPattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
      let mobilePatternReg = new RegExp(mobilePattern)
      let passowrdPatternReg = new RegExp(passowrdPattern)
      this.isInputColor = !mobilePatternReg.test(this.username)
      this.isColor = !passowrdPatternReg.test(this.password)
      if(this.isInputColor || this.isColor) {
        return
      }
      this.$router.push({path:'/Login'})
      // 将手机号和密码缓存起开便于SMS界面获取
      // localStorage.mobile = this.username
      // localStorage.password = this.password
      // 这里调用SMS组件的sendVerificationCode方法
      this.$emit('register')
      // this.$store.state.sms = !this.$store.state.sms
      this.username = ''
      this.password = ''
      
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
    background-image:url("./login.jpeg")
    opacity 0.9
    .tip
      width 5.65rem
      padding-top .15rem
      line-height .35rem
      color #ffffff
      font-size small
    .el-input
      width 5.7rem
      opacity 0.7
      &:nth-child(1)
        margin-top .8rem
      &:nth-child(2)
        margin-top .3rem
    .el-button
      height .9rem
      margin-top .4rem
      width 5.7rem
      margin-bottom 100%
    .el-input >>> input
      height .9rem
      outline none
    .color
      color red
    .input
      border: 1px solid red
</style>
