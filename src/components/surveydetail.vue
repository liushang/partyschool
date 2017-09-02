<template>
  <div class="textdetail">
    <div class="textcontent">
      <div class="singlechoose" v-for="(item,index) in textdetail.singlechoose.list">
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
      <div class="shortanswer" v-for="(item,index) in textdetail.shortanswer.list">
        <div class="problem">{{item.saproblem}}</div>
        <textarea class="saarea" @change="answerproblem($event, index)" placeholder="  我的答案："></textarea>
      </div>
    </div>
    <div class="mypuzzle">
      <div class="havepuzzle">
        <el-button class="newpuzzle" @click="subsurvey" id="surveysub" style="line-height: 30px">提交问卷</el-button>
      </div>
    </div>
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
      },
      subsurvey(){
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
          this.$router.push('/learn')
        })
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  #surveysub
    &:hover
      color: white
      border-color: white
      outline: 0
    &:active
      color: white
      border-color: white
      outline: 0

</style>
