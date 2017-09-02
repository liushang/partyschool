<template>
  <div class="mypuzzle">
    <div>
      <li v-for="item in leave">
        <el-col :span="24">
          <el-menu default-active="2" class="el-menu-vertical-demo">
            <el-submenu index="1">
              <template slot="title">
                <span class="ltitle">{{item.time}}</span>
                <span class="rtitle">{{item.state}}</span>
              </template>
              <el-menu-item index="1-1">请假时间：{{item.ltime}}</el-menu-item>
              <el-menu-item index="1-2">请假总长：{{item.day}} 天</el-menu-item>
              <el-menu-item index="1-3">请假原因：{{item.reason}}</el-menu-item>
              <el-menu-item index="1-4">申请时间：{{item.time}}</el-menu-item>
              <el-menu-item index="1-5">请假状态：<span class="state">{{item.state}}</span></el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </li>
    </div>
    <div style="height: 50px;width: 100%;clear: both"></div>
    <div class="havepuzzle">
      <router-link to="/leavelist" style="color: white">
        <div class="newpuzzle">我要请假</div>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        leave: [
          {
            'time': '2017-7-2',
            'ltime': '2017-7-2至2017-7-5',
            'day': '4',
            'reason': '家中有事',
            'state': '已批准'
          },
          {
            'time': '2017-6-5',
            'ltime': '2017-6-7至2017-6-9',
            'day': '3',
            'reason': '病假',
            'state': '待审核'
          },
          {
            'time': '2017-6-1',
            'ltime': '2017-6-2至2017-6-3',
            'day': '2',
            'reason': '同学结婚',
            'state': '未通过'
          },
          {
            'time': '2017-5-3',
            'ltime': '2017-5-4至2017-5-4',
            'day': '1',
            'reason': '家中有事',
            'state': '已批准'
          }
        ]
      }
    },
    created(){
      document.body.style.backgroundColor = 'white'
    },
    methods: {
      checkleave(obj, index1, index2){
        this.$router.push({
          path: obj,
          query: {index1: index1, index2: index2}
        })
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import '../common/css/myleave.styl'
</style>
