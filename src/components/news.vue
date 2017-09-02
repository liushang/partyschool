<template>
  <div class="news">
    <div class="tabnews" id="tab">
      <div class="two-item heighlight_l">
        <router-link to="/news/press" replace><span class="title_l">新闻</span></router-link>
      </div>
      <div class="two-item heighlight_r">
        <router-link to="/news/notice" replace><span class="title_r">通知</span></router-link>
      </div>
    </div>
    <div id="tab-bottom" style="height:40px;width: 100%"></div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style lang="stylus" type="text/stylus">
  .news
    width 100%
    overflow auto
    margin-bottom 60px
    position relative

  #tab-bottom
    height 0

  .tabnews
    width 100%
    background-color white
    position fixed
    left 0
    top 50px
    z-index 100
    .two-item
      margin-top 4px
      display: inline-block
      height: 40px
      text-align center
      width: 46%
      &:last-child
        float right
      span
        font-size: 15px
        line-height: 40px
        font-weight bold
        display inline-block
      & > a
        display: block /*超链接自动充满格子*/
        &.active
          color: red
      .title_l
        margin-left 100px
      .title_r
        margin-right 50px
    .heighlight_l
      opacity: 0.4
      background: -webkit-linear-gradient(left, rgba(178, 34, 34, 0.6), white) /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(right, rgba(178, 34, 34, 0.6), white) /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(right, rgba(178, 34, 34, 0.6), white) /* Firefox 3.6 - 15 */
      background: linear-gradient(to right, rgba(178, 34, 34, 0.6), white) /* 标准的语法（必须放在最后） */
      vertical-align: top
    .heighlight_r
      opacity: 0.4
      background: -webkit-linear-gradient(right, deepskyblue, white) /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(left, deepskyblue, white) /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(left, deepskyblue, white) /* Firefox 3.6 - 15 */
      background: linear-gradient(to left, deepskyblue, white) /* 标准的语法（必须放在最后） */
      vertical-align: top
</style>
