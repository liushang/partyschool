<template>
<div class="upphone">
  <div class="up">更换手机号</div>
  <div class="oldph"><input class="sty" type="text" placeholder="  原手机号"></div>
  <div class="text1"><input class="sty" type="text" placeholder="  验证码"><button class="text">获取验证码</button></div>
  <div class="conph"><input class="sty" type="text" placeholder="  新手机号"></div>
  <div class="text2"><input class="sty" type="text" placeholder="  验证码"><button class="text">获取验证码</button></div>
  <div class="next">下一步</div>
</div>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style lang="stylus" type="text/stylus">
  .up
    margin 120px 14% 50px
    font-size 30px
  .oldph,.conph,.text1,.text2
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
  .text1,.text2
    position relative
    .text
      position absolute
      right 10px
      bottom 10px
      height 30px
      width 100px
      border 1px solid rgba(7,17,27,0.2)
      background rgba(7,17,27,0.05)
      border-radius 5px
      text-align center
      line-height 26px
      font-size 14px
  .next
    margin 20px 14%
    text-align center
    height 50px
    background-color #8b0000
    line-height 50px
    font-size 26px
    color white
</style>
