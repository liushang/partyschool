<template>
  <div class="textdetail">
    <div class="textheader">
      <div class="typenum">
        <div class="texttype">{{texttype}}</div>
        <div class="textnum">已做（{{donum}}）/总题（{{textdetail.textnum}}）</div>
      </div>
      <div class="texttime">{{textdetail.resttime}}</div>
    </div>
    <div class="textcontent">
      <div class="singlechoose" v-for="(item,index) in textdetail.singlechoose.list"
           v-show="problemtype==0&&index==problemindex">
        <div class="problem">{{item.sgproblem}}</div>
        <div class="choosees">
          <div class="unchoose" @click="choosesingle($event,index)">{{item.A}}</div>
          <div class="unchoose" @click="choosesingle($event,index)">{{item.B}}</div>
          <div class="unchoose" @click="choosesingle($event,index)">{{item.C}}</div>
          <div class="unchoose" @click="choosesingle($event,index)">{{item.D}}</div>
        </div>
      </div>
      <div class="doublechoose" v-for="(item,index) in textdetail.doublechoose.list"
           v-show="problemtype==1&&index==problemindex">
        <div class="problem">{{item.dbproblem}}</div>
        <div class="choosees">
          <div class="unchoose" @click="choosedouble($event, index)">{{item.A}}</div>
          <div class="unchoose" @click="choosedouble($event, index)">{{item.B}}</div>
          <div class="unchoose" @click="choosedouble($event, index)">{{item.C}}</div>
          <div class="unchoose" @click="choosedouble($event, index)">{{item.D}}</div>
          <div class="unchoose" @click="choosedouble($event, index)">{{item.E}}</div>
        </div>
      </div>
      <div class="shortanswer" v-for="(item,index) in textdetail.shortanswer.list"
           v-show="problemtype==2&&index==problemindex">
        <div class="problem">{{item.saproblem}}</div>
        <textarea class="saarea" @change="answerproblem($event, index)" placeholder="  我的答案："></textarea>
      </div>
    </div>
    <div class="textcount">
      <div class="text-item">
        <div class="item-p" @click="lastproblem">上一题</div>
      </div>
      <div class="text-item">
        <div class="item-p" @click="showcard">{{currentindex}}/{{textdetail.textnum}}</div>
      </div>
      <div class="text-item">
        <div class="item-p" @click="nextproblem()">下一题</div>
      </div>
    </div>
    <div class="answercard" v-show="answercard">
      <div class="cardheader">
        <div class="item xdown" @click="showcard">
          <div class="x">x</div>
        </div>
        <div class="item headercard">答题卡</div>
        <div class="item resttime">{{textdetail.resttime}}</div>
      </div>
      <div class="cardmain">
        <div class="cardname">{{$parent.title}}</div>
        <div class="singlechoose">
          <div class="problemtype">单选题</div>
          <div class="problemindex singlecircle" v-for="(item,index) in textdetail.singlechoose.list"
               @click="directsingle(index)">{{index+1}}
          </div>
        </div>
        <div class="doublechoose">
          <div class="problemtype">多选题</div>
          <div class="problemindex doublecircle" v-for="(item,index) in textdetail.doublechoose.list"
               @click="directdouble(index)">{{index+1}}
          </div>
        </div>
        <div class="shortanswer">
          <div class="problemtype">简答题</div>
          <div class="problemindex shortcircle" v-for="(item,index) in textdetail.shortanswer.list"
               @click="directshort(index)">{{index+1}}
          </div>
        </div>
      </div>
      <div class="cardsubmit">提交答卷</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        textdetail: [
          {
            'textname': '入党积极分子结业考试',
            'resttime': '1:50:00',
            'textnum': 26,
            'singlechoose': {
              'time': '20min',
              'list': [
                {
                  'sgproblem': '1.中国共产党党员是中国工人阶级的有共产主义觉悟的_ _ _ _。',
                  'A': 'A.先进人士',
                  'B': 'B.先锋战士',
                  'C': 'C.知识分子',
                  'D': 'D.工农阶级'
                },
                {
                  'sgproblem': '2.中国共产党党员是中国工人阶级的有共产主义觉悟的_ _ _ _。',
                  'A': 'A.先进人士',
                  'B': 'B.先锋战士',
                  'C': 'C.知识分子',
                  'D': 'D.工农阶级'
                },
                {
                  'sgproblem': '3.中国共产党党员是中国工人阶级的有共产主义觉悟的_ _ _ _。',
                  'A': 'A.先进人士',
                  'B': 'B.先锋战士',
                  'C': 'C.知识分子',
                  'D': 'D.工农阶级'
                },
                {
                  'sgproblem': '4.中国共产党党员是中国工人阶级的有共产主义觉悟的_ _ _ _。',
                  'A': 'A.先进人士',
                  'B': 'B.先锋战士',
                  'C': 'C.知识分子',
                  'D': 'D.工农阶级'
                },
                {
                  'sgproblem': '5.中国共产党党员是中国工人阶级的有共产主义觉悟的_ _ _ _。',
                  'A': 'A.先进人士',
                  'B': 'B.先锋战士',
                  'C': 'C.知识分子',
                  'D': 'D.工农阶级'
                },
                {
                  'sgproblem': '6.中国共产党党员是中国工人阶级的有共产主义觉悟的_ _ _ _。',
                  'A': 'A.先进人士',
                  'B': 'B.先锋战士',
                  'C': 'C.知识分子',
                  'D': 'D.工农阶级'
                },
                {
                  'sgproblem': '7.中国共产党党员是中国工人阶级的有共产主义觉悟的_ _ _ _。',
                  'A': 'A.先进人士',
                  'B': 'B.先锋战士',
                  'C': 'C.知识分子',
                  'D': 'D.工农阶级'
                },
                {
                  'sgproblem': '8.中国共产党党员是中国工人阶级的有共产主义觉悟的_ _ _ _。',
                  'A': 'A.先进人士',
                  'B': 'B.先锋战士',
                  'C': 'C.知识分子',
                  'D': 'D.工农阶级'
                },
                {
                  'sgproblem': '9.中国共产党党员是中国工人阶级的有共产主义觉悟的_ _ _ _。',
                  'A': 'A.先进人士',
                  'B': 'B.先锋战士',
                  'C': 'C.知识分子',
                  'D': 'D.工农阶级'
                },
                {
                  'sgproblem': '10.中国共产党党员是中国工人阶级的有共产主义觉悟的_ _ _ _。',
                  'A': 'A.先进人士',
                  'B': 'B.先锋战士',
                  'C': 'C.知识分子',
                  'D': 'D.工农阶级'
                }
              ],
              'num': 10
            },
            'doublechoose': {
              'time': '30min',
              'list': [
                {
                  'dbproblem': '1.消除贫困，实现共同富裕是_ _',
                  'A': 'A.社会主义建设的基本要求',
                  'B': 'B.社会主义本质的要求',
                  'C': 'C.社会主义优越性的体现',
                  'D': 'D.社会主义市场经济的要求',
                  'E': 'E.社会主义的根本原则和本质特征'
                },
                {
                  'dbproblem': '2.消除贫困，实现共同富裕是_ _',
                  'A': 'A.社会主义建设的基本要求',
                  'B': 'B.社会主义本质的要求',
                  'C': 'C.社会主义优越性的体现',
                  'D': 'D.社会主义市场经济的要求',
                  'E': 'E.社会主义的根本原则和本质特征'
                },
                {
                  'dbproblem': '3.消除贫困，实现共同富裕是_ _',
                  'A': 'A.社会主义建设的基本要求',
                  'B': 'B.社会主义本质的要求',
                  'C': 'C.社会主义优越性的体现',
                  'D': 'D.社会主义市场经济的要求',
                  'E': '社会主义的根本原则和本质特征'
                },
                {
                  'dbproblem': '4.消除贫困，实现共同富裕是_ _',
                  'A': 'A.社会主义建设的基本要求',
                  'B': 'B.社会主义本质的要求',
                  'C': 'C.社会主义优越性的体现',
                  'D': 'D.社会主义市场经济的要求',
                  'E': 'E.社会主义的根本原则和本质特征'
                },
                {
                  'dbproblem': '5.消除贫困，实现共同富裕是_ _',
                  'A': 'A.社会主义建设的基本要求',
                  'B': 'B.社会主义本质的要求',
                  'C': 'C.社会主义优越性的体现',
                  'D': 'D.社会主义市场经济的要求',
                  'E': 'E.社会主义的根本原则和本质特征'
                },
                {
                  'dbproblem': '6.消除贫困，实现共同富裕是_ _',
                  'A': 'A.社会主义建设的基本要求',
                  'B': 'B.社会主义本质的要求',
                  'C': 'C.社会主义优越性的体现',
                  'D': 'D.社会主义市场经济的要求',
                  'E': 'E.社会主义的根本原则和本质特征'
                },
                {
                  'dbproblem': '7.消除贫困，实现共同富裕是_ _',
                  'A': 'A.社会主义建设的基本要求',
                  'B': 'B.社会主义本质的要求',
                  'C': 'C.社会主义优越性的体现',
                  'D': 'D.社会主义市场经济的要求',
                  'E': 'E.社会主义的根本原则和本质特征'
                },
                {
                  'dbproblem': '8.消除贫困，实现共同富裕是_ _',
                  'A': 'A.社会主义建设的基本要求',
                  'B': 'B.社会主义本质的要求',
                  'C': 'C.社会主义优越性的体现',
                  'D': 'D.社会主义市场经济的要求',
                  'E': 'E.社会主义的根本原则和本质特征'
                },
                {
                  'dbproblem': '9.消除贫困，实现共同富裕是_ _',
                  'A': 'A.社会主义建设的基本要求',
                  'B': 'B.社会主义本质的要求',
                  'C': 'C.社会主义优越性的体现',
                  'D': 'D.社会主义市场经济的要求',
                  'E': 'E.社会主义的根本原则和本质特征'
                },
                {
                  'dbproblem': '10.消除贫困，实现共同富裕是_ _',
                  'A': 'A.社会主义建设的基本要求',
                  'B': 'B.社会主义本质的要求',
                  'C': 'C.社会主义优越性的体现',
                  'D': 'D.社会主义市场经济的要求',
                  'E': 'E.社会主义的根本原则和本质特征'
                },
                {
                  'dbproblem': '11.消除贫困，实现共同富裕是_ _',
                  'A': 'A.社会主义建设的基本要求',
                  'B': 'B.社会主义本质的要求',
                  'C': 'C.社会主义优越性的体现',
                  'D': 'D.社会主义市场经济的要求',
                  'E': 'E.社会主义的根本原则和本质特征'
                }
              ],
              'num': 11
            },
            'shortanswer': {
              'time': '60min',
              'list': [
                {
                  'saproblem': '如何成为党的积极分子'
                },
                {
                  'saproblem': '你打算如何为党贡献自己的一份力'
                },
                {
                  'saproblem': '入党的手续有哪些'
                },
                {
                  'saproblem': '党员的基本素养是？'
                },
                {
                  'saproblem': '党员的基本职责？'
                }
              ],
              'num': 5
            }
          }
        ],
        problemtype: 0,
        problemindex: 0,
        donum: 0,
        answercard: false
      }
    },
    computed: {
      texttype: function () {
        switch (this.problemtype) {
          case 0:
            return '单选题'
          case 1:
            return '多选题'
          case 2:
            return '简答题'
        }
      },
      currentindex: function () {
        let num = 0
        for (let i = 0; i < this.problemtype; i++) {
          num = num + this.textdetail[this.classMap[i]].list.length
        }
        return num + this.problemindex + 1
      }
    },
    created(){
      this.textdetail = this.textdetail[this.$route.query.index]
      document.body.style.backgroundColor = 'white'
      this.classMap = ['singlechoose', 'doublechoose', 'shortanswer']
    },
    methods: {
      choosesingle(event, index){
        if (event.target.className === 'unchoose') {
          for (let i = 0; i < event.target.parentNode.children.length; i++) {
            event.target.parentNode.children[i].className === 'choose' ? this.donum-- : ''
            event.target.parentNode.children[i].className = 'unchoose'
          }
          event.target.className = 'choose'
          document.querySelectorAll('.singlecircle')[index].style.backgroundColor = 'rgba(7,17,27,0.4)'
          this.donum++
        } else {
          event.target.className = 'unchoose'
          document.querySelectorAll('.singlecircle')[index].style.backgroundColor = ''
          this.donum--
        }
      },
      choosedouble(event, index){
        let y = 0
        for (let i = 0; i < event.target.parentNode.children.length; i++) {
          event.target.parentNode.children[i].className === 'choose' ? y++ : ''
        }
        if (event.target.className === 'unchoose') {
          y === 0 ? this.donum++ : ''
          event.target.className = 'choose'
          document.querySelectorAll('.doublecircle')[index].style.backgroundColor = 'rgba(7,17,27,0.4)'
        } else {
          y === 1 ? this.donum-- : ''
          event.target.className = 'unchoose'
          document.querySelectorAll('.doublecircle')[index].style.backgroundColor = ''
        }
      },
      answerproblem(event, index){
        console.log(document.getElementsByClassName('saarea')[index].value)
//        console.log(event.taget.value) 为什么无效
        if (document.getElementsByClassName('saarea')[index].value !== '') {
          this.donum++
          document.querySelectorAll('.shortcircle')[index].style.backgroundColor = 'rgba(7,17,27,0.4)'
        } else {
          document.querySelectorAll('.shortcircle')[index].style.backgroundColor = ''
        }
      },
      lastproblem(){
        if (this.problemtype === 0 && this.problemindex === 0) {
          this.problemtype === 0
          this.problemindex === 0
        } else if (this.problemtype > 0 && this.problemindex === 0) {
          this.problemtype--
          this.problemindex = this.textdetail[this.classMap[this.problemtype]].list.length - 1
        } else {
          this.problemindex--
        }
      },
      showcard(){
        this.answercard = !this.answercard
      },
      xdown(){
        this.answercard = false
      },
      nextproblem(){
        if (this.problemtype === 2 && this.problemindex === this.textdetail[this.classMap[this.problemtype]].list.length - 1) {
          this.problemtype === 2
          this.problemindex === this.textdetail[this.classMap[this.problemtype]].list.length
        } else if (this.problemtype !== 2 && this.problemindex === this.textdetail[this.classMap[this.problemtype]].list.length - 1) {
          this.problemtype++
          this.problemindex = 0
        } else {
          this.problemindex++
        }
      },
      directsingle(index){
        console.log(index)
        this.xdown()
        this.problemtype = 0
        this.problemindex = index
      },
      directdouble(index){
        this.problemtype = 1
        this.problemindex = index
        this.xdown()
      },
      directshort(index){
        this.problemtype = 2
        this.problemindex = index
        this.xdown()
      }
    },
    beforeRouteLeave (to, from, next) {
      this.$parent.title = ''
      next()
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .textdetail /*  background white
  height 100%*/
    .textheader
      width 80%
      margin 20px auto 0
      background-color gainsboro
      text-align center
      line-height 30px
      overflow hidden
      border-radius 8px
      padding 5px 10px
      .typenum
        float left
        width 50%
        color white
        .texttype
          height 30px
        .textnum
          height 30px
      .texttime
        float left
        width 50%
        line-height 60px
        color red
        font-size 30px
    .textcontent
      margin 20px 20px 60px
      .problem
        width 80%
        font-size 20px
        line-height 40px
        padding-bottom 24px
        border-bottom 1px dashed
        margin 0 auto
      .choosees
        margin-top 40px
        .unchoose
          width 80%
          padding 2% 10%
          border 1px solid white
          margin 20px 0
          font-size 18px
        .choose
          width 80%
          padding 2% 10%
          border 1px solid red
          margin 20px 0
          font-size 18px
      .saarea
        display block
        width 90%
        height 300px
        margin 30px auto 0
        border-radius 10px
        padding 3% 2%
    .textcount
      position fixed
      left 0
      bottom 0
      height 56px
      width 100%
      background #9b2024
      display flex
      z-index 100
      .text-item
        font-size 14px
        color white
        flex 1
        text-align center
        line-height 30px
        .item-p
          padding-top 20px
          margin-top 10px
        &:first-child
          .item-p
            background url('../common/image/left-arr.png') no-repeat center top
        &:nth-child(2)
          .item-p
            margin-top 2px
            padding-top 32px
            background url('../common/image/list.png') no-repeat center top
        &:last-child
          .item-p
            background url('../common/image/right-arr.png') no-repeat center top
    .answercard
      height 100%
      background white
      width 100%
      position fixed
      z-index 101
      left 0
      top 0
      .cardheader
        height 50px
        width 100%
        font-size 26px
        background #8b0000
        .item
          width 33%
          float left
          text-align center
          line-height 50px
          color white
        .xdown
          .x
            line-height 20px
            margin 12px auto
            height 25px
            width 25px
            border 1px solid white
            border-radius 50%
      .cardmain
        font-size 26px
        line-height 36px
        width 90%
        margin 0 auto 60px
        div
          font-size 18px
          line-height 40px
          .problemtype
            border-bottom 1px dashed rgba(7, 17, 27, 0.5)
            padding 10px 0
          .problemindex
            width 40px
            height 40px
            display inline-block
            margin 4px
            border-radius 50%
            border 1px solid rgba(7, 17, 27, 0.5)
            text-align center
        .cardname
          font-size 20px
          padding 20px 0
          border-bottom 1px dashed rgba(7, 17, 27, 0.5)
          font-weight 700
      .cardsubmit
        position absolute
        bottom 0
        left 0
        height 50px
        width 100%
        font-size 28px
        line-height 50px
        text-align center
        background #8b0000
        color white
</style>
