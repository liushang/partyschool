<template>
  <div class="talk-bottom"><input v-model="talktext" @change="changetext" type="text" class="talk-input">
    <div class="talk-sub" @click="talksub">发送</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: ['talk'],
    data(){
      return {
        talktext: this.talk
      }
    },
    methods: {
      changetext(){
        this.$emit('changetalk', this.talktext)
      },
      talksub(){
        this.$emit('talksub')
        this.talktext = ''
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import '../../common/css/talkinput'
</style>
