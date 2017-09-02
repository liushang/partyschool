<template>
  <div class="header">
    <div id="top_l" @click="back">
      <svg class="icon" style="color:#8b0000;margin-top: 6px" aria-hidden="true">
        <use xlink:href="#icon-houtui1"></use>
      </svg>
    </div>
    <div class="header_name" style="margin-left: -60px" v-if="$route.name">{{ $route.name}}</div>
    <div class="header_name" style="margin-left: -60px" v-else>{{title}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: ['title'],
    data(){
      return {
      }
    },
    methods: {
      back(){
        history.go(-1)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import '../../common/css/header.styl'
</style>
