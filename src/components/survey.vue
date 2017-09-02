<template>
<div class="survey"><div class="linetext">
  <div class="text">
    <ul>
      <li v-for="(item,index) in survey" @click="showRouter('survey/surveydetail',item.textname,index)">
        <span>{{item.textname}}</span>
      </li>
    </ul>
  </div>
</div></div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        survey: [
          {
            'textname': '马克思主义课程',
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

</style>
