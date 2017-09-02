<template>
  <div class="studentswork">
    <div class="workhead"><span class="head-time">作业发布时间：{{linework.time}}</span><span class="head-sub">完成度：{{linework.progress}}</span>
    </div>
    <div class="workstu">
      <li v-for="(item, index) in linework.stu"
          @click="workdetail('/linework/workdetail', $route.query.index1, $route.query.index2,index)"><span
        class="ltitle">{{item.stuname}} <span
        style="color: #e51b03;">{{item.rate?item.rate:'未评'}}</span></span><span class="rtitle"
                                                                                style="color: rgba(7,17,27,0.7);font-size: 14px">{{item.time}}</span>
      </li>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        linework: {}
      }
    },
    methods: {
      workdetail(obj, index1, index2, index3){
        this.$router.push({
          path: obj,
          query: {index1: index1, index2: index2, index3: index3}
        })
      }
    },
    created(){
      document.body.style.backgroundColor = 'white'
      this.linework = this.tlinework[this.$route.query.index1].day[this.$route.query.index2]
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import '../common/css/studentswork.styl'
</style>
