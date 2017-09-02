<template>
  <div>
    <div class="teahead"><img width="100" height="100" :src="evaluate.pic" alt=""></div>
    <div class="teaname">{{evaluate.teacher}}</div>
    <div class="teaclass">{{evaluate.class}}</div>
    <div class="textdetail">
      <div class="textcontent" style="margin: 20px 0 ">
        <div class="espact" id="attitude" @click="backone">
          <div class="evaitem">教学态度</div>
          <div>
            <img class="ximg iimg" src="../common/image/zero.png" width="30" height="30"
                 v-for="(item,index) in xs"><span
            class="t-score">{{i?i:0}}</span>分
          </div>
        </div>
        <div class="oneheight">
          <div class="singlechoose" v-for="(item,index) in evaluate.single1">
            <div class="problem">{{item.sgproblem}}</div>
            <div class="choosees" style="width: 80%;margin: 40px auto">
              <div class="unchoose" index="1" @click="choosesingle($event,index,'i')">{{item.A}}</div>
              <div class="unchoose" index="0.5" @click="choosesingle($event,index,'i')">{{item.B}}</div>
              <div class="unchoose" index="0" @click="choosesingle($event,index,'i')">{{item.C}}</div>
            </div>
          </div>
        </div>
        <div class="espact" id="classstyle" @click="backtwo">
          <div class="evaitem">授课方式</div>
          <div>
            <img class="ximg yimg" src="../common/image/zero.png" width="30" height="30"
                 v-for="(item,index) in xs"><span
            class="t-score">{{y?y:0}}</span>分
          </div>
        </div>
        <div class="oneheight">
          <div class="singlechoose" v-for="(item,index) in evaluate.single2">
            <div class="problem">{{item.sgproblem}}</div>
            <div class="choosees" style="width: 80%;margin: 40px auto">
              <div class="unchoose" index="1" @click="choosesingle($event,index,'y')">{{item.A}}</div>
              <div class="unchoose" index="0.5" @click="choosesingle($event,index,'y')">{{item.B}}</div>
              <div class="unchoose" index="0" @click="choosesingle($event,index,'y')">{{item.C}}</div>
            </div>
          </div>
        </div>
        <div class="espact" id="atmosphere" @click="backthree">
          <div class="evaitem">课堂氛围</div>
          <div>
            <img class="ximg zimg" src="../common/image/zero.png" width="30" height="30"
                 v-for="(item,index) in xs"><span
            class="t-score">{{z?z:0}}</span>分
          </div>
        </div>
        <div class="oneheight">
          <div class="singlechoose" v-for="(item,index) in evaluate.single3">
            <div class="problem">{{item.sgproblem}}</div>
            <div class="choosees" style="width: 80%;margin: 40px auto">
              <div class="unchoose" index="1" @click="choosesingle($event,index,'z')">{{item.A}}</div>
              <div class="unchoose" index="0.5" @click="choosesingle($event,index,'z')">{{item.B}}</div>
              <div class="unchoose" index="0" @click="choosesingle($event,index,'z')">{{item.C}}</div>
            </div>
          </div>
        </div>
      </div>
      <textarea cols="20" rows="6" placeholder="我有其他话要说" style="margin-bottom: 60px "></textarea>
      <div class="mypuzzle">
        <div class="havepuzzle" style="z-index: 2" @click="subevaluate">
          <div class="newpuzzle">提交评价</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        i: 0,
        y: 0,
        z: 0,
        evaluate: [
          {
            'teacher': '张老师',
            'class': '共产党宣言',
            'pic': 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png',
            'single1': [
              {
                'sgproblem': '1.你认为老师是否关心学生',
                'A': '是',
                'B': '一般',
                'C': '否'
              },
              {
                'sgproblem': '2.你认为老师对所教科目进行辅导和温习的情况如何？',
                'A': '很熟悉',
                'B': '一般',
                'C': '不熟悉'
              },
              {
                'sgproblem': '3.是否讲脏话，打骂学生。',
                'A': '没有',
                'B': ' 生气发火时有',
                'C': '经常'
              },
              {
                'sgproblem': '4.你对老师布置的作业及批改情况满意么',
                'A': '很满意',
                'B': '一般',
                'C': '不满意'
              },
              {
                'sgproblem': '5.该老师的课堂教学以什么为主',
                'A': '课程组织合理，适合本人学习',
                'B': '教案简单，针对性不强',
                'C': '照本宣科'
              },
              {
                'sgproblem': '6.该教师上课有无不良现象，如吸烟，接打手机，迟到早退等。',
                'A': '很少',
                'B': '一般',
                'C': '经常'
              },
              {
                'sgproblem': '7.是否模范遵守师德规范，是否处处为人师表。',
                'A': '是',
                'B': '一般',
                'C': '不'
              },
              {
                'sgproblem': '8.老师对学习较差的学生。',
                'A': '和其他同学一样一视同仁',
                'B': '有点歧视',
                'C': '放任不管'
              },
              {
                'sgproblem': '9.你认为该教师的责任心。',
                'A': '责任心非常强',
                'B': '责任心一般',
                'C': '没有责任心'
              },
              {
                'sgproblem': '10.仪表形象是否符合教师的要求。',
                'A': '符合',
                'B': '一般',
                'C': '不符合'
              }
            ],
            'single2': [
              {
                'sgproblem': '1.该老师上课后，对刚学的知识是否及时布置作业巩固知识。',
                'A': '经常布置作业',
                'B': '很少布置作业',
                'C': '几乎不布置作业'
              },
              {
                'sgproblem': '2.该老师的课堂教学以什么为主',
                'A': '课程组织合理，适合本人学习',
                'B': '教案简单，针对性不强',
                'C': '照本宣科'
              },
              {
                'sgproblem': '3.教师对成绩不一样的学生评价语言都是一样的吗。',
                'A': '一样',
                'B': '偶尔一样',
                'C': '不一样'
              },
              {
                'sgproblem': '4.教学模式。',
                'A': '经常提出问题，组织学生讨论',
                'B': '偶尔提出问题，提问个别学生',
                'C': '基本上不提问题，一讲到底'
              },
              {
                'sgproblem': '5.学法指导方面。',
                'A': '能组织学生共同探索解题途径，重视总结解题方法',
                'B': '很少组织同学分析解题思路，经常给同学总结解题方法',
                'C': '不重视解题方法的总结'
              },
              {
                'sgproblem': '6.该教师上课能用教具、课件和现代信息技术进行教学吗。',
                'A': '基本上课都用教具、课件和现代信息技术进行教学',
                'B': '有时用',
                'C': '从来不用'
              },
              {
                'sgproblem': '7.该教师上课是否用普通话。',
                'A': '很标准',
                'B': '还行',
                'C': '口音太重'
              },
              {
                'sgproblem': '8.老师是否在每次上课前认真备课并有针对性？',
                'A': '有',
                'B': '一般',
                'C': '没有'
              },
              {
                'sgproblem': '9.该老师是否热爱学习，博学多才？',
                'A': '是的',
                'B': '专业知识强，不善于表达',
                'C': '经常问题目不会'
              },
              {
                'sgproblem': '10.老师能鼓励你去发现和提出问题，能以你的回答为出发点开展教学吗？',
                'A': '经常',
                'B': '有时',
                'C': '没有'
              }
            ],
            'single3': [
              {
                'sgproblem': '1.你对该教师的课堂教学感兴趣吗？',
                'A': '很感谢兴趣',
                'B': '一般',
                'C': '不感兴趣'
              },
              {
                'sgproblem': '2.对老师所教的这门课你喜欢吗？',
                'A': '喜欢',
                'B': '一般',
                'C': '不喜欢'
              },
              {
                'sgproblem': '3.提问及互动环节',
                'A': '经常',
                'B': '一般',
                'C': '没有'
              },
              {
                'sgproblem': '4.该教师的课程是否丰富且很有吸引力？',
                'A': '很丰富',
                'B': '一般',
                'C': '乏味'
              },
              {
                'sgproblem': '5.您认为课堂上的学习气氛如何。',
                'A': '很活跃',
                'B': '总体一般',
                'C': '气氛比较沉闷'
              },
              {
                'sgproblem': '6.您认为任课老师课堂的授课效果如何。',
                'A': '很好',
                'B': ' 一般',
                'C': '很差'
              },
              {
                'sgproblem': '7.您是否愿意再次上此老师的课。',
                'A': '可以',
                'B': '一般',
                'C': '不想'
              },
              {
                'sgproblem': '8.该老师的是否擅长化解沉闷消极的气氛？',
                'A': '擅长',
                'B': '一般',
                'C': '不会'
              },
              {
                'sgproblem': '9.该老师的性格？',
                'A': '乐观精力旺盛',
                'B': '一般',
                'C': '内向消极'
              },
              {
                'sgproblem': '10.老师的教学是否具有启发性？',
                'A': '让我思考深入',
                'B': '一般',
                'C': '让我怀疑人生'
              }
            ]
          },
          {
            'teacher': '陈老师',
            'class': '毛泽东语录',
            'pic': 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png',
            'single1': [
              {
                'sgproblem': '1.你认为老师是否关心学生',
                'A': '是',
                'B': '一般',
                'C': '否'
              },
              {
                'sgproblem': '2.你认为老师对所教科目进行辅导和温习的情况如何？',
                'A': '很熟悉',
                'B': '一般',
                'C': '不熟悉'
              },
              {
                'sgproblem': '3.是否讲脏话，打骂学生。',
                'A': '没有',
                'B': ' 生气发火时有',
                'C': '经常'
              },
              {
                'sgproblem': '4.你对老师布置的作业及批改情况满意么',
                'A': '很满意',
                'B': '一般',
                'C': '不满意'
              },
              {
                'sgproblem': '5.该老师的课堂教学以什么为主',
                'A': '课程组织合理，适合本人学习',
                'B': '教案简单，针对性不强',
                'C': '照本宣科'
              },
              {
                'sgproblem': '6.该教师上课有无不良现象，如吸烟，接打手机，迟到早退等。',
                'A': '很少',
                'B': '一般',
                'C': '经常'
              },
              {
                'sgproblem': '7.是否模范遵守师德规范，是否处处为人师表。',
                'A': '是',
                'B': '一般',
                'C': '不'
              },
              {
                'sgproblem': '8.老师对学习较差的学生。',
                'A': '和其他同学一样一视同仁',
                'B': '有点歧视',
                'C': '放任不管'
              },
              {
                'sgproblem': '9.你认为该教师的责任心。',
                'A': '责任心非常强',
                'B': '责任心一般',
                'C': '没有责任心'
              },
              {
                'sgproblem': '10.仪表形象是否符合教师的要求。',
                'A': '符合',
                'B': '一般',
                'C': '不符合'
              }
            ],
            'single2': [
              {
                'sgproblem': '1.该老师上课后，对刚学的知识是否及时布置作业巩固知识。',
                'A': '经常布置作业',
                'B': '很少布置作业',
                'C': '几乎不布置作业'
              },
              {
                'sgproblem': '2.该老师的课堂教学以什么为主',
                'A': '课程组织合理，适合本人学习',
                'B': '教案简单，针对性不强',
                'C': '照本宣科'
              },
              {
                'sgproblem': '3.教师对成绩不一样的学生评价语言都是一样的吗。',
                'A': '一样',
                'B': '偶尔一样',
                'C': '不一样'
              },
              {
                'sgproblem': '4.教学模式。',
                'A': '经常提出问题，组织学生讨论',
                'B': '偶尔提出问题，提问个别学生',
                'C': '基本上不提问题，一讲到底'
              },
              {
                'sgproblem': '5.学法指导方面。',
                'A': '能组织学生共同探索解题途径，重视总结解题方法',
                'B': '很少组织同学分析解题思路，经常给同学总结解题方法',
                'C': '不重视解题方法的总结'
              },
              {
                'sgproblem': '6.该教师上课能用教具、课件和现代信息技术进行教学吗。',
                'A': '基本上课都用教具、课件和现代信息技术进行教学',
                'B': '有时用',
                'C': '从来不用'
              },
              {
                'sgproblem': '7.该教师上课是否用普通话。',
                'A': '很标准',
                'B': '还行',
                'C': '口音太重'
              },
              {
                'sgproblem': '8.老师是否在每次上课前认真备课并有针对性？',
                'A': '有',
                'B': '一般',
                'C': '没有'
              },
              {
                'sgproblem': '9.该老师是否热爱学习，博学多才？',
                'A': '是的',
                'B': '专业知识强，不善于表达',
                'C': '经常问题目不会'
              },
              {
                'sgproblem': '10.老师能鼓励你去发现和提出问题，能以你的回答为出发点开展教学吗？',
                'A': '经常',
                'B': '有时',
                'C': '没有'
              }
            ],
            'single3': [
              {
                'sgproblem': '1.你对该教师的课堂教学感兴趣吗？',
                'A': '很感谢兴趣',
                'B': '一般',
                'C': '不感兴趣'
              },
              {
                'sgproblem': '2.对老师所教的这门课你喜欢吗？',
                'A': '喜欢',
                'B': '一般',
                'C': '不喜欢'
              },
              {
                'sgproblem': '3.提问及互动环节',
                'A': '经常',
                'B': '一般',
                'C': '没有'
              },
              {
                'sgproblem': '4.该教师的课程是否丰富且很有吸引力？',
                'A': '很丰富',
                'B': '一般',
                'C': '乏味'
              },
              {
                'sgproblem': '5.您认为课堂上的学习气氛如何。',
                'A': '很活跃',
                'B': '总体一般',
                'C': '气氛比较沉闷'
              },
              {
                'sgproblem': '6.您认为任课老师课堂的授课效果如何。',
                'A': '很好',
                'B': ' 一般',
                'C': '很差'
              },
              {
                'sgproblem': '7.您是否愿意再次上此老师的课。',
                'A': '可以',
                'B': '一般',
                'C': '不想'
              },
              {
                'sgproblem': '8.该老师的是否擅长化解沉闷消极的气氛？',
                'A': '擅长',
                'B': '一般',
                'C': '不会'
              },
              {
                'sgproblem': '9.该老师的性格？',
                'A': '乐观精力旺盛',
                'B': '一般',
                'C': '内向消极'
              },
              {
                'sgproblem': '10.老师的教学是否具有启发性？',
                'A': '让我思考深入',
                'B': '一般',
                'C': '让我怀疑人生'
              }
            ]
          },
          {
            'teacher': '张老师',
            'class': '马克思主义哲学',
            'pic': 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png',
            'single1': [
              {
                'sgproblem': '1.你认为老师是否关心学生',
                'A': '是',
                'B': '一般',
                'C': '否'
              },
              {
                'sgproblem': '2.你认为老师对所教科目进行辅导和温习的情况如何？',
                'A': '很熟悉',
                'B': '一般',
                'C': '不熟悉'
              },
              {
                'sgproblem': '3.是否讲脏话，打骂学生。',
                'A': '没有',
                'B': ' 生气发火时有',
                'C': '经常'
              },
              {
                'sgproblem': '4.你对老师布置的作业及批改情况满意么',
                'A': '很满意',
                'B': '一般',
                'C': '不满意'
              },
              {
                'sgproblem': '5.该老师的课堂教学以什么为主',
                'A': '课程组织合理，适合本人学习',
                'B': '教案简单，针对性不强',
                'C': '照本宣科'
              },
              {
                'sgproblem': '6.该教师上课有无不良现象，如吸烟，接打手机，迟到早退等。',
                'A': '很少',
                'B': '一般',
                'C': '经常'
              },
              {
                'sgproblem': '7.是否模范遵守师德规范，是否处处为人师表。',
                'A': '是',
                'B': '一般',
                'C': '不'
              },
              {
                'sgproblem': '8.老师对学习较差的学生。',
                'A': '和其他同学一样一视同仁',
                'B': '有点歧视',
                'C': '放任不管'
              },
              {
                'sgproblem': '9.你认为该教师的责任心。',
                'A': '责任心非常强',
                'B': '责任心一般',
                'C': '没有责任心'
              },
              {
                'sgproblem': '10.仪表形象是否符合教师的要求。',
                'A': '符合',
                'B': '一般',
                'C': '不符合'
              }
            ],
            'single2': [
              {
                'sgproblem': '1.该老师上课后，对刚学的知识是否及时布置作业巩固知识。',
                'A': '经常布置作业',
                'B': '很少布置作业',
                'C': '几乎不布置作业'
              },
              {
                'sgproblem': '2.该老师的课堂教学以什么为主',
                'A': '课程组织合理，适合本人学习',
                'B': '教案简单，针对性不强',
                'C': '照本宣科'
              },
              {
                'sgproblem': '3.教师对成绩不一样的学生评价语言都是一样的吗。',
                'A': '一样',
                'B': '偶尔一样',
                'C': '不一样'
              },
              {
                'sgproblem': '4.教学模式。',
                'A': '经常提出问题，组织学生讨论',
                'B': '偶尔提出问题，提问个别学生',
                'C': '基本上不提问题，一讲到底'
              },
              {
                'sgproblem': '5.学法指导方面。',
                'A': '能组织学生共同探索解题途径，重视总结解题方法',
                'B': '很少组织同学分析解题思路，经常给同学总结解题方法',
                'C': '不重视解题方法的总结'
              },
              {
                'sgproblem': '6.该教师上课能用教具、课件和现代信息技术进行教学吗。',
                'A': '基本上课都用教具、课件和现代信息技术进行教学',
                'B': '有时用',
                'C': '从来不用'
              },
              {
                'sgproblem': '7.该教师上课是否用普通话。',
                'A': '很标准',
                'B': '还行',
                'C': '口音太重'
              },
              {
                'sgproblem': '8.老师是否在每次上课前认真备课并有针对性？',
                'A': '有',
                'B': '一般',
                'C': '没有'
              },
              {
                'sgproblem': '9.该老师是否热爱学习，博学多才？',
                'A': '是的',
                'B': '专业知识强，不善于表达',
                'C': '经常问题目不会'
              },
              {
                'sgproblem': '10.老师能鼓励你去发现和提出问题，能以你的回答为出发点开展教学吗？',
                'A': '经常',
                'B': '有时',
                'C': '没有'
              }
            ],
            'single3': [
              {
                'sgproblem': '1.你对该教师的课堂教学感兴趣吗？',
                'A': '很感谢兴趣',
                'B': '一般',
                'C': '不感兴趣'
              },
              {
                'sgproblem': '2.对老师所教的这门课你喜欢吗？',
                'A': '喜欢',
                'B': '一般',
                'C': '不喜欢'
              },
              {
                'sgproblem': '3.提问及互动环节',
                'A': '经常',
                'B': '一般',
                'C': '没有'
              },
              {
                'sgproblem': '4.该教师的课程是否丰富且很有吸引力？',
                'A': '很丰富',
                'B': '一般',
                'C': '乏味'
              },
              {
                'sgproblem': '5.您认为课堂上的学习气氛如何。',
                'A': '很活跃',
                'B': '总体一般',
                'C': '气氛比较沉闷'
              },
              {
                'sgproblem': '6.您认为任课老师课堂的授课效果如何。',
                'A': '很好',
                'B': ' 一般',
                'C': '很差'
              },
              {
                'sgproblem': '7.您是否愿意再次上此老师的课。',
                'A': '可以',
                'B': '一般',
                'C': '不想'
              },
              {
                'sgproblem': '8.该老师的是否擅长化解沉闷消极的气氛？',
                'A': '擅长',
                'B': '一般',
                'C': '不会'
              },
              {
                'sgproblem': '9.该老师的性格？',
                'A': '乐观精力旺盛',
                'B': '一般',
                'C': '内向消极'
              },
              {
                'sgproblem': '10.老师的教学是否具有启发性？',
                'A': '让我思考深入',
                'B': '一般',
                'C': '让我怀疑人生'
              }
            ]
          }
        ],
        xs: {'1': {}, '2': {}, '3': {}, '4': {}, '5': {}},
        linkerimg: [{src: require('../common/image/one.png')}, {src: require('../common/image/half.png')}, {src: require('../common/image/zero.png')}]
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      subevaluate(){
        this.$confirm('确认提交么？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            message: '提交成功',
            type: 'success',
            duration: '1000'
          })
          history.go(-1)
        })
      },
      backone(){
        window.scrollTo(0, 249)
      },
      backtwo(){
        window.scrollTo(0, 250 + document.getElementsByClassName('oneheight')[0].clientHeight - document.getElementById('attitude').clientHeight - 1)
      },
      backthree(){
        window.scrollTo(0, 250 + document.getElementsByClassName('oneheight')[0].clientHeight + document.getElementsByClassName('oneheight')[1].clientHeight - document.getElementById('attitude').clientHeight - 1)
      },
      handleScroll () {
        if (window.scrollY > 250) {
          document.getElementById('attitude').style.position = 'fixed'
          document.getElementById('attitude').style.top = '30px'
        }
        if (window.scrollY > (250 + document.getElementsByClassName('oneheight')[0].clientHeight)) {
          document.getElementById('classstyle').style.position = 'fixed'
          document.getElementById('classstyle').style.top = '83px'
        }
        if (window.scrollY > (250 + document.getElementsByClassName('oneheight')[0].clientHeight + document.getElementsByClassName('oneheight')[1].clientHeight - document.getElementById('attitude').clientHeight)) {
          document.getElementById('atmosphere').style.position = 'fixed'
          document.getElementById('atmosphere').style.top = '136px'
        }
        if (window.scrollY < (250 + document.getElementsByClassName('oneheight')[0].clientHeight + document.getElementsByClassName('oneheight')[1].clientHeight - document.getElementById('attitude').clientHeight)) {
          document.getElementById('atmosphere').style.position = 'relative'
          document.getElementById('atmosphere').style.top = 0
        }
        if (window.scrollY < (250 + document.getElementsByClassName('oneheight')[0].clientHeight - document.getElementById('attitude').clientHeight)) {
          document.getElementById('classstyle').style.position = 'relative'
          document.getElementById('classstyle').style.top = 0
        }
        if (window.scrollY < 250) {
          document.getElementById('attitude').style.position = 'relative'
          document.getElementById('attitude').style.top = 0
        }
      },
      choosesingle(event, index, num){
        this[num] = 0
        if (event.target.className === 'unchoose') {
          for (let i = 0; i < event.target.parentNode.children.length; i++) {
            event.target.parentNode.children[i].className = 'unchoose'
          }
          event.target.className = 'choose'
        } else {
          event.target.className = 'unchoose'
        }
        for (let i of event.target.parentNode.parentNode.parentNode.querySelectorAll('.choose')) {
          this[num] += parseFloat(i.getAttribute('index'))
        }
        for (let item of document.getElementsByClassName(num + 'img')) {
          item.src = this.linkerimg[2].src
        }
        this.xnum(parseFloat(this[num]) / 2, num)
      },
      xnum(obj, type){
        if (obj >= 1) {
          for (let item = 0; item < 5; item++) {
            if (item >= parseInt(obj)) {
              break
            }
            document.getElementsByClassName(type + 'img')[item].src = this.linkerimg[0].src
          }
        }
        if (obj >= (parseInt(obj) + 0.5)) {
          document.getElementsByClassName(type + 'img')[parseInt(obj)].src = this.linkerimg[1].src
        }
      }
    },
    created(){
      this.evaluate = this.evaluate[this.$route.query.index]
      document.body.style.backgroundColor = 'white'
      this.$nextTick(() => {
        this.i = this.evaluate.attitude
        this.y = this.evaluate.style
        this.z = this.evaluate.atmosphere
        this.xnum(this.i, 'i')
        this.xnum(this.y, 'y')
        this.xnum(this.z, 'z')
      })
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  .teahead
    height 100px
    width 100px
    border-radius 50%
    margin 30px auto
    overflow hidden

  .teaname
    font-size 30px
    margin 18px auto
    font-weight 300
    width 100%
    text-align center

  .teaclass
    color rgba(7, 17, 27, 0.7)
    text-align center
    width 100%

  .espact
    background-color white
    position relative
    left 0
    top 0
    width 100%
    margin 20px auto
    z-index 1
    padding 10px 0
    border-bottom 1px solid rgba(7, 17, 27, 0.1)
    div
      display inline-block
    .evaitem
      margin-left 40px
      font-size 18px
      color rgba(7, 17, 27, 0.4)
      display inline-block
    .t-score
      width 30px
      display inline-block
      text-align center
      margin-left 20px

  textarea
    margin 0 10%
    width 75%
    background: rgba(7, 17, 27, 0.05)
    border-radius 5px
    line-height 28px
    padding 2%

  .subeva
    width 90%
    margin 0 auto 10px
    background-color #8b0000
    height 50px
    border-radius 5px
    text-align center
    line-height 50px
    color white
    font-size 30px
    position fixed
    bottom 10px
    left 5%

  .words
    width 90%
    margin 0 auto
    .words-title
      margin 40px 20px 20px
      color rgba(7, 17, 27, 0.5)
      font-size 26px
    .words-main
      width 100%
      margin 20px 0 0
      height 30px
      line-height 30px
      border-bottom 1px solid rgba(7, 17, 27, 0.1)
      overflow: hidden; /*超出部分隐藏*/
      white-space: nowrap; /*不换行*/
      text-overflow: ellipsis;

  /*超出部分文字以...显示*/
</style>

