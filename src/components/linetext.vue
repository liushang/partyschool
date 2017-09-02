<template>
  <div class="linetext">
    <div class="text">
      <ul>
        <li v-for="(item,index) in linetext" @click="showRouter('linetext/textdetail',item.textname,index)">
          <span>{{item.textname}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        linetext: [
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
        ]
      }
    },
    created(){
      document.body.style.backgroundColor = 'rgba(7, 17, 27, 0.1)'
    },
    methods: {
      showRouter(name, obj, index){
        this.$router.push({
          path: name,
          query: {index: index}
        })
        this.$parent.title = obj
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .linetext
    height 100%
    overflow hidden
    .text
      height 100%
      position relative
      top -50px
      overflow hidden
      ul
        padding-top 80px
        li
          margin 0 auto 20px
          width 80%
          height 42px
          background white
          box-shadow: 2px 2px 4px rgba(7, 17, 27, 0.4)
          line-height 42px
          border-radius 5px
          span
            display inline-block
            &:first-child
              width 70%
              padding-left 30px
</style>
