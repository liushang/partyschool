<template>
  <div id="app">
    <modal v-if="showmodal" class="app-modal" ref="indexmodal"></modal>
    <router-view :title="title" :rout="rout" name="h" @showm="showmwhite"></router-view>
    <div id="header-bottom"></div>
    <router-view @showm="showmwhite"></router-view>
    <router-view name="b"></router-view>
  </div>
</template>

<script>
  import modal from '@/components/modal.vue'
  import entry from '@/components/entry'
  export default {
    data() {
      return {
        title: '',
        showmodal: false,
        stuid: '123456',
        stupwd: '123456',
        identity: '',
        pidentity: '',
        rout: ''
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      showmwhite(){
        this.$nextTick(() => {
          console.log(this.$refs.indexmodal)
          this.$refs.indexmodal.animatewhite()
        })
      },
      handleScroll () {
        console.log(window.scrollY)
        if (window.scrollY > 50) {
          document.getElementsByClassName('header')[0].style.position = 'fixed'
          document.getElementsByClassName('header')[0].style.top = '0'
          document.getElementById('header-bottom').style.height = '50px'
        } else {
          document.getElementsByClassName('header')[0].style.position = 'relative'
        }
        if (window.scrollY < 50) {
          document.getElementById('header-bottom').style.height = '0'
          document.getElementsByClassName('header')[0].style.top = window.scrollY + 'px'
        }
      }
    },
    components: {modal, entry}
  }
</script>

<style lang="stylus" type="text/stylus">
  /*@import './common/css/idangerous.swiper.css'*/
  //  取消chrome下input和textarea的聚焦边框
  input, button, select, textarea {
    outline: none
  }

  /*取消chrome下textarea可拖动放大*/
  textarea {
    resize: none
  }

  #app
    position relative
    height 100%

  html, body
    height 100%

  body
    background rgba(7, 17, 27, 0.1)

  #header-bottom
    height 0

</style>
