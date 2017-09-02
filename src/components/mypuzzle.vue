<template>
  <div class="mypuzzle">
    <div class="puzzles">
      <ul>
        <li v-for="item in mypuzzle" class="puzzle"><h2>{{item.problem}}</h2>
          <div class="puzzle-content">{{item.answer}}</div>
        </li>
      </ul>
    </div>
    <div class="havepuzzle">
      <div class="newpuzzle">我有新的答疑</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        mypuzzle: [
          {
            'problem': '如何成为一名合格的共产党员',
            'answer': '要树立正确的入党动机。入党动机，就是为什么要入党，这是每一名共产党员在入党前和入党后都要深深思考的问题。因为共产党不仅要在组织上入党，更要从思想上入党 。正确的入党动机是思想上入党的根本问题，是激励人们入党的主观原因， 他从根本上决定了每一个党员的素质和行为，是共产党员的世界观人生观的集中反映。'
          },
          {
            'problem': '如何评价当今的世界格局？',
            'answer': '世界格局正在向多极化发展。 1、二战后，世界形成了以美苏对峙为标志的世界两极格局。 2、上世纪80--90年代初，东欧剧变、苏联解体，美苏对峙的两极格局被打破，世界各种力量在错综复杂的利益关系中出现新的分化和组合，国际格局向多极化发展。'
          },
          {
            'problem': '如何正确理解平凡与伟大？',
            'answer': 'Clear正式推出的第一天就在Apple Store排行榜(付费榜和总榜)窜升至第二，现在成为了苹果App Store本周最佳应用软件。而在美中国学生尤雨溪(Evan You)则花了两天时间，打造了一个HTML5版的Clear，几乎完整实现了Clear的所有功能，并放出了源代码'
          },
          {
            'problem': '谈谈英国脱欧带来的影响',
            'answer': '英国并非欧元区国家，可以发行自己独立的货币，有利保持其出口竞争力，拥有自主的财政政策。但这使英国很难真正的加入欧洲大陆的事务处理。尤其是欧债危机的关键时期，由于各种利益分歧明显，这一传统强国正在逐步丧失其在欧盟中的地位与参与权。'
          },
          {
            'problem': '评价学良',
            'answer': '八事变之后,咱们的教材说张学良执行了蒋介石不抵抗的命令,张学良先生在他的回忆录里说没这事。咱们当然还是以张学良先生的回忆录为准,人家当事人都说没'
          },
          {
            'problem': 'VUE',
            'answer': '2016年9月3日，在南京的JSConf上，Vue作者尤雨溪正式宣布加盟阿里巴巴Weex团队，尤雨溪称他将以技术顾问的身份加入 Weex 团队来做 Vue 和 Weex 的 JavaScript runtime 整合，目标是让大家能用 Vue 的语法跨三端'
          }
        ]
      }
    },
    created(){
      document.querySelector('body').style.background = 'white'
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .mypuzzle
    text-align center
    position relative
    margin-bottom 20px
    .puzzles
      margin-bottom 70px
      .puzzle
        width 90%
        margin 20px auto
        box-shadow 1px 1px 8px rgba(7, 17, 27, 0.4)
        background white
        border-radius 5px
        padding 5px 0
        h2
          font-size 20px
          line-height 40px
        .puzzle-content
          font-size 14px
          line-height 30px
          text-indent: 2em
        &:last-child
          margin-bottom 90px
    .havepuzzle
      background-color white
      position fixed
      bottom 0px
      left 0
      width 100%
      height 60px
    .newpuzzle
      border-radius 5px
      background #8b0000
      color white
      font-size 30px
      line-height 50px
      position absolute
      bottom 10px
      left 5%
      width 90%
      height 50px
</style>
