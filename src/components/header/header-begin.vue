<template>
  <div class="header" style="background-color:#595f6f">
    <div id="top_l" @click="back" style="background-color:#595f6f;border:none">
      <!-- <svg class="icon" style="color:#8b0000;margin-top: 6px" aria-hidden="true">
        <use xlink:href="#icon-houtui1"></use>
      </svg> -->
      <img src="../../common/image/logo.png" width="30" height="30" style="color:#8b0000;margin-top:0">
    </div>
    <span class="header_name" v-if="$route.name">{{ $route.name}}</span>
    <span class="header_name" v-else>{{title}}</span>
    <div id="top_r" style="border: none">
      <!--<svg @click="modal" style="color: white;margin-top: 6px" class="icon" aria-hidden="true">-->
        <!--<use xlink:href="#icon-mulu2"></use>-->
      <!--</svg>-->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: ['title'],
    data(){
      return {}
    },
    methods: {
      modal(){
        this.$parent.showmodal = true
      },
      write(){
        this.$router.push({
          path: '/linepuzzle/writepuzzle'
        })
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import '../../common/css/header.styl'
</style>
