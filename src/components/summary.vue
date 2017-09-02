<template>
  <div class="summary">
    <headerdone @backsome="backsummary"></headerdone>
    <li v-for="(item,index1) in summary" class="big-title">
      <el-col :span="24">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <span v-if="item.classname" class="ltitle">{{item.classname}}
                <svg @click.stop="deletenote(index1, -1)" style="line-height: 56px" class="icon" aria-hidden="true">
                  <use xlink:href="#icon-cha2"></use>
                </svg>
              </span>
              <span contenteditable="true" v-else><input type="text" style="background-color:rgba(72,87,106,0.01)"
                                                         placeholder="请输入课程名称">
                <svg @click.stop="deletenote(index1, -1)" style="line-height: 56px" class="icon" aria-hidden="true">
                  <use xlink:href="#icon-cha2"></use>
                </svg>
              </span>
            </template>
            <el-submenu :index="index2" v-for="(i,index2) in item.day" :key="1" class="small-title">
              <template slot="title">{{i.time}}
              </template>
              <el-menu-item index="1">
                <div contenteditable="true" style="white-space:normal;min-height:50px;line-height: 30px;outline: none">
                  {{i.content?i.content:'我的心得体会：'}}
                </div>
                <div style="height: 30px;">

                  <svg @click.stop="delivery(index1, index2)" style="color:black;font-size: 30px;line-height: 30px"
                       class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiaoxifasong1"></use>
                  </svg>
                  <span style="display:inline;visibility: hidden;color:black" class="delivery-state">（已发送）</span>
                  <svg @click.stop="deletenote(index1, index2)" style="width: 16px;height:40px;float:right;"
                       aria-hidden="true">
                    <use xlink:href="#icon-cha2"></use>
                  </svg>
                </div>
              </el-menu-item>
            </el-submenu>
    <li class="el-submenu" @click="dayplus(index1,index2)">
      <div class="el-submenu__title border-title" style="padding-left: 20px;">
                <span class="plus" style="font-size: 22px;">
                  <svg style="width:30px;height:30px;margin-top: 14px" aria-hidden="true">
                    <use xlink:href="#icon-gouwu--copy"></use>
                  </svg>
                </span>
      </div>
    </li>
    </el-submenu>
    </el-menu>
    </el-col>
    </li>
    <li>
      <div class="el-col el-col-24">
        <ul class="el-menu el-menu-vertical-demo">
          <li class="el-submenu">
            <div class="el-submenu__title border-title" style="padding-left: 20px;" @click="classplus">
              <span class="plus" style="font-size: 30px">
                <svg style="width:40px;height:40px;line-height:50px" aria-hidden="true">
                  <use xlink:href="#icon-gouwu--copy"></use>
                </svg>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </li>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerdone from './header/header-done'
  export default {
    data() {
      return {
        summary: [
          {
            'classname': '马克思主义哲学',
            'day': [
              {
                'time': '2017-3-15',
                'content': '马克思主义是关于无产阶级和人类解放的科学。在我看来，马克思主义基本原理主要包括：世界的物质性和及其发展规律、认识世界和改造世界、人类社会及其发展规律。'
              },
              {
                'time': '2017-3-21',
                'content': '在现实生活中，做到一切从实际出发显得尤为重要。想问题、办事情只有从这一原则出发，方能做成功想做、要做的事情。回眸几千年的历史，无论是历代帝王建立基业，还是近代革命先烈为美好社会的不懈奋斗，抑或是现代中国特色社会主义事业的发展，无不考虑现实状况和社会环境，坚持一切从实际出发。也正因为一切从实际出发，才造就了中华上下五千年的辉煌历史。'
              },
              {
                'time': '2017-4-03',
                'content': '事物是对立统一的。对立统一规律是事物变化发展的根本规律，同时对立统一规律还提供了人们认识世界和改造世界的根本方法——矛盾分析法。'
              },
              {
                'time': '2017-4-10',
                'content': '真理与价值的辨证统一。从真理的本性上看，真理是人们对客观事物及其发展规律的正确反映。实践是检验真理的唯一标准。'
              },
              {
                'time': '2017-4-22',
                'content': '我想，正是因为马克思主义具有真理性认识，才使我们越来越重视这门科学。大学生是祖国的未来，是中国特色社会主义事业的接班人和建设者，担负着实现中华民族伟大复兴的历史使命。我们必须充分认识到马克思主义的科学性，不能仅仅为了考试而学习它，我们要在理论与实际结合中学习和掌握马克思主义，理论指导实践，争取最大限度的领悟马克思主义的真谛。'
              }
            ]
          },
          {
            'classname': '当代世界法制',
            'day': [
              {
                'time': '2017-4-11',
                'content': '思想是行动的先导，只有认识上到位，才有行动上的自觉。联系自己的工作实践，我认为，缺乏对世界法律知识的认识，就不具备国际战略眼光。由于国际间交流日夜频繁，对于新时代的公务员来说，必须具备国际战略眼光，必须与时俱进。'
              },
              {
                'time': '2017-4-21',
                'content': '法制建设是一个与时俱进的事情，是与当前社会与道德对比相适应的，也是我国当前的现状和道德的体现。'
              },
              {
                'time': '2017-4-24',
                'content': '在学习中不断认识到，虽然自己知道法律价值的重要性，但是由于相关法律知识准备不够充足，在处事中更多地想到运用行政手段去管理事务，而不善于运用法律手段。因而，作为公务员，学好法律重要，懂得合情合理的运用法律也非常重要，理顺工作、维护公平正义、实现社会和谐。'
              },
              {
                'time': '2017-5-10',
                'content': '我国的总体法制理论基础相对还是薄弱，市场经济不够发达和完善。虽然社会主义法制社会的建设固然重要，但是还应遵循客观规律的发展，不能操之过急，最重要的是首先了解并解决这些阻碍我国发展的制约因素。'
              },
              {
                'time': '2017-5-20',
                'content': '坚持理论与实践相结合，严格依法行政、依法管理，才是学好法、用好法的关键。'
              }
            ]
          },
          {
            'classname': '毛泽东思想',
            'day': [
              {
                'time': '2017-3-28',
                'content': '毛泽东思想是马克思主义列宁主义在中国的运用和发展，从毛泽东个人的革命历程看，毛泽东思想是与中国革命的发展相辅相成的，并被中国革命的实践和建设所证明了的正确的理论和经验总结，也是中国共产党人集体智慧的结晶。'
              },
              {
                'time': '2017-4-06',
                'content': '学习毛泽东思想，必须搞好调查和研究。认清工作的对象、任务、动力、性质、未来。'
              },
              {
                'time': '2017-4-93',
                'content': '要坚持实事求是、独立自主。实事求是是毛泽东思想的精髓，是我们必须坚持的马克思主义思想路线。'
              }
            ]
          }
        ]
      }
    },
    components: {headerdone},
    created() {
      document.body.style.backgroundColor = 'white'
    },
    methods: {
      backsummary(){
        this.$router.push('/person')
      },
      classplus() {
        this.summary.push({'classname': '', 'day': []})
      },
      dayplus(obj1) {
        let time = new Date()
        let m = time.getMonth() + 1
        let t = time.getFullYear() + '-' + m + '-' + time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes()
        this.summary[obj1].day.push({'time': t, 'content': ''})
      },
      deletenote(obj1, obj2) {
        if (obj2 === -1) {
          this.summary.splice(obj1, 1)
        } else {
          this.summary[obj1].day.splice(obj2, 1)
        }
      },
      delivery(obj1, obj2){
        this.$confirm('确认提交学习心得？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push('/person/summary')
          document.getElementsByClassName('big-title')[obj1].getElementsByClassName('small-title')[obj2].getElementsByClassName('delivery-state')[0].style.visibility = 'visible'
        }).catch(() => {
        })
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import '../common/css/myleave.styl'
  @import "../common/css/summary.styl"
</style>
