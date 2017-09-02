<template>
  <div class="header">
    <div id="top_l" @click="back">
      <svg class="icon" style="color:#8b0000;margin-top: 6px" aria-hidden="true">
        <use xlink:href="#icon-houtui1"></use>
      </svg>
    </div>
    <span class="header_name" v-if="$route.name">{{ $route.name}}</span>
    <span class="header_name" v-else>{{title}}</span>
    <div id="" style="float:right;line-height: 48px;padding-right: 20px">
      <span @click="modal" style="color: white;margin-top: 6px;" class="icon">
        {{sometext}}
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: ['title', 'something'],
    data(){
      return {
        sometext: this.something
      }
    },
    methods: {
      back(){
        history.go(-1)
      },
      modal(){
        this.$emit('dosome')
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import '../../common/css/header.styl'
</style>
