<template>
  <div class="entry">
    <div class="entry-img"><img src="../common/image/logo.png" alt=""></div>
    <div class="entry-name">南湖大学</div>
    <div class="entry-login">
      <router-link to="/login">
        <div class="login-student" @click="checkidentity('s')">学生登录</div>
      </router-link>
    </div>
    <div class="entry-model" @click="shutbottom" v-if="showbottom">
      <div class="model-part">
        <div class="part-scoll">
          <li v-for="(i,index) in schpart" class="part-li">
            <router-link to="/login">
              <div @click="checkpidentity('i.partshort')">{{i.partname}}</div>
            </router-link>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        schpart: {},
        schparts: {
          'tpart': [{'partshort': 'tm', 'partname': '任课老师'}, {'partshort': 'tc', 'partname': '班主任'}],
          'ppart': [{'partshort': 'pa', 'partname': '校领导'}, {'partshort': 'pb', 'partname': '办公室'},
            {'partshort': 'pc', 'partname': '机关党委'}, {'partshort': 'pd', 'partname': '人事处'}, {
              'partshort': 'pe',
              'partname': '教务处'
            },
            {'partshort': 'pf', 'partname': '科研处'}, {'partshort': 'pg', 'partname': '学员工作处'}, {
              'partshort': 'ph',
              'partname': '干部教育学院'
            },
            {'partshort': 'pi', 'partname': '南湖分校工作处'}, {'partshort': 'pj', 'partname': '行政处'}, {
              'partshort': 'pk',
              'partname': '市情研究中心'
            },
            {'partshort': 'pl', 'partname': '图书信息中心'}, {'partshort': 'pm', 'partname': '基础理论教研室'}, {
              'partshort': 'pn',
              'partname': '经济管理教研室'
            },
            {'partshort': 'po', 'partname': '公共管理教研室'}, {
              'partshort': 'pp',
              'partname': '文化与社会学教研室'
            }, {'partshort': 'pq', 'partname': '游客'}]
        },
        showbottom: false,
        swiperOption: {
//          pagination: '.swiper-pagination',
//          effect: 'coverflow',
//          grabCursor: true,
//          centeredSlides: true,
//          slidesPerView: 'auto',
//          coverflow: {
//            rotate: 50,
//            stretch: 0,
//            depth: 100,
//            modifier: 1,
//            slideShadows: true
//          }
//          notNextTick: true,
//          autoplay: 3000,
//          grabCursor: true,
//          setWrapperSize: true,
//          autoHeight: true,
//          pagination: '.swiper-pagination',
//          paginationClickable: true,
//          prevButton: '.swiper-button-prev',
//          nextButton: '.swiper-button-next',
//          scrollbar: '.swiper-scrollbar',
//          mousewheelControl: true,
//          observeParents: true,
//          onTransitionStart(swiper){
//            console.log(swiper)
//          },
//          onSlideChangeEnd: swiper => {
//            // 这个位置放swiper的回调方法
//            this.page = swiper.realIndex + 1
//            this.index = swiper.realIndex
//          }
        }
      }
    },
    methods: {
      shutbottom(){
        setTimeout(function () {
          document.getElementsByClassName('model-part')[0].style.bottom = '-100%'
          this.showbottom = false
        }.bind(this), 0)
      },
      checkidentity(obj){
        this.showbottom = true
        this.$nextTick(() => {
          setTimeout(function () { document.getElementsByClassName('model-part')[0].style.bottom = 0 }, 0)
        })
        if (obj === 't') {
          this.schpart = this.schparts.tpart
        } else {
          this.schpart = this.schparts.ppart
          this.$nextTick(() => {
            document.getElementsByClassName('model-part')[0].style.height = '240px'
          })
        }
        window.localStorage.setItem('identity', obj)
        this.$parent.identity = obj
      },
      checkpidentity(obj){
        window.localStorage.setItem('pidentity', obj)
        this.$parent.pidentity = obj
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .entry
    background url('../common/image/entry.png') no-repeat center
    background-size cover
    width 100%
    height 100%
    overflow hidden
    .entry-img
      padding 10% 0 0
      margin 0 auto
      width 170px
      height 170px
    .entry-name
      color #9b2024
      text-align center
      font-size 24px
      margin 30px 0
    .entry-login
      .login-student, .login-teacher
        font-size 20px
        width 180px
        height 30px
        line-height 30px
        margin 20px auto 0
        text-align center
        border-radius 20px
        border 1px solid rgba(155, 32, 36, 0.5)
        background-color white
        color #9b2024
    .entry-model
      width 100%
      height 100%
      background rgba(7, 17, 27, 0.2)
      position fixed
      z-index 1
      left 0
      bottom 0
      .model-part
        position absolute
        left 0
        height auto
        text-align center
        width 70%
        padding 20px 15% 10px
        background white
        bottom -100%
        transition: All 0.4s ease-in-out
        -webkit-transition: All 0.4s ease-in-out
        -moz-transition: All 0.4s ease-in-out
        -o-transition: All 0.4s ease-in-out
        overflow hidden
        .part-scoll
          overflow auto
          height 100%
          .part-li
            margin 10px
// 隱藏滾動條
  .part-scoll::-webkit-scrollbar
    display:none

  .swiper-inner {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }
</style>
