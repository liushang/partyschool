<template>
  <div class="routerbar">
    <div class="tab_bottom">
      <div class="tab">
        <div class="tab-item">
          <router-link to="/index" class="itemimg"><img src="../common/image/logo.png" width="40" height="40" alt=""></router-link>
        </div>
        <div class="tab-item border-1px">
          <router-link to="/learn"><svg style="font-size: 20px" class="icon" aria-hidden="true">
            <use xlink:href="#icon-xuexilei"></use>
          </svg><div class="title">学习资料</div></router-link>
        </div>
        <div class="tab-item border-1px">
          <router-link to="/news"><svg style="font-size: 20px;" class="icon" aria-hidden="true">
            <use xlink:href="#icon-xinwen1"></use>
          </svg><div class="title">新闻信息</div></router-link>
        </div>
        <div class="tab-item border-1px">
          <router-link to="/person"><svg style="font-size: 20px;" class="icon" aria-hidden="true">
            <use xlink:href="#icon-tuxing1"></use>
          </svg><div class="title">个人信息</div></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style lang="stylus" type="text/stylus" scroped>
  @import "../common/stylus/mixin.styl"
  .routerbar
    width: 100%
    position: fixed
    bottom: 0
    height 60px
    .tab
      display: flex
      /*flex布局*/
      width: 100%
      height: 60px
      line-height: 60px
      .tab-item
        flex: 1
        width: 20%
        text-align: center
        background white
        border-top-1px(rgba(7, 17, 27, 0.1))
        & > a
          display: block /*超链接自动充满格子*/
          text-decoration: none
          font-size: 14px
          color: rgb(77, 85, 93)
          line-height 44px
          &.active
            color: red
          .title
            line-height 0
        .itemimg
          line-height 54px
        img
          vertical-align middle

</style>
