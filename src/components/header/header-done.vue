<template>
  <div class="header">
    <div id="top_l" @click="back">
      <svg class="icon" style="color:#8b0000;margin-top: 6px" aria-hidden="true">
        <use xlink:href="#icon-houtui1"></use>
      </svg>
    </div>
    <span class="header_name" v-if="$route.name">{{ $route.name}}</span>
    <span class="header_name" v-else>{{title}}</span>
    <div id="top_r">
      <svg @click="back2" style="color: white;margin-top: 6px" class="icon" aria-hidden="true">
        <use xlink:href="#icon-dui"></use>
      </svg>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: ['title', 'rout'],
    data(){
      return {}
    },
    methods: {
      back2(){
        this.$emit('backsome')
      },
      back(){
        history.go(-1)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import '../../common/css/header.styl'
</style>
