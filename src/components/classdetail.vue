<template>
  <div class="classdetail">
    <div class="classname">{{schedule.class}}</div>
    <div class="classinf">
      <div class="item place">教&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;室：{{schedule.place}}</div>
      <div class="item term">日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：{{schedule.term}}</div>
      <div class="item classnum">节&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数：{{schedule.classnum}}</div>
      <div class="item time">上课时间：{{schedule.time}}</div>
      <div class="item teacher">授课老师：{{schedule.teacher}}</div>
    </div>
    <div class="location">
      <svg style="font-size: 30px;color:#8b0000 " class="icon" aria-hidden="true">
        <use xlink:href="#icon-dingwei"></use>
      </svg>
      <span>获取当前地理位置</span></div>
    <div class="signin" id="signin" @click="signin">签到</div>
    <router-link to="/leavelist">
      <div class="leave" id="leave" @click="signin">请假</div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        schedule: [
          {
            'day': [
              {
                'have': '1',
                'class': '马克思主义哲学',
                'place': '2-211',
                'teacher': '王老师',
                'time': '3:20-6:20',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              },
              {
                'have': '2'
              },
              {
                'have': '3',
                'class': '毛泽东思想基本问题',
                'place': '2-211',
                'teacher': '王老师',
                'time': '7:20-9:20',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              },
              {
                'have': '4',
                'class': '当代世界法制',
                'place': '2-211',
                'teacher': '王老师',
                'time': '13:20-15:20',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              },
              {
                'have': '5'
              }
            ]
          },
          {
            'day': [
              {
                'have': '1'
              },
              {
                'have': '2'
              },
              {
                'have': '3',
                'class': '列宁思想',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              },
              {
                'have': '4'
              },
              {
                'have': '5'
              }
            ]
          },
          {
            'day': [
              {
                'have': '1',
                'class': '马克思主义哲学',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              },
              {
                'have': '2',
                'class': '毛泽东语录',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              },
              {
                'have': '3',
                'class': '列宁思想',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              },
              {
                'have': '4',
                'class': '共产党宣言',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              },
              {
                'have': '5',
                'class': '当代世界法制',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              }
            ]
          },
          {
            'day': [
              {
                'have': '1',
                'class': '马克思主义哲学',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              },
              {
                'have': '2',
                'class': '毛泽东语录',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              },
              {
                'have': '3',
                'class': '列宁思想',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              },
              {
                'have': '4'
              },
              {
                'have': '5'
              }
            ]
          },
          {
            'day': [
              {
                'have': '1'
              },
              {
                'have': '2'
              },
              {
                'have': '3',
                'class': '列宁思想',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              },
              {
                'have': '4',
                'class': '当代世界法制',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              },
              {
                'have': '5',
                'class': '当代世界法制',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              }
            ]
          },
          {
            'day': [
              {
                'have': '1',
                'class': '马克思主义哲学',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              },
              {
                'have': '2'
              },
              {
                'have': '3',
                'class': '列宁思想',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              },
              {
                'have': '4'
              },
              {
                'have': '5',
                'class': '当代世界法制',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              }
            ]
          },
          {
            'day': [
              {
                'have': '1',
                'class': '共产党宣言',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              },
              {
                'have': '2',
                'class': '毛泽东语录',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              },
              {
                'have': '3'
              },
              {
                'have': '4',
                'class': '当代世界法制',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              },
              {
                'have': '5',
                'class': '共产党宣言',
                'place': '2-211',
                'teacher': '王老师',
                'time': '9:00-10:00',
                'term': '1月1日-2月1日',
                'classnum': '周四 1-2节',
                'signin': '0'
              }
            ]
          }
        ]
      }
    },
    methods: {
      signin(event){
        if (event.target.innerHTML === '签到' && document.getElementById('leave').innerHTML === '请假') {
          event.target.innerHTML = '已签到'
          event.target.style.backgroundColor = 'rgba(7,17,27,0.4)'
        } else if (event.target.innerHTML === '请假' && document.getElementById('signin').innerHTML === '签到') {
          event.target.innerHTML = '已请假'
          event.target.style.backgroundColor = 'rgba(7,17,27,0.4)'
        }
      }
    },
    created(){
      document.body.style.backgroundColor = 'white'
      this.schedule = this.schedule[this.$route.query.index1].day[this.$route.query.index2]
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .classdetail
    .classname
      width 80%
      margin 40px auto
      font-weight 900
      font-size 26px
    .classinf
      width 80%
      margin 40px 70px 20px
      .item
        line-height 24px
        font-size 14px
    .location
      width 80%
      margin 0 70px 40px
    .signin, .leave
      float left
      width 30%
      border-radius 5px
      background-color #8b0000
      color white
      height 50px
      line-height 50px
      text-align center
      font-size 28px
    .signin
      margin-left 15%
    .leave
      margin-left 10%
</style>
