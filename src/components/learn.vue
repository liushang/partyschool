<template>
  <div class="learn">
    <div class="learn-block block-left">
      <div style="background-color: rgba(137,211,214,0.2)" class="schedule" @click="showRouter('课程表')"><img
        src="../common/image/study1.png"><span>课程表</span></div>
      <div style="background-color: rgba(155,32,36,0.2)" class="evaluate" @click="showRouter('课程评价')"><img
        src="../common/image/study3.png"><span>课程评价</span></div>
      <div style="background-color: rgba(239,206,77,0.2)" class="linesearch" @click="showRouter('在线测试')"><img
        src="../common/image/study5.png"><span>在线测试</span></div>
      <!--<div style="background-color: rgba(151,218,86,0.2)" class="progress" @click="showRouter('问卷调查')"><img-->
        <!--src="../common/image/study7.png"><span>问卷调查</span></div>-->
    </div>
    <div class="block-right learn-block fl-right">
      <div style="background-color: rgba(89,95,111,0.2)" class="material" @click="showRouter('学习资料')"><img
        src="../common/image/study2.png"><span>学习资料</span></div>
      <div style="background-color: rgba(250,126,231,0.2)" class="linework" @click="showRouter('在线作业')"><img
        src="../common/image/study4.png"><span>在线作业</span></div>
      <div style="background-color: rgba(108,124,201,0.2)" class="mypuzzle" @click="showRouter('网上答疑')"><img
        src="../common/image/study6.png"><span>网上答疑</span></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    methods: {
      showRouter(name){
        this.$router.push({
          name: name
        })
      }
    },
    created(){
      document.body.style.backgroundColor = 'white'
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .learn
    width 100%
    .learn-block
      display inline-block
      width 49%
      height 100%
      clear: both
      position relative
    .block-left
      div
        float right
        margin-bottom 20px
        margin-right 5px
        background-color white
        background-repeat no-repeat
        background-position left center
        line-height 100px
        box-shadow: 1px 1px 1px rgba(7, 17, 27, 0.1)
        width 78%
        height 100px
        color rgba(7, 17, 27, 0.5)
        span
          text-align center
        &:first-child
          margin-top 30px
        &:last-child
          img
            margin-right 0
        img
          width 40%
          vertical-align middle
          margin 0 5px
    .block-right
      float right
      div
        margin-bottom 20px
        margin-left 5px
        background-color white
        background-repeat no-repeat
        background-position left center
        line-height 100px
        width 78%
        height 100px
        box-shadow: 1px 1px 1px rgba(7, 17, 27, 0.1)
        color rgba(7, 17, 27, 0.5)
        &:first-child
          margin-top 30px
        &:last-child
          img
            margin-left 0
        img
          width 40%
          vertical-align middle
          margin 0 5px
</style>
