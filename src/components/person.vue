<template>
  <div class="person">
    <div class="all_me">
      <div class="me">
        <div class="me_pic"><img width="100" height="100" :src="person.pic" alt=""></div>
        <div class="me_name">{{person.name}}
        </div>
      </div>
      <div class="me_items">
        <div class="me_item" @click="showRouter('课程表')">
          <p>我的课程表</p>
        </div>
        <div class="me_item" @click="showRouter('我的笔记')">
          <p>我的笔记</p>
        </div>
        <div class="me_item" @click="showRouter('我的假单')">
          <p>我的假单</p>
        </div>
        <div class="me_item" @click="showRouter('学习心得')">
          <p>我的学习心得</p>
        </div>
        <div class="me_item" @click="showRout('/person/addresslist')">
          <p>班级通讯录</p>
        </div>
        <div style="height: 18px"></div>
        <div class="me_item" @click="showRouter('密码修改')">
          <p>修改密码</p>
        </div>
        <div class="me_item" @click="showRouter('更换手机号')">
          <p>更换手机号</p>
        </div>
        <div class="me_item" @click="showRouter('个人信息')">
          <p>修改个人信息</p>
        </div>
        <div class="me_item me-exit">
          <p>
            <el-button type="text" style="color: white;margin-top: -6px" @click="open2">退出登录</el-button>
          </p>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        person: {
          'name': '刘朝阳',
          'salary': '8888',
          'pic': 'data:image/jpeg;base64,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'
        },
        eyes: false
      }
    },
    methods: {
      showRout(path){
        this.$router.push({
          path: path
        })
      },
      showRouter(name){
        this.$router.push({
          name: name
        })
      },
      open2() {
        this.$confirm('确认退出登录？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push('/entry')
        }).catch(() => {
        })
      }
    },
    created(){
      document.querySelector('body').style.background = 'rgba(7,17,27,0.1)'
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .person
    width 100%
    margin-bottom 60px
    .me
      text-align center
      padding-top 22px
      .me_pic
        height 100px
        width 100px
        border-radius 50px
        margin 0 auto 26px
        overflow hidden
      .me_name
        font-weight 700
        font-size 30px
        position relative
    .me_items
      width 80%
      height auto
      margin 16px auto 0
      border-radius 10px
      border 1px solid lightgrey
      background-color white
      .me_item
        font-weight bold
        height 32px
        width 100px
        border-bottom 0.5px solid lightgray
        line-height 28px
        margin 0 auto
        text-align center
        padding-top 5px
        &:first-child
          margin-top 10px
        p
          height 28px
          border-radius 4px
      .me-exit
        background-color rgb(155, 32, 37)
        margin-top 20px
        margin-bottom 10px
        border-radius 4px
        color white

  .el-message-box__wrapper
    .el-message-box
      position absolute
      top 50%
      margin-top -30%
      left 50%
      margin-left -44%
      width 88%
</style>
