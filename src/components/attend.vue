<template>
  <div class="attend">
    <div class="attend-class"><span v-if="this.$parent.pidentity==='pa'"
                                    class="class-name">
      <el-dropdown class="text-type" trigger="click" @command="handleCommand3">
      <span class="el-dropdown-link class-name" style="font-size: 12px">
        {{classclass}}<i class="el-icon-caret-bottom el-icon--right"></i>&nbsp; &nbsp;&nbsp;&nbsp;
      </span>
        <el-dropdown-menu slot="dropdown" style="font-size: 16px;min-width: 70px">
          <el-dropdown-item command="2-11">2-11</el-dropdown-item>
          <el-dropdown-item command="2-13">2-12</el-dropdown-item>
          <el-dropdown-item command="2-13">2-13</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown></span><span v-else style="font-size: 16px">下一节:&nbsp; </span><span
      class="class-name">
      <el-dropdown class="text-type" trigger="click" @command="handleCommand">
      <span class="el-dropdown-link class-name" style="font-size: 18px">
        {{classname}}<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="马克思主义哲学">马克思主义哲学</el-dropdown-item>
          <el-dropdown-item command="当代世界法制">当代世界法制</el-dropdown-item>
          <el-dropdown-item command="毛泽东思想">毛泽东思想</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown></span>
      <span class="class-num">第3节</span>&nbsp;&nbsp;<span
        style="font-size: 16px;border: 1px solid rgba(7,17,27,0.3);padding: 2px;float: right"><el-dropdown
        class="text-type" trigger="click" @command="handleCommand2">
      <span class="el-dropdown-link" style="font-size: 10px">
        {{classnum}}<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown" style="font-size: 12px;width: 50px">
          <el-dropdown-item command="6-2 第1节">6-2 第1节</el-dropdown-item>
          <el-dropdown-item command="6-5 第3节">6-5 第3节</el-dropdown-item>
          <el-dropdown-item command="6-6 第1节">6-6 第1节</el-dropdown-item>
          <el-dropdown-item command="6-9 第1节">6-9 第1节</el-dropdown-item>
          <el-dropdown-item command="6-11 第5节">6-11 第5节</el-dropdown-item>
          <el-dropdown-item command="6-12 第3节">6-12 第3节</el-dropdown-item>
          <el-dropdown-item command="6-14 第2节">6-14 第2节</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown></span></div>
    <li class="attend-stu" v-for="(per,index) in attend" @click="handleleave('/leavelist', index, per.state)"><span
      class="stu-item item-name">{{per.name}}</span><span
      class="stu-item item-state" :class="statecolor(per.state)">{{per.state}}</span><span
      class="stu-item item-time">{{per.time}}</span></li>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        attend: [
          {
            'name': '黄经纬',
            'state': '已签到',
            'time': '14:11'
          },
          {
            'name': '王凌杰',
            'state': '已签到',
            'time': '14:22'
          },
          {
            'name': '林玉',
            'state': '未签到',
            'time': ''
          },
          {
            'name': '杨凤敏',
            'state': '已签到',
            'time': '14:33'
          },
          {
            'name': '黄小娟',
            'state': '新的请假',
            'time': '14:21'
          },
          {
            'name': '陈瑶瑶',
            'state': '已签到',
            'time': '14:32'
          },
          {
            'name': '刘冰',
            'state': '已签到',
            'time': '14:11'
          },
          {
            'name': '何鑫',
            'state': '已请假',
            'time': '14:42'
          },
          {
            'name': '冯晓璐',
            'state': '已签到',
            'time': '14:33'
          },
          {
            'name': '林子恒',
            'state': '未签到',
            'time': ''
          },
          {
            'name': '宋华锋',
            'state': '已签到',
            'time': '14:31'
          },
          {
            'name': '胡杰',
            'state': '新的请假',
            'time': '14:17'
          },
          {
            'name': '王汝君',
            'state': '已签到',
            'time': '14:25'
          }
        ],
        unattend: false,
        leaving: false,
        leaved: false,
        attended: false,
        classname: '马克思主义哲学',
        classnum: '6-2 第一节',
        classclass: '2-11'
      }
    },
    methods: {
      handleCommand(command) {
        this.classname = command
      },
      handleCommand2(command) {
        this.classnum = command
      },
      handleCommand3(command) {
        this.classclass = command
      },
      statecolor(obj){
        if (obj === '已签到') {
          this.attended = true
          return {attended: true}
        } else if (obj === '未签到') {
          this.unattend = true
          return {unattend: true}
        } else if (obj === '新的请假') {
          this.leaving = true
          return {leaving: true}
        } else {
          this.leaved = true
          return {leaved: true}
        }
      },
      handleleave(obj, index, state){
        if (state === '未签到' || state === '已签到') {
          return
        }
        let y = 0
        for (let i = 0; i < index; i++) {
          if (this.attend[i].state === '新的请假' || this.attend[i].state === '已请假') {
            y++
          }
        }
        this.$router.push({
          path: obj,
          query: {index1: 0, index2: y}
        })
      }
    },
    created(){
      document.querySelector('body').style.background = 'white'
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import '../common/css/attend'
</style>
