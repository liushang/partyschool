<template>
  <div class="filedetail">
    <headersome :something="sometext" @dosome="modalstay"></headersome>
    <div class="filedetail-contain">
      <div class="filedetail-title">{{file.title}}</div>
      <div class="filedetail-text"> {{file.text}}</div>
      <div class="filedetail-time">{{file.time}}</div>
      <transition name="fade">
        <div class="file-modal" v-if="modal" transiton="fade">
          <div class="modal-text">
            <li v-for="(i,index) in file.to" class="text-li"><span class="text-part">{{i.part}}</span>
              <span class="text-state" :class="[{textstate1:(i.state===1)},{textstate2:(i.state===-1)}]">{{i.state===1?'同意':(i.state===0?'其他':'不同意')}}</span>
              <span class="text-detail"><div class="detail-text"
                                             style="width: 100%;overflow: hidden;white-space:nowrap;text-overflow: ellipsis"><span
                class="real-reason">{{i.reason}}</span></div>
            </span>
              <span class="detail-icon" @click="lookmore(index)">详情<svg class="icon jiantou" aria-hidden="true">
                <use xlink:href="#icon-jiantou"></use>
              </svg>
              </span>
              <div class="more-detail" style="display:none">{{i.reason}}</div>
            </li>
          </div>
          <div class="modal-bottom">
            <div class="bottom-item1">
              <input type="radio" name="files" id="radio1"><label for="radio1" class="radioitem">同意</label>
              <input type="radio" name="files" id="radio2">
              <lable for="radio2" class="radioitem">不同意</lable>
              <input type="radio" name="files" id="radio3"><label for="radio3" class="radioitem">其他</label>
              <svg @click.stop="share" style="color:#cb7d4d;font-size: 30px;line-height: 30px;margin-left: 20px"
                   class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiaoxifasong1"></use>
              </svg>
            </div>
            <div class="bottom-item2">
              <textarea name="" placeholder="理由或其他好的建议" class="filetextarea"></textarea>
            </div>
            <div class="bottom-item3">
              <el-button :plain="true" class="item3-confirm" style="background-color: #a80000;padding: 0;border: none" @click="confirmfile">确认批复</el-button>
              <div class="item3-back" @click="modalstay">返回</div>
            </div>
          </div>
        </div>
      </transition>
      <div class="file-list">
        <div class="list-item"><label for="stu">学生处</label> <input class="part-radio" type="checkbox" id="stu"></div>
        <div class="list-item"><label for="sci">科研处</label> <input class="part-radio" type="checkbox" id="sci"></div>
        <div class="list-item"><label for="wor">学员工作处</label> <input class="part-radio" type="checkbox" id="wor"></div>
        <div class="list-item"><label for="per">组织人事</label> <input class="part-radio" type="checkbox" id="per"></div>
        <div class="list-item"><label for="gov">行政处</label> <input class="part-radio" type="checkbox" id="gov"></div>
        <div class="list-item"><label for="mon">经管处</label> <input class="part-radio" type="checkbox" id="mon"></div>
        <div class="list-item"><label for="bac">后勤处</label> <input class="part-radio" type="checkbox" id="bac"></div>
        <div class="list-item"><label for="sch">校长办公室</label> <input class="part-radio" type="checkbox" id="sch"></div>
        <div class="list-item" @click="checkall()"><label for="all">全选</label> <input type="checkbox" id="all"></div>
        <el-button :plain="true" class="list-do" @click="confirmshare" style="background-color: #a80000;color:white;padding: 0;border: none">分享</el-button>
        <div class="list-do" @click="cancelshare">取消</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import headersome from '@/components//header/header-some'
  export default{
    data(){
      return {
        modal: false,
        sometext: '操作',
        files: [
          {
            'id': 0,
            'headimg': '',
            'title': '校园基础建设问题汇总',
            'text': '“十二五”期间，在市委市政府的领导下，我市教育以推进新型城市化为契机，围绕“率先实现教育现代化”的发展目标，坚持“四个注重”，改革创新、攻坚前行，取得了显著的系列成果，提升了教育发展整体水平，主要发展指标达到全省乃至全国前列。本报今起开辟“‘十二五’教育回眸”专栏，展示五年来我市教育事业取得的成就。日前，市重点民生工程两大迁建工程主体工程全面竣工，并通过验收，为教育画上圆满的句号。“十二五”是深化教育改革、加快教育发展、建设教育强市、实现教育现代化的重要时期。五年来，市教育局围绕率先实现教育现代化、创建省首批教育现代化强市为总体目标，以高质量推进教育内涵发展、高标准统筹各级各类教育协调发展、高水平实现服务型教育能力发展为主要任务，加快实施教育改革和发展工程。',
            'time': '14:04',
            'short': '紧急',
            'mestate': 0,
            'look': 0,
            'from': '文化部',
            'to': [{
              'part': '科研处',
              'state': 0,
              'reason': ''
            }, {
              'part': '学员工作处',
              'state': 0,
              'reason': '可以！,但是我觉得时间应该晚一点，那个时候开学事情可能有点多，大家没有足够的准备。'
            }, {
              'part': '组织人事',
              'state': 1,
              'reason': '可以！'
            }, {
              'part': '行政处',
              'state': -1,
              'reason': '可以！'
            }, {
              'part': '经管处',
              'state': 1,
              'reason': '可以！'
            }]
          },
          {
            'id': 1,
            'headimg': '',
            'title': '关于XXX同志任职的通知',
            'text': '经研究决定：沈德忠同志任省水利工程质量监督中心站副调研员，任职时间自2015年11月起计算。',
            'time': '16:24',
            'short': '三天内',
            'mestate': 1,
            'look': 1,
            'from': '办公室',
            'to': [{
              'part': '科研处',
              'state': 1,
              'reason': '可以！'
            }, {
              'part': '学员工作处',
              'state': 1,
              'reason': '可以！'
            }, {
              'part': '组织人事',
              'state': 0,
              'reason': '可以！'
            }, {
              'part': '行政处',
              'state': 1,
              'reason': '可以！'
            }, {
              'part': '经管处',
              'state': -1,
              'reason': '不可以！'
            }]
          },
          {
            'id': 2,
            'headimg': '',
            'title': '新思维、新风向演讲比赛的通知批示',
            'text': '各班级、辅导员（班主任）、德育导师：为了锻炼学生们的演讲能力和口头表达能力，增强自信和自我认同感，提高沟通能力，给大家提供一个展现自我，提升自我的机会和舞台，学院经研究决定举办一场别开生面的演讲比赛。希望可以通过此次比赛让大家学习到更多的演讲技巧，提高自己的综合素质与能力。一、活动时间：2009年10月30日----11月13日。二、演讲内容：以“我的理想，我的梦”为主题，尽情发挥参赛选手的演讲才能，展现自己的风采、阐述自己的主张和观点，以新颖的角度和方式，抒发自己的情怀。',
            'time': '17:54',
            'short': '9月前',
            'mestate': 0,
            'look': 1,
            'from': '文化部',
            'to': [{
              'part': '科研处',
              'state': 1,
              'reason': '可以！'
            }, {
              'part': '学员工作处',
              'state': 1,
              'reason': '可以！'
            }, {
              'part': '组织人事',
              'state': 0,
              'reason': '可以！'
            }, {
              'part': '行政处',
              'state': 0,
              'reason': '可以！'
            }, {
              'part': '经管处',
              'state': 1,
              'reason': '可以！'
            }]
          },
          {
            'id': 3,
            'headimg': '',
            'title': '关于南湖大学十月一日放假通知',
            'text': '各位同仁：20xx年1月1日——元旦为国家法定假日，放假一天。为便于各部门及早合理地安排节假日生产等有关工作，现将元旦放假调休日期具体安排通知如下：200xx年12月30日—200xx年1月1日放假，共3天。其中，1月1日(星期二)为法定节假日，12月30日(星期日)为公休日，12月29日(星期六)公休日调至12月31日(星期一)，12月29日(星期六)上班。',
            'time': '17:54',
            'short': '9月前',
            'mestate': 1,
            'look': 1,
            'from': '教务处',
            'to': [{
              'part': '科研处',
              'state': 1,
              'reason': '可以！'
            }, {
              'part': '学员工作处',
              'state': 1,
              'reason': '可以！'
            }, {
              'part': '组织人事',
              'state': 0,
              'reason': '可以！'
            }, {
              'part': '行政处',
              'state': 0,
              'reason': '可以！'
            }, {
              'part': '经管处',
              'state': 1,
              'reason': '可以！'
            }]
          },
          {
            'id': 4,
            'headimg': '',
            'title': '关于举办社团文化周的通知',
            'text': '各学院学生分会：为活跃校园文化氛围，促进学生沟通交流，丰富广大同学的课余生活，根据上级党委、校团委要求，校学生会决定于3月25日-4月初举办 **工学院第八届社团文化周，具体事宜通知如下:\n一、活动主和谐，激情，梦想。展现学生社团风采，丰富校园文化生活。二、主办和承办单位主办：共青团 **工学院委员会 **工学院学生会承办： **工学院学生会社团部 **工学院各学生社团',
            'time': '17:54',
            'short': '9月前',
            'mestate': -1,
            'look': 1,
            'from': '教务处',
            'to': [{
              'part': '科研处',
              'state': 1,
              'reason': '可以！'
            }, {
              'part': '学员工作处',
              'state': 1,
              'reason': '可以！'
            }, {
              'part': '组织人事',
              'state': 0,
              'reason': '可以！'
            }, {
              'part': '行政处',
              'state': 0,
              'reason': '可以！'
            }, {
              'part': '经管处',
              'state': 1,
              'reason': '可以！'
            }]
          },
          {
            'id': 5,
            'headimg': '',
            'title': '新思维、新风向演讲比赛的通知批示',
            'text': '各学院学生分会：为活跃校园文化氛围，促进学生沟通交流，丰富广大同学的课余生活，根据上级党委、校团委要求，校学生会决定于3月25日-4月初举办 **工学院第八届社团文化周，具体事宜通知如下:\n一、活动主和谐，激情，梦想。展现学生社团风采，丰富校园文化生活。二、主办和承办单位主办：共青团 **工学院委员会 **工学院学生会承办： **工学院学生会社团部 **工学院各学生社团',
            'time': '17:54',
            'short': '本周五前',
            'mestate': -1,
            'look': 1,
            'from': '文化部',
            'to': [{
              'part': '科研处',
              'state': 1,
              'reason': '可以！'
            }, {
              'part': '学员工作处',
              'state': 1,
              'reason': '可以！'
            }, {
              'part': '组织人事',
              'state': 0,
              'reason': '可以！'
            }, {
              'part': '行政处',
              'state': 0,
              'reason': '可以！'
            }, {
              'part': '经管处',
              'state': 1,
              'reason': '可以！'
            }]
          },
          {
            'id': 6,
            'headimg': '',
            'title': '新思维、新风向演讲比赛的通知批示',
            'text': '各学院学生分会：为活跃校园文化氛围，促进学生沟通交流，丰富广大同学的课余生活，根据上级党委、校团委要求，校学生会决定于3月25日-4月初举办 **工学院第八届社团文化周，具体事宜通知如下:\n一、活动主和谐，激情，梦想。展现学生社团风采，丰富校园文化生活。二、主办和承办单位主办：共青团 **工学院委员会 **工学院学生会承办： **工学院学生会社团部 **工学院各学生社团',
            'time': '17:54',
            'short': '9月前',
            'mestate': 0,
            'look': 1,
            'from': '办公室',
            'to': [{
              'part': '科研处',
              'state': 1,
              'reason': '可以！'
            }, {
              'part': '学员工作处',
              'state': 1,
              'reason': '可以！'
            }, {
              'part': '组织人事',
              'state': 0,
              'reason': '可以！'
            }, {
              'part': '行政处',
              'state': 0,
              'reason': '可以！'
            }, {
              'part': '经管处',
              'state': 1,
              'reason': '可以！'
            }]
          },
          {
            'id': 7,
            'headimg': '',
            'title': '新思维、新风向演讲比赛的通知批示',
            'text': '各学院学生分会：为活跃校园文化氛围，促进学生沟通交流，丰富广大同学的课余生活。 根据上级党委、校团委要求，校学生会决定于3月25日-4月初举办 **工学院第八届社团文化周，具体事宜通知如下: "\n" 一、活动主和谐，激情，梦想。展现学生社团风采，丰富校园文化生活。二、主办和承办单位主办：共青团 **工学院委员会 **工学院学生会承办： **工学院学生会社团部 **工学院各学生社团',
            'time': '17:54',
            'short': '9月前',
            'mestate': -1,
            'look': 1,
            'from': '文化部',
            'to': [{
              'part': '科研处',
              'state': 1,
              'reason': '可以！'
            }, {
              'part': '学员工作处',
              'state': 1,
              'reason': '可以！'
            }, {
              'part': '组织人事',
              'state': 0,
              'reason': '可以！'
            }, {
              'part': '行政处',
              'state': 0,
              'reason': '可以！'
            }, {
              'part': '经管处',
              'state': 1,
              'reason': '可以！'
            }]
          }],
        file: {}
      }
    },
    components: {
      headersome
    },
    methods: {
      confirmfile(){
        this.$message({
          message: '提交成功！',
          type: 'success',
          duration: 800
        })
      },
      confirmshare(){
        this.$message({
          message: '分享成功！',
          type: 'success',
          duration: 800
        })
        this.cancelshare()
      },
      checkall(){
        if (!document.getElementById('all').checked) {
          for (let i of document.getElementsByClassName('list-item')) {
            i.getElementsByClassName('part-radio')[0].checked = false
          }
        } else {
          for (let i of document.getElementsByClassName('list-item')) {
            i.getElementsByClassName('part-radio')[0].checked = true
          }
        }
      },
      cancelshare(){
        document.getElementsByClassName('file-list')[0].style.right = '-180px'
      },
      share(){
        document.getElementsByClassName('file-list')[0].style.right = '0'
      },
      lookmore(index){
        if (document.getElementsByClassName('more-detail')[index].style.display === 'none') {
          document.getElementsByClassName('more-detail')[index].style.display = 'block'
          document.getElementsByClassName('jiantou')[index].style.transform = 'rotate(180deg)'
          document.getElementsByClassName('jiantou')[index].style.webkitTransform = 'rotate(180deg)'
          document.getElementsByClassName('jiantou')[index].style.mozTransform = 'rotate(180deg)'
          document.getElementsByClassName('jiantou')[index].style.oTransform = 'rotate(180deg)'
          document.getElementsByClassName('jiantou')[index].style.msTransform = 'rotate(180deg)'
        } else {
          document.getElementsByClassName('more-detail')[index].style.display = 'none'
          document.getElementsByClassName('jiantou')[index].style.transform = 'rotate(0deg)'
          document.getElementsByClassName('jiantou')[index].style.webkitTransform = 'rotate(0deg)'
          document.getElementsByClassName('jiantou')[index].style.mozTransform = 'rotate(0deg)'
          document.getElementsByClassName('jiantou')[index].style.oTransform = 'rotate(0deg)'
          document.getElementsByClassName('jiantou')[index].style.msTransform = 'rotate(0deg)'
        }
      },
      // 显示理由详情
      modalstay(){
        this.modal = !this.modal
        if (this.modal === true) {
          document.getElementsByClassName('filedetail-contain')[0].style.color = 'rgba(7,17,27,0.2)'
          this.$nextTick(() => {
            let y = 0
            for (let i of document.getElementsByClassName('real-reason')) {
              console.log(i.offsetWidth)
              let z = document.body.clientWidth
              console.log(z)
              if (i.offsetWidth > 0.84 * 0.38 * z) {
                document.getElementsByClassName('detail-icon')[y].style.display = 'block'
              } else {
                document.getElementsByClassName('detail-icon')[y].style.display = 'none'
              }
              y++
            }
          })
        } else {
          document.getElementsByClassName('filedetail-contain')[0].style.color = 'black'
          document.getElementsByClassName('file-list')[0].style.right = '-180px'
        }
      }
    },
    created(){
      this.file = this.files[this.$route.query.index]
      console.log(this.file)
      document.body.style.backgroundColor = 'white'
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import '../common/css/filedetail'
  .fade-enter-active, .fade-leave-active
    transition opacity 1s

  .fade-enter, .fade-leave-active
    opacity 0
</style>
