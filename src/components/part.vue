<template>
  <div class="entry" style="overflow: auto">
    <div class="entry-login" style=";padding: 10px 0 30px" v-if="this.$parent.identity === 'p'">
      <router-link to="/login" style="">
        <div class="login-teacher" @click="checkidentity('pa')">校领导</div>
      </router-link>
      <router-link to="/login">
        <div class="login-student" @click="checkidentity('pb')">办公室登录</div>
      </router-link>
      <router-link to="/login">
        <div class="login-student" @click="checkidentity('pc')">机关党委</div>
      </router-link>
      <router-link to="/login">
        <div class="login-teacher" @click="checkidentity('pd')">人事处</div>
      </router-link>
      <router-link to="/login">
        <div class="login-student" @click="checkidentity('pe')">教务处</div>
      </router-link>
      <router-link to="/login">
        <div class="login-student" @click="checkidentity('pf')">科研处</div>
      </router-link>
      <router-link to="/login">
        <div class="login-teacher" @click="checkidentity('pg')">学员工作处</div>
      </router-link>
      <router-link to="/login">
        <div class="login-student" @click="checkidentity('ph')">干部教育学院</div>
      </router-link>
      <router-link to="/login">
        <div class="login-student" @click="checkidentity('pi')">南湖分校工作处</div>
      </router-link>
      <router-link to="/login">
        <div class="login-teacher" @click="checkidentity('pj')">行政处</div>
      </router-link>
      <router-link to="/login">
        <div class="login-student" @click="checkidentity('pk')">市情研究中心</div>
      </router-link>
      <router-link to="/login">
        <div class="login-student" @click="checkidentity('pl')">图书信息中心</div>
      </router-link>
      <router-link to="/login">
        <div class="login-student" @click="checkidentity('pm')">基础理论教研室</div>
      </router-link>
      <router-link to="/login">
        <div class="login-student" @click="checkidentity('pn')">经济管理教研室</div>
      </router-link>
      <router-link to="/login">
        <div class="login-student" @click="checkidentity('po')">公共管理教研室</div>
      </router-link>
      <router-link to="/login">
        <div class="login-student" @click="checkidentity('pp')">文化与社会学教研室</div>
      </router-link>
      <router-link to="/news">
        <div class="login-student" @click="checkidentity('pq')">游客</div>
      </router-link>
    </div>
    <div class="entry-login" style=";padding: 0 0 30px" v-if="this.$parent.identity === 't'">
      <div class="entry-img"><img src="../common/image/logo.png" alt=""></div>
      <div class="entry-name" style="margin: 0;padding:30px 0 0;">南湖大学</div>
      <router-link to="/login" style="">
        <div class="login-teacher" @click="checkidentity('tm')">任课老师</div>
      </router-link>
      <router-link to="/login">
        <div class="login-student" @click="checkidentity('tc')">班主任</div>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        dat: true
      }
    },
    created(){
      if (this.$parent.identity === 't') {
        this.dat = true
      } else {
        this.dat = false
      }
    },
    methods: {
      checkidentity(obj){
        window.localStorage.setItem('pidentity', obj)
        this.$parent.pidentity = obj
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import '../common/css/entry.styl'
</style>
