<template>
  <div class="login">
    <div class="up">登录</div>
    <div class="oldph"><input v-model="stuid" id="stu-tea" class="sty" type="text" :placeholder="placeholder"></div>
    <div class="text1"><input v-model="stupwd" class="sty" type="password" placeholder="  密  码"></div>
    <div class="activate-zh">
      <router-link to="/activate" style="color: white">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-rilijiantouyoushuang"></use>
        </svg>
        激活账号
      </router-link>
    </div>
    <router-link to="/index">
      <el-button :plain="true" @click="login" id="login-next"
                 style="">
        <div>下一步</div>
      </el-button>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        stuid: '',
        stupwd: '',
        placeholder: '  学  号'
      }
    },
    created(){
      if (window.localStorage.getItem('stuid')) {
        this.stuid = window.localStorage.getItem('stuid')
      }
      if (window.localStorage.getItem('stupwd')) {
        this.stupwd = window.localStorage.getItem('stupwd')
      }
      document.body.style.backgroundColor = 'rgba(7,17,27,0.1)'
    },
    methods: {
      login(e){
        if (this.stuid === this.$parent.stuid && this.stupwd === this.$parent.stupwd) {
          window.localStorage.setItem('stuid', this.stuid)
          window.localStorage.setItem('stupwd', this.stupwd)
        } else {
          e.preventDefault()
          this.$message({
            message: '请输入正确的账号&密码',
            type: 'warning',
            duration: 1000
          })
        }
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .activate-zh
    text-align right
    margin 20px 15% -10px 0
    color rgba(7, 17, 27, 0.3)
    font-size 12px
  #login-next
    display:block
    background-color: #8b0000
    color:white
    border: none
    margin: 50px auto
    width: 70%
    height: 40px
</style>
