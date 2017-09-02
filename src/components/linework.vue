<template>
  <div class="linework">
    <li v-for="(item, index1) in linework">
      <el-col :span="24">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="">
          <el-submenu index="1">
            <template slot="title">
              <span class="ltitle">{{item.class}}</span>
            </template>
            <el-menu-item :index="index" v-for="(it,index2) in item.time"
                          @click="workdetail('/linework/workdetail', index1, index2)" :key="1"><span
              class="ltitle">{{it.day}}</span><span class="rtitle">{{it.state?'已批复':'未批复'}}</span></el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </li>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        linework: [
          {
            'time': [
              {
                'state': '1',
                'evaluate': '言简意赅，思路清晰',
                'rate': '9.0',
                'day': '2017-1-3',
                'question': '共产党宣言包含哪些内容？',
                'anwser': '《共产党宣言》第一次阐述了科学社会主义理论，指出共产主义运动已成为不可抗拒的历史潮流。构成《宣言》核心的基本原理是：每一历史时代主要的生产方式与交换方式以及必然由此产生的社会结构，是该时代政治的和精神的历史所赖以确立的基础，并且只有从这一基础出发，历史才能得到说明。从原始社会解体以来人类社会的全部历史都是阶级斗争的历史；这个历史包括一系列发展阶段，已经达到这样一个阶段，即无产阶级如果不同时使整个社会摆脱任何剥削、压迫以及阶级划分和阶级斗争，就不能使自己从资产阶级的剥削统治下解放出来。'
              },
              {
                'state': '1',
                'day': '2017-1-3',
                'evaluate': '言简意赅，思路清晰',
                'rate': '6.9',
                'question': '共产党宣言的本质？',
                'anwser': '《共产党宣言》运用了辩证唯物主义和历史唯物主义分析生产力与生产关系、经济基础与上层建筑的矛盾，分析阶级和阶级斗争，特别是资本主义社会阶级斗争的产生、发展过程，论证资本主义必然灭亡和社会主义必然胜利的客观规律，作为资本主义掘墓人的无产阶级肩负的世界历史使命。'
              },
              {
                'state': '1',
                'evaluate': '言简意赅，思路清晰',
                'rate': '5.5',
                'day': '2017-1-3',
                'question': '对于共产党宣言，你的理解是？',
                'anwser': '。《共产党宣言》还指出无产阶级在夺取政权后，必须在大力发展生产力的基础上，逐步地进行巨大的社会改造，进而达到消灭阶级对立和阶级本身的存在条件。《共产党宣言》批判当时各种反动的社会主义思潮，对空想社会主义作了科学的分析和评价。《共产党宣言》阐述作为无产阶级先进队伍的共产党的性质、特点和斗争策略，指出为党的目的而奋斗与争取实现共产主义终极目的之间的联系。'
              },
              {
                'state': '',
                'day': '2017-1-3',
                'rate': '',
                'evaluate': '',
                'question': '聊一聊共产党宣言的前世今生。',
                'anwser': ''
              },
              {
                'state': '',
                'evaluate': '',
                'rate': '',
                'day': '2017-1-3',
                'question': '共产党宣言包含哪些内容？',
                'anwser': ''
              }
            ],
            'class': '共产党宣言'
          },
          {
            'time': [
              {
                'state': '1',
                'evaluate': '言简意赅，思路清晰',
                'rate': '8.5',
                'day': '2017-2-3',
                'question': '三个代表的重要思想包含哪些内容？',
                'anwser': '具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。 “三个代表”重要思想，集中概括了党和国家全部理论活动、实践活动，包括一切工作的根本方向、根本准则、根本依据，成为指引党和国家新世纪伟大进军的行动指南。'
              },
              {
                'state': '1',
                'evaluate': '逻辑清楚',
                'rate': '5.5',
                'day': '2017-3-13',
                'question': '三个代表的重要思想带来的启示？',
                'anwser': '三个代表”重要思想，集中概括了党和国家全部理论活动、实践活动，包括一切工作的根本方向、根本准则、根本依据，成为指引党和国家新世纪伟大进军的行动指南。 “三个代表”重要思想是面向21世纪的中国化的马克思主义，是新世纪新阶段全党全国人民继往开来、与时俱进，实现全面建设小康社会宏伟目标的根本指针。'
              }
            ],
            'class': '三个代表思想'
          },
          {
            'time': [
              {
                'state': '1',
                'evaluate': '言简意赅，思路清晰',
                'rate': '9.5',
                'day': '2017-2-3',
                'question': '马克思主义哲学包含哪些内容？',
                'anwser': '辩证的唯物论，唯物的辩证法，辩证唯物主义的认识论，历史唯物论'
              },
              {
                'state': '',
                'day': '2017-3-13',
                'rate': '',
                'evaluate': '',
                'question': '马克思主义的起源',
                'anwser': '马克思主义有三部分组成：一是马克思主义哲学,它的理论来源是德国古典学,其中的代表是黑格尔的唯心主义辩证法和费尔巴哈的唯物主义。二是马克思主义政治经济学,其直接来源是古典政治经济学,其中的代表人物是亚当斯密和大卫~李嘉图的劳动创造价值。三是科学社会主义：其来源是19实际欧洲空想社会主义学说,其代表人是西门,傅立叶,欧文。'
              }
            ],
            'class': '马克思主义哲学'
          }
        ]
      }
    },
    created(){
      document.body.style.backgroundColor = 'rgba(7,17,27,0.1)'
    },
    methods: {
      workdetail(name, index1, index2){
        this.$router.push({
          path: name,
          query: {index1: index1, index2: index2}
        })
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import '../common/css/myleave.styl'
</style>
