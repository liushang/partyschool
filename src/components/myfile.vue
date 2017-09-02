<template>
  <div class="myfile">
    <div class="tbl">
      <span class="tbl-item"><router-link to="/myfile/filenew" replace>新的文件</router-link></span>
      <span class="tbl-item"><router-link to="/myfile/filedone" replace>已批复</router-link></span>
      <span class="tbl-item"><router-link to="/myfile/filenot" replace>未批复</router-link></span>
      <span class="tbl-item"><router-link to="/myfile/filemy" replace>我的文件</router-link></span>
    </div>
    <li class="file_li" v-for="(i,index) in file"
        @click="showclass('/myfile/filedetail',i.id)">
      <div class="file_all">
        <div class="file-sin file-from">
          <div>{{i.from}}</div>
          <div class="short-tip" style="color:red">{{i.short}}</div>
        </div>
        <div class="file-sin file-title">{{i.title}}</div>
        <div class="file-sin file-time">
          <div>{{i.time}}</div>
          <div class="short-tip short-state" :class="[{fstate0:(i.look===0)},{fstate1:(i.mestate===1)},{fstate2:(i.mestate===-1)},{fstate3:(i.look===1&&i.mestate===0)}]">{{i.look===0?'未读':(i.mestate===0?'已读':(i.mestate===1?'已同意':'已拒绝'))}}</div>
        </div>
      </div>
    </li>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        files: {
          'files': [
            {
              'id': 0,
              'headimg': '',
              'title': '校园基础建设问题汇总',
              'time': '14:04',
              'short': '紧急',
              'mestate': 0,
              'look': 0,
              'from': '文化部',
              'to': [{
                'part': '科研处',
                'state': 0
              }, {
                'part': '学员工作处',
                'state': 0
              }, {
                'part': '组织人事',
                'state': 1
              }, {
                'part': '行政处',
                'state': 0
              }, {
                'part': '经管处',
                'state': 1
              }]
            },
            {
              'id': 1,
              'headimg': '',
              'title': '关于XXX同志任职的通知',
              'time': '16:24',
              'short': '三天内',
              'mestate': 1,
              'look': 1,
              'from': '办公室',
              'to': [{
                'part': '科研处',
                'state': 1
              }, {
                'part': '学员工作处',
                'state': 1
              }, {
                'part': '组织人事',
                'state': 0
              }, {
                'part': '行政处',
                'state': 1
              }, {
                'part': '经管处',
                'state': -1
              }]
            },
            {
              'id': 2,
              'headimg': '',
              'title': '新思维、新风向演讲比赛的通知批示',
              'time': '17:54',
              'short': '9月前',
              'mestate': 0,
              'look': 1,
              'from': '文化部',
              'to': [{
                'part': '科研处',
                'state': 1
              }, {
                'part': '学员工作处',
                'state': 1
              }, {
                'part': '组织人事',
                'state': 0
              }, {
                'part': '行政处',
                'state': 0
              }, {
                'part': '经管处',
                'state': 1
              }]
            },
            {
              'id': 3,
              'headimg': '',
              'title': '关于南湖大学十月一日放假通知',
              'time': '17:54',
              'short': '9月前',
              'mestate': 1,
              'look': 1,
              'from': '教务处',
              'to': [{
                'part': '科研处',
                'state': 1
              }, {
                'part': '学员工作处',
                'state': 1
              }, {
                'part': '组织人事',
                'state': 0
              }, {
                'part': '行政处',
                'state': 0
              }, {
                'part': '经管处',
                'state': 1
              }]
            },
            {
              'id': 4,
              'headimg': '',
              'title': '关于举办社团文化周的通知',
              'time': '17:54',
              'short': '9月前',
              'mestate': -1,
              'look': 1,
              'from': '教务处',
              'to': [{
                'part': '科研处',
                'state': 1
              }, {
                'part': '学员工作处',
                'state': 1
              }, {
                'part': '组织人事',
                'state': 0
              }, {
                'part': '行政处',
                'state': 0
              }, {
                'part': '经管处',
                'state': 1
              }]
            },
            {
              'id': 5,
              'headimg': '',
              'title': '新思维、新风向演讲比赛的通知批示',
              'time': '17:54',
              'short': '本周五前',
              'mestate': -1,
              'look': 1,
              'from': '文化部',
              'to': [{
                'part': '科研处',
                'state': 1
              }, {
                'part': '学员工作处',
                'state': 1
              }, {
                'part': '组织人事',
                'state': 0
              }, {
                'part': '行政处',
                'state': 0
              }, {
                'part': '经管处',
                'state': 1
              }]
            },
            {
              'id': 6,
              'headimg': '',
              'title': '新思维、新风向演讲比赛的通知批示',
              'time': '17:54',
              'short': '9月前',
              'mestate': 0,
              'look': 1,
              'from': '办公室',
              'to': [{
                'part': '科研处',
                'state': 1
              }, {
                'part': '学员工作处',
                'state': 1
              }, {
                'part': '组织人事',
                'state': 0
              }, {
                'part': '行政处',
                'state': 0
              }, {
                'part': '经管处',
                'state': 1
              }]
            },
            {
              'id': 7,
              'headimg': '',
              'title': '新思维、新风向演讲比赛的通知批示',
              'time': '17:54',
              'short': '9月前',
              'mestate': -1,
              'look': 1,
              'from': '文化部',
              'to': [{
                'part': '科研处',
                'state': 1
              }, {
                'part': '学员工作处',
                'state': 1
              }, {
                'part': '组织人事',
                'state': 0
              }, {
                'part': '行政处',
                'state': 0
              }, {
                'part': '经管处',
                'state': 1
              }]
            }]
        },
        file: {}
      }
    },
    created(){
      document.body.style.backgroundColor = 'white'
      this.stl()
    },
    watch: {
      '$route': 'stl'
    },
    methods: {
      showclass(name, index){
        console.log(index)
        this.$router.push({
          path: name,
          query: {index: index}
        })
        document.body.style.background = 'white'
      },
      stl(){
        switch (this.$route.path) {
          case '/myfile/filenew':
            this.file = this.files.files
            break
          case '/myfile/filedone':
            this.file = this.files.files.filter((item) => item.mestate !== 0)
            break
          case '/myfile/filenot':
            this.file = this.files.files.filter((item) => item.mestate === 0)
            break
          case '/myfile/filemy':
            this.file = this.files.files.filter((item) => item.from === '办公室')
            break
        }
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import '../common/css/myfile.styl'
</style>
