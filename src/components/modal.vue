<template>
  <div class="modal" id="modal-modal" @click.self="hidemodal">
    <div class="white" id="modal-white">
      <div class="side-item" @click="hidemodal">
        <router-link to="/learn"><p>学习中心</p></router-link>
      </div>
      <div class="side-item" @click="hidemodal">
        <router-link to="/person/schedule">查看课表</router-link>
      </div>
      <div class="side-item" @click="hidemodal">
        <router-link to="/person/schedule/classdetail?index1=0&index2=0">课堂考勤</router-link>
      </div>
      <div class="side-item" @click="hidemodal">
        <router-link to="/learn/material">学习资料</router-link>
      </div>
      <div class="side-item" @click="hidemodal">
        <router-link to="/learn/linework">网上作业</router-link>
      </div>
      <div class="side-item" @click="hidemodal">
        <router-link to="/learn/linepuzzle">网上答疑</router-link>
      </div>
      <div class="side-item" @click="hidemodal">
        <router-link to="/teainfo">教师信息</router-link>
      </div>
      <div class="side-item" @click="hidemodal">
        <router-link to="/learn/survey">在线调查</router-link>
      </div>
      <div class="side-item" @click="hidemodal">
        <router-link to="/person">个人中心</router-link>
      </div>
      <div class="side-item" @click="hidemodal">
        <router-link to="/guide">规章制度</router-link>
      </div>
      <div class="side-item" @click="hidemodal">
        <router-link to="/service">服务指南</router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    methods: {
      hidemodal(){
        setTimeout(this.whiteshut, 0)
      },
      shutmodal(){
        this.$parent.showmodal = false
      },
      animatewhite(){
        setTimeout(this.whiteshow, 0)
      },
      whiteshow(){
        document.getElementById('modal-white').style.left = 0
      },
      // 动画结束后关闭
      whiteshut(){
        document.getElementById('modal-white').style.left = document.body.clientWidth * (-0.6) + 'px'
        setTimeout(this.shutmodal, 400)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .modal
    height 100%
    width 100%
    background rgba(7, 17, 27, 0.4)
    position fixed
    z-index 1000
    .white
      height 100%
      width 60%
      background white
      position fixed
      z-index 1001
      left -60%
      top 0
      transition: All 0.4s ease-in-out
      -webkit-transition: All 0.4s ease-in-out
      -moz-transition: All 0.4s ease-in-out
      -o-transition: All 0.4s ease-in-out
      .side-item
        height 8%
        width 100%
        text-align center
        vertical-align middle
        &:first-child
          padding-top 18%
</style>
