<template>
  <div class="uppassword">
    <div class="up">设置密码</div>
    <div class="oldpw"><input v-model="stupwd" class="sty" type="text" placeholder="  密  码"></div>
    <div class="conpw"><input v-model="repwd" class="sty" type="text" placeholder="  确认密码"></div>
    <div class="textpw"><input v-model="textcode" class="sty" type="text" placeholder="  验证码">
      <div class="text"></div>
    </div>
    <router-link style="color: white" to="/index">
      <div class="next" @click="setpwd">下一步</div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        stupwd: '',
        repwd: '',
        textcode: ''
      }
    },
    created(){
      document.getElementsByClassName('header')[0].style.backgroundColor = 'rgb(89,95,111)'
    },
    methods: {
      setpwd(){
        window.localStorage.setItem('stupwd', this.stupwd)
        this.$parent.stupwd = this.stupwd
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .up
    margin 120px 14% 50px
    font-size 30px
    font-weight 100

  .oldpw, .conpw, .textpw
    margin 10px 14%
    height 50px
    width 72%
    background-color white
    border-radius 2px
    input
      height 100%
      display block
      margin-left 5%
      width 95%

  .next
    margin 20px 14%
    text-align center
    height 50px
    background-color #8b0000
    line-height 50px
    font-size 26px
    color white
</style>
