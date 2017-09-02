
<template>
  <div class="bg">
    <ul>
      <li v-for="(i,index) in news.notice" class="press" @click="showRouter('/press/pressdetail','通知',index)">
        <div class="press_title">{{i.title}}</div>
        <div class="press_text">{{i.text}}</div>
        <div class="press_time"><span class="time_time">{{i.time}}</span><span class="press_state"
                                                                               @click.stop="pressstate(i.state)">{{i.state}}</span><span
          class="press_type" v-if="i.type" @click.stop="presstype(i.type)">{{i.type}}</span></div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        news: {
          'press': [
            {
              'title': '习近平谈“兴国之要”',
              'text': '以经济建设为中心是兴国之要，发展仍是解决我国所有问题的关键。只有推动经济持续健康发展，才能筑牢国家繁荣富强、人民幸福安康、社会和谐稳定的物质基础。中央政治局分析认为，综合判断，虽然国际经济形势依然错综复杂、充满变数，但我国发展仍然具备难得的机遇和有利条件，同时我国发展仍面临不少风险和挑战，不平衡、不协调、不可持续问题依然突出，有些还相当尖锐。我们要保持清醒头脑，增强忧患意识，深入分析问题背后的原因，因势利导，顺势而为，紧紧抓住并切实用好我国发展的重要战略机遇期。',
              'time': '2012-2-2',
              'state': '未读',
              'type': '校内新闻'
            },
            {
              'title': '习近平再访“一带一路”首倡地',
              'text': '中国社会科学院“一带一路”研究中心副主任张宁等学者认为，习主席的署名文章《为中哈关系插上梦想的翅膀》，字里行间表达出对当前中哈合作的肯定与赞誉，对上合组织未来发展的信心与希望。此次出访将进一步提升中哈政治互信与发展战略对接，尤其是推动“一带一路”倡议的继续落实将为地区合作带来新机遇。',
              'time': '2012-2-2',
              'state': '已读',
              'type': ''
            },
            {
              'title': '中哈务实合作不断加深',
              'text': '当前，中哈两国关系面临重大合作机遇，共同的发展重任和需求，就是两国当前落实全面战略伙伴关系。”张宁告诉记者，中哈两国应携手推进“一带一路”和哈萨克斯坦“光明之路”对接战略，打造建设命运共同体和利益共同体的基础。',
              'time': '2012-2-2',
              'state': '未读',
              'type': ''
            },
            {
              'title': '推动上合组织新发展',
              'text': '上海合作组织如何发展，习主席在署名文章给出答案：“中方将在本次峰会后接任轮值主席国，愿同哈方及其他成员国一道努力，以阿斯塔纳峰会为新起点，推动上海合作组织实现新发展，更好造福地区各国人民。”',
              'time': '2012-2-2',
              'state': '已读',
              'type': '校内新闻'
            },
            {
              'title': '习近平擘画',
              'text': '“稻花香里说丰年，听取蛙声一片。”寥寥几句诗，一片自然和谐共生的景象浮现脑海。在人类历史发展进程中，人们越来越清晰认识到，经济社会快速发展决不能以环境的破坏、资源的浪费为代价。面对如何解决经济发展与环境保护兼顾的问题，早在12年前，习近平就提出了“绿水青山就是金山银山”的理念。',
              'time': '2012-2-2',
              'state': '已读',
              'type': ''
            },
            {
              'title': '供给侧结构性改革',
              'text': '中国的供给侧结构性改革有哪些务实经验？宋涛的回答是：湖北是中国推动中部崛起的战略支点省份，同时也是长江经济带的中心区域。蒋超良书记是经济学家，也是湖北实践的领导者，湖北有很多鲜活的故事和富有启迪的经验。',
              'time': '2012-2-2',
              'state': '已读',
              'type': '校内新闻'
            },
            {
              'title': '中国吏治改革',
              'text': '代执政党的干部选任工作必须适应社会职业细分、公共职位分类和人力资源战略管理的需要，走科学化、民主化、制度化道路。但不管执政党如何设定选拔任用机制，由于公共职位与公共权力紧密相关，甚至可能与个人或集团利益互为一体，其进入、晋升机会都是稀缺性的。资源稀缺导致竞争加剧，乃至出现不正当竞争，当竞争机制不畅或被扭曲时，就会产生不正之风，甚至出现“边病边升，边升边病”、“少数人中选人，少数人选错人”等问题。',
              'time': '2012-2-2',
              'state': '未读',
              'type': ''
            }
          ],
          'notice': [
            {
              'title': '习近平对哈萨克斯坦进行国事访问',
              'text': '应哈萨克斯坦共和国总统纳扎尔巴耶夫邀请，国家主席习近平于6月7日至10日对哈萨克斯坦共和国进行国事访问，并出席上海合作组织成员国元首理事会第十七次会议和阿斯塔纳专项世博会开幕式。',
              'time': '2012-2-2',
              'state': '未读',
              'type': '校内通知'
            },
            {
              'title': '一周人事：国务院任免|重庆4名新晋常委分工确定',
              'text': '本周，部委层面，国务院任免国家工作人员，任命郑富芝、刘大为为教育部部长助理；任命唐登杰为工业和信息化部副部长等。省区市层面，重庆4名新晋常委分工确定，陶长海任重庆市委统战部部长，刘强任重庆市委政法委书记等。地市层面，徐启方任陕西省宝鸡市委书记，贺懋燮任安徽省芜湖市代市长等。',
              'time': '2012-2-2',
              'state': '未读',
              'type': '党内通知'
            },
            {
              'title': '《习近平讲故事》出版发行',
              'text': '人民日报社组织编写的《习近平讲故事》一书，近日由人民出版社出版发行。该书从习近平总书记数百篇讲话和文章中，精选出体现他治国理政新理念新思想新战略的百余则故事，加以完整呈现和解读。',
              'time': '2012-2-2',
              'state': '未读',
              'type': ''
            },
            {
              'title': '高温通知',
              'text': '受连日来的高温影响，我校为各位学员老师配备了各种降温设施，望工作人员逐一发放',
              'time': '2012-2-2',
              'state': '已读',
              'type': '校内通知'
            }
          ]
        },
        detailShow: false,
        indexed: 0,
        newindex: 0,
        pressindex: []
      }
    },
    methods: {
      showRouter(name, obj, index){
        if (this.newindex === 1) {
          index = this.pressindex[index]
        } else if (this.newindex === 2) {
          index = this.pressindex[index]
        }
        this.$router.push({
          path: name,
          query: {index: index}
        })
        this.$parent.$parent.showbar = true
        this.$parent.$parent.title = obj
      },
      presstype(obj){
        let newpress = []
        let pressi = []
        if (this.newindex === 0) {
          this.news.notice.forEach(function (y, i) {
            if (y.type === obj) {
              newpress.push(y)
              pressi.push(i)
            }
          })
          this.newindex = 1
          this.pressindex = pressi
          this.news.notice = newpress
        } else if (this.newindex === 2) {
          let press = this.pressindex
          this.news.notice.forEach(function (y, i) {
            if (y.type === obj) {
              newpress.push(y)
              pressi.push(press[i])
            }
          })
          this.newindex = 1
          this.pressindex = pressi
          this.news.notice = newpress
        }
      },
      pressstate(obj){
        let newpress = []
        let pressi = []
        if (this.newindex === 0) {
          this.news.notice.forEach(function (y, i) {
            if (y.state === obj) {
              newpress.push(y)
              pressi.push(i)
            }
          })
          this.newindex = 2
          this.pressindex = pressi
          this.news.notice = newpress
        } else if (this.newindex === 1) {
          let press = this.pressindex
          this.news.notice.forEach(function (y, i) {
            if (y.state === obj) {
              newpress.push(y)
              pressi.push(press[i])
            }
          })
          this.newindex = 2
          this.pressindex = pressi
          this.news.notice = newpress
        }
      }
    },
    created(){
      document.body.style.backgroundColor = 'rgba(7,17,27,0.1)'
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .notice
    width: 80%
    height: 104px
    padding: 0 10% 4px
    border-top: 1px dashed rgb(211, 211, 211)
    position: relative
    background-color white
    overflow: hidden
    .notice_title
      text-align center
      font-weight bold
      font-size 8px
      line-height 40px
    .notice_text
      font-size 4px
      line-height 18px
      text-indent: 2em
      height 36px
      overflow hidden
      margin-bottom 12px
      word-wrap: break-word
    .notice_time
      line-height 4px
      font-size 4px
      height 16px

  .bg
    background gainsboro
    overflow auto
    ul
      .press
        width: 92%
        height: 104px
        padding: 0 4% 4px
        border-top: 1px dashed rgb(211, 211, 211)
        position: relative
        overflow: hidden
        background-color white
        .press_title
          text-align center
          font-weight bold
          font-size 8px
          line-height 40px
        .press_text
          font-size 4px
          line-height 18px
          text-indent: 2em
          height 36px
          overflow hidden
          margin-bottom 12px
          word-wrap: break-word
        .press_time
          line-height 4px
          font-size 4px
          height 16px
          position relative
          .time_time
            line-height 18px
          .press_type
            padding 0 3px
            position absolute
            left 50%
            margin-left -7%
            border 1px solid red
            color red
            display inline-block
            height 16px
            line-height 16px
            border-radius 4px
          .press_state
            padding 0 3px
            float right
            display inline-block
            margin 0 5px
            line-height 16px
            border 1px solid #c19755
            color #c19755
            border-radius 4px
</style>
