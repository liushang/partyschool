<template>
  <div class="businessleave">
    <div class="tbl">
      <span class="tbl-item"><router-link to="/businessleave/tbusiness" replace>出差</router-link></span>
      <span class="tbl-item"><router-link to="/businessleave/tleave" replace>请假</router-link></span>
      <span class="tbl-item"><router-link to="/businessleave/tbus" replace>车辆</router-link></span>
      <span class="tbl-item"><router-link to="/businessleave/tplace" replace>场地</router-link></span>
    </div>
    <div class="mypuzzle" v-if="this.state==='p'&&this.pstate==='pa'">
      <li v-for="(item, index) in leave">
        <el-col :span="24">
          <el-menu default-active="2" class="el-menu-vertical-demo" theme="">
            <el-submenu index="1">
              <template slot="title">
                <span class="ltitle">{{item.time}} <svg @click.stop="deleteli(index)"
                                                        style="line-height: 56px" class="icon"
                                                        aria-hidden="true">
            <use xlink:href="#icon-cha2"></use>
          </svg></span></span>
                <span class="rtitle">{{item.state}}</span>
              </template>
              <el-menu-item index="1-1">申请时间：{{item.ltime}}</el-menu-item>
              <el-menu-item index="1-2">申请总长：{{item.day}} 天</el-menu-item>
              <el-menu-item index="1-3">申请原因：{{item.reason}}</el-menu-item>
              <el-menu-item index="1-4">提交申请：{{item.time}}</el-menu-item>
              <el-menu-item index="1-5">申请状态：<span class="state">{{item.state}}</span>
                <!--<div v-show="this.state==='p'&&this.pstate==='pa'">-->
                <div @click="changestate(index,$event)" :plain="true" v-if="item.state!=='已批准'"
                     style="float: right;height: 30px;margin: 10px 20px;width: 50px;line-height: 30px;text-align:center;border-radius: 4px;background-color: #a80000;color: white"
                     type="danger">{{item.state==='已批准'?(through=''):(through='批准')}}
                </div>
                <!--</div>-->
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </li>
    </div>
    <div class="mypuzzle" v-else>
      <li v-for="(item, index) in leave">
        <el-col :span="24">
          <el-menu default-active="2" class="el-menu-vertical-demo" theme="">
            <el-submenu index="1">
              <template slot="title">
                <span class="ltitle">{{item.time}} <svg @click.stop="deleteli(index)"
                                                        style="line-height: 56px" class="icon"
                                                        aria-hidden="true">
            <use xlink:href="#icon-cha2"></use>
          </svg></span></span>
                <span class="rtitle">{{item.state}}</span>
              </template>
              <el-menu-item index="1-1">申请时间：{{item.ltime}}</el-menu-item>
              <el-menu-item index="1-2">申请总长：{{item.day}} 天</el-menu-item>
              <el-menu-item index="1-3">申请原因：{{item.reason}}</el-menu-item>
              <el-menu-item index="1-4">提交申请：{{item.time}}</el-menu-item>
              <el-menu-item index="1-5">申请状态：<span class="state">{{item.state}}</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </li>
    </div>
    <div class="leavelist" v-if="!(this.$parent.identity==='p'&&this.$parent.pidentity==='pa')">
      <div class="leavelist-title"><span class="list-text">申请类型</span><span class="text-text">{{listtype}}</span>
        <div class="text-type">
          <el-dropdown class="text-type" trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        请选择<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
            <el-dropdown-menu slot="dropdown" v-if="this.$route.path!=='/businessleave/tplace'">
              <el-dropdown-item command="出差">出差</el-dropdown-item>
              <el-dropdown-item command="事假">事假</el-dropdown-item>
              <el-dropdown-item command="车辆">车辆</el-dropdown-item>
            </el-dropdown-menu>
            <el-dropdown-menu slot="dropdown" v-if="this.$route.path==='/businessleave/tplace'">
              <el-dropdown-item command="教室">教室</el-dropdown-item>
              <el-dropdown-item command="宾馆">宾馆</el-dropdown-item>
              <el-dropdown-item command="会议室">会议室</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="leavelist-title"><span class="list-text">申请部门</span><span class="text-text"><input class="day-num"
                                                                                                     v-model="listpart"
                                                                                                     type="text"></span>
        <div class="text-type"></div>
      </div>
      <div class="leavelist-title"><span class="list-text">申请时间</span><span class="text-text"><el-date-picker
        v-model="listbegin"
        type="datetime"
        placeholder="选择日期时间">
    </el-date-picker>
