<template>
  <div class="leavelist">
    <div class="leavelist-title"><span class="list-text">请假类型</span><span class="text-text">{{listtype}}</span>
      <div class="text-type">
        <el-dropdown class="text-type" trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        请选择<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="病假">病假</el-dropdown-item>
            <el-dropdown-item command="事假">事假</el-dropdown-item>
            <el-dropdown-item command="其他">其他</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="leavelist-title"><span class="list-text">请假时间</span><span class="text-text"><el-date-picker
      v-model="listbegin"
      type="datetime"
      placeholder="选择日期时间" style="font-size: 12px">
    </el-date-picker>
</span> 至 <span class="text-text"><el-date-picker
      v-model="listend"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker></span>
      <div class="text-type"></div>
    </div>
    <div class="leavelist-title"><span class="list-text">请假总长</span><span class="text-text"><input class="day-num"
                                                                                                   v-model="listnum"
                                                                                                   type="text">天</span>
      <div class="text-type"></div>
    </div>
    <div>
      <div class="list-text">请假原因:</div>
      <textarea style="margin-left: 5px;width: 96%" v-model="listreson" id="" cols="30" rows="4"
                placeholder="请详细说明请假原因"></textarea></div>
    <router-link to="/person/myleave" style="color: white;">
      <div class="leavelist-sub" style="background-color: #9e0000">提交申请</div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        listtype: '',
        listbegin: '',
        listend: '',
        listnum: '',
        listreson: '',
        leave: {}
      }
    },
    created(){
      this.leave = this.tleave[this.$route.query.index1].leave[this.$route.query.index2]
      document.body.style.backgroundColor = 'white'
    },
    methods: {
      handleCommand(command) {
        this.listtype = command
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import '../common/css/leavelist.styl'
</style>
