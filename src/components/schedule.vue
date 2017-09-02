<template>
  <div class="schedule">
    <div class="updown"><span>
      <el-dropdown class="text-type" trigger="click" @command="handleCommand">
      <span class="el-dropdown-link" style="color:red">
        {{weak}}<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
          <el-dropdown-menu id="weak-list" slot="dropdown">
            <el-dropdown-item style="color:red" command="第一周">第一周</el-dropdown-item>
            <el-dropdown-item command="第二周">第二周</el-dropdown-item>
            <el-dropdown-item command="第三周">第三周</el-dropdown-item>
            <el-dropdown-item command="第四周">第四周</el-dropdown-item>
            <el-dropdown-item command="第五周">第五周</el-dropdown-item>
            <el-dropdown-item command="第六周">第六周</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown></span>
      </div>
    <div class="cart">
      <div class="week">
        <div><p><span>日期</span></p>
          <p>时间</p></div>
        <div><p>21</p>周一</div>
        <div><p>22</p>周二</div>
        <div><p>23</p>周三</div>
        <div><p>24</p>周四</div>
        <div><p>25</p>周五</div>
        <div><p>26</p>周六</div>
        <div><p>27</p>周日</div>
      </div>
      <div class="time-class">
        <div class="time-part">
          <div class="ti-me"><p>8:00</p>
            <p>|</p>
            <p>9:00</p></div>
          <div class="ti-me"><p>9:30</p>
            <p>|</p>
            <p>10:30</p></div>
          <div class="ti-me"><p>14:00</p>
            <p>|</p>
            <p>15:00</p></div>
          <div class="ti-me"><p>15:30</p>
            <p>|</p>
            <p>16:30</p></div>
          <div class="ti-me"><p>17:00</p>
            <p>|</p>
            <p>18:00</p></div>
        </div>
        <div>
          <div class="class-part" v-for="(item,index1) in schedule">
            <div class="cl-ass sinclass" v-for="(some,index2) in item.day" v-if="some.class"
                 @click="classdetail('/person/schedule/classdetail',index1,index2)"><p
              class="classp">{{some.class}}</p></div>
            <div v-else class="sinclass classblank"></div>
          </div>
        </div>
      </div>
    </div>
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
        ],
        weak: '第一周',
        classcolor: true
      }
    },
    methods: {
      classdetail(name, index1, index2){
        this.$router.push({
          path: name,
          query: {index1: index1, index2: index2}
        })
        document.body.style.background = 'white'
      },
      handleCommand(command) {
        this.weak = command
      }
    },
    created(){
      document.body.style.background = 'rgba(7,17,27,0.1)'
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  .updown
    width 100%
    height 36px
    line-height 36px
    overflow hidden
    span
      display inline-block
      float right
      padding 0 24px
      font-size 12px
      .text-type
        span
          padding 0

  .cart
    height 500px
    background white
    width 100%
    margin-bottom 60px
    .week
      background rgba(7, 17, 27, 0.03)
      div
        display inline-block
        width 10%
        height 60px
        p
          height 20px
          width 100%
          line-size 6px
          text-align center
          &:first-child
            margin-top 10px
        &:first-child
          width 20%
          p
            span
              float right
    .time-class
      .time-part
        width 20%
        float left
        .ti-me
          background rgba(7, 17, 27, 0.03)
          height 87px
          border-bottom 1px solid rgba(7, 17, 27, 0.1)
          p
            text-align center
            font-size 3px
            &:first-child
              padding-top 20px
      .class-part
        float left
        width 11%
        height 440px
        display inline-block
        margin-top -4px
        position relative
        div
          display flex
          .classp
            text-align center
            font-size 12px
            word-break break-all
            margin auto 5%
            width 90%
        .cl-ass
          height 79px
          border-bottom 1px solid rgba(7, 17, 27, 0.1)
          border-radius 4px
          width 84%
          margin 8px auto
        .cl-ass:first-child
          background-color #fff803
          background-size 90% 90%
          background-origin content-box
        .cl-ass:nth-child(2)
          background #89ecff
          background-size 90% 90%
        .cl-ass:nth-child(3)
          background #73ff5f
          background-size 90% 90%
        .cl-ass:nth-child(4)
          background #ffa9ae
          background-size 90% 90%
        .cl-ass:nth-child(5)
          background #bed7ff
          background-size 90% 90%
        .classblank
          height 80px
          width 84%
          margin 8px auto
          background white
          background-size 90% 90%

  #weak-list
    width 70px
    text-align center

</style>
