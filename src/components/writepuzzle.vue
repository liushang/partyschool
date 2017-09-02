<template>
  <div class="writepuzzle">
    <div class="puzzle-title"><span class="title-title2">标题:</span><input class="title-input" type="text">
      <router-link to="/learn/linepuzzle">
        <el-button class="title-finish" type="info">发布</el-button>
      </router-link>
    </div>
    <textarea placeholder="说点什么..." class="puzzle-area"></textarea>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    created(){
      document.body.style.backgroundColor = 'white'
      document.getElementsByClassName('title-input')[0].focus()
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import '../common/css/writepuzzle'
</style>