</span> 至 <span class="text-text"><el-date-picker
        v-model="listend"
        type="datetime"
        placeholder="选择日期时间">
    </el-date-picker></span>
        <div class="text-type"></div>
      </div>
      <div class="leavelist-title"><span class="list-text">申请总长</span><span class="text-text"><input class="day-num"
                                                                                                     v-model="listnum"
                                                                                                     type="text">天</span>
        <div class="text-type"></div>
      </div>
      <div>
        <div class="list-text">申请简述:</div>
        <textarea name="" v-model="listreson" style="width: 100%" cols="30" rows="4" placeholder="请详细说明"></textarea>
      </div>

      <el-button :plain="true" @click="open2"
                 style="padding: 0;width: 100%;height: 40px;background-color: #a90000;border: none">
        <router-link to="/businessleave" style="color: white">
          <div class="leave-sub">提交申请</div>
        </router-link>
      </el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import myleave from '@/components/myleave'
  export default{
    data(){
      return {
        tbusiness: [
          {
            'time': '2017-7-2',
            'ltime': '2017-7-2至2017-7-5',
            'day': '4',
            'reason': '学校组织培训',
            'state': '已批准'
          },
          {
            'time': '2017-6-5',
            'ltime': '2017-6-7至2017-6-9',
            'day': '3',
            'reason': '学校开会',
            'state': '待审核'
          },
          {
            'time': '2017-6-1',
            'ltime': '2017-6-2至2017-6-3',
            'day': '2',
            'reason': '学校出差',
            'state': '未通过'
          },
          {
            'time': '2017-5-3',
            'ltime': '2017-5-4至2017-5-4',
            'day': '1',
            'reason': '学校出差',
            'state': '已批准'
          }
        ],
        tbus: [
          {
            'time': '2017-7-2',
            'ltime': '2017-7-2至2017-7-5',
            'day': '4',
            'reason': '租用1-211车',
            'state': '已批准'
          },
          {
            'time': '2017-6-5',
            'ltime': '2017-6-7至2017-6-9',
            'day': '3',
            'reason': '租用2-333车',
            'state': '待审核'
          },
          {
            'time': '2017-6-1',
            'ltime': '2017-6-2至2017-6-3',
            'day': '2',
            'reason': '租用1212车',
            'state': '未通过'
          },
          {
            'time': '2017-5-3',
            'ltime': '2017-5-4至2017-5-4',
            'day': '1',
            'reason': '租用432车',
            'state': '已批准'
          }
        ],
        listtype: '',
        listbegin: '',
        listend: '',
        listnum: '',
        listpart: '',
        listreson: '',
        leave: '',
        leaves: [
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
        ],
        through: '批准',
        state: '',
        pstate: ''
      }
    },
    components: {myleave},
    methods: {
      changestate(index, e){
        this.leave[index].state = '已批准'
        e.target.style.display = 'none'
      },
      open2() {
        this.$message({
          message: '提交成功！',
          type: 'success',
          duration: 1000
        })
      },
      handleCommand(command) {
        this.listtype = command
      },
      stl(){
        if (this.$route.path === '/businessleave/tbusiness') {
          this.leave = this.tbusiness
        } else if (this.$route.path === '/businessleave/tleave') {
          this.leave = this.leaves
        } else if (this.$route.path === '/businessleave/tbus') {
          this.leave = this.tbus
        }
      },
      deleteli(obj){
        this.leave.splice(obj, 1)
      }
    },
    watch: {
      '$route': 'stl'
    },
    created(){
      this.state = this.$parent.identity
      this.pstate = this.$parent.pidentity
      this.leave = this.tbusiness
      document.body.style.backgroundColor = 'white'
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import '../common/css/businessleave'
  @import '../common/css/leavelist.styl'
</style>
