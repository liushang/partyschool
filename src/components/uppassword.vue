<template>
  <div class="uppassword">
    <div class="up">修改密码</div>
    <div class="oldpw"><input v-model="oldpw" class="sty" type="text" placeholder="  密  码"></div>
    <div class="conpw"><input v-model="conpw" class="sty" type="text" placeholder="  新密码"></div>
    <div class="textpw"><input class="sty" type="text" placeholder="  验证码">
      <div class="text"></div>
    </div>
    <router-link to="/person" style="color:white">
      <div class="next" @click="changepwd($event)">下一步</div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        oldpw: '',
        conpw: ''
      }
    },
    methods: {
      changepwd(e){
        if (this.oldpw === window.localStorage.getItem('stupwd')) {
          window.localStorage.setItem('stupwd', this.conpw)
          console.log(window.localStorage.getItem('stupwd'))
          this.$parent.stupwd = this.conpw
          this.$message({
            message: '修改成功！',
            type: 'success',
            duration: 1000
          })
        } else {
          e.preventDefault()
          this.$message({
            message: '请输入正确的密码',
            type: 'warning',
            duration: 1000
          })
        }
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
