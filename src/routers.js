// import routerbar from '@/components/routerbar/routerbar'
import learn from '@/components/learn'
import news from '@/components/news'
import header from '@/components/header/header'
import headerwrite from '@/components/header/header-write'
import headernull from '@/components/header/header-null'
// import headerdone from '@/components/header/header-done'
// import headerbegin from '@/components/header/header-begin'
import headerpg from '@/components/header/header-pg'
import routerbar from '@/components/routerbar'
import pressdetail from '@/components/pressdetail'
import person from '@/components/person'
import press from '@/components/press'
import notice from '@/components/notice'
import micoclass from '@/components/micoclass'
import schedule from '@/components/schedule'
import classdetail from '@/components/classdetail'
import myfile from '@/components/myfile'
import filedetail from '@/components/filedetail'
import mypuzzle from '@/components/mypuzzle'
import mynotes from '@/components/mynotes'
import myleave from '@/components/myleave'
import summary from '@/components/summary'
import address from '@/components/addresslist'
import addressdetail from '@/components/addressdetail'
import uppassword from '@/components/uppassword'
import upphone from '@/components/upphone'
import perinfo from '@/components/perinfo'
import index from '@/components/index'
import evaluate from '@/components/evaluate'
import evadetail from '@/components/evadetail'
import linework from '@/components/linework/'
import studentswork from '@/components/studentswork'
import workdetail from '@/components/workdetail'
import linetext from '@/components/linetext'
import textdetail from '@/components/textdetail'
import survey from '@/components/survey'
import surveydetail from '@/components/surveydetail'
import material from '@/components/material'
import linepuzzle from '@/components/linepuzzle'
import leavelist from '@/components/leavelist'
import note from '@/components/note'
import login from '@/components/login'
import activate from '@/components/activate'
import setpassword from '@/components/setpassword'
import entry from '@/components/entry'
import part from '@/components/part'
import teainfo from '@/components/teainfo'
import attend from '@/components/attend'
import businessleave from '@/components/businessleave'
import talk from '@/components/talk'
import puzzledet from '@/components/puzzledet'
import writepuzzle from '@/components/writepuzzle'
import takepic from '@/components/takepic'
const routes = [
  {path: '/entry', components: {default: entry}},
  {path: '/part', name: '南湖大学', components: {default: part, h: headernull}},
  {path: '/login', components: {default: login, h: headernull}}, {
    path: '/activate',
    components: {default: activate, h: header}
  }, {
    path: '/setpassword',
    components: {default: setpassword, h: header}
  }, {path: '/', redirect: '/entry'}, {path: '/index', components: {default: index, h: header, b: routerbar}},
  {
    path: '/learn',
    name: '在线学习',
    components: {default: learn, h: header, b: routerbar}
  }, {
    path: '/news',
    components: {default: news, h: header, b: routerbar},
    children: [{path: '/', redirect: 'press'}, {
      path: 'press',
      name: '新闻',
      components: {default: press, h: header, b: routerbar}
    }, {
      path: 'notice',
      name: '通知',
      components: {default: notice, h: header, b: routerbar}
    }, {
      path: 'micoclass',
      name: '微课堂',
      components: {default: micoclass, h: header, b: routerbar}
    }]
  }, {
    path: '/businessleave',
    name: '事务申请',
    components: {default: businessleave, h: header},
    children: [{path: '/', redirect: 'tbusiness'}, {
      path: 'tbusiness',
      name: '出差',
      component: myleave
    }, {
      path: 'tleave',
      name: '请假',
      component: myleave
    }, {
      path: 'tbus',
      name: '车辆使用',
      component: myleave
    }, {
      path: 'tplace',
      name: '场地',
      component: myleave
    }]
  }, {
    path: '/teainfo',
    name: '教师信息',
    components: {default: teainfo, h: header}
  }, {
    path: '/takepic',
    name: '拍照',
    components: {default: takepic, h: header}
  }, {
    path: '/person',
    name: '个人空间',
    components: {default: person, h: header, b: routerbar}
  }, {
    path: '/press/pressdetail',
    components: {default: pressdetail, h: header}
  }, {
    path: '/leavelist',
    name: '请假单',
    components: {default: leavelist, h: header}
  }, {
    path: '/learn/evaluate',
    name: '课程评价',
    components: {default: evaluate, h: header}
  }, {
    path: '/learn/evaluate/evadetail',
    name: '课程评价',
    components: {default: evadetail, h: header}
  }, {
    path: '/learn/linetext',
    name: '在线测试',
    components: {default: linetext, h: header}
  }, {
    path: '/learn/linetext/textdetail',
    components: {default: textdetail, h: header}
  }, {
    path: '/learn/survey',
    name: '问卷调查',
    components: {default: survey, h: header}
  }, {
    path: '/learn/survey/surveydetail',
    components: {default: surveydetail, h: header}
  }, {
    path: '/learn/material',
    name: '学习资料',
    components: {default: material, h: header}
  }, {
    path: '/learn/linework',
    name: '在线作业',
    components: {default: linework, h: header}
  }, {
    path: '/linework/studentswork',
    name: '学生作业',
    components: {default: studentswork, h: header}
  }, {
    path: '/linework/workdetail',
    name: '作业',
    components: {default: workdetail, h: header}
  }, {
    path: '/learn/linepuzzle',
    name: '网上答疑',
    components: {default: linepuzzle, h: headerwrite}
  }, {
    path: '/myfile',
    components: {default: myfile, h: header},
    children: [{path: '/', redirect: 'filenew'}, {
      path: 'filenew',
      name: '新的文件'
    }, {
      path: 'filedone',
      name: '已批复'
    }, {
      path: 'filenot',
      name: '未批复'
    }, {
      path: 'filemy',
      name: '我的文件'
    }]
  }, {
    path: '/myfile/filedetail',
    name: '文件详情',
    components: {default: filedetail}
  }, {
    path: '/person/schedule',
    name: '课程表',
    components: {default: schedule, h: header, b: routerbar}
  }, {
    path: '/person/schedule/classdetail',
    name: '课程详情',
    components: {default: classdetail, h: header}
  }, {
    path: '/person/mypuzzle',
    name: '我的答疑',
    components: {default: mypuzzle, h: header}
  }, {
    path: '/linepuzzle/puzzledet',
    name: '答疑讨论',
    components: {default: puzzledet, h: headerwrite}
  }, {
    path: '/person/mynotes',
    name: '我的笔记',
    components: {default: mynotes, h: headerwrite}
  }, {
    path: '/mynotes/note',
    components: {default: note}
  }, {
    path: '/person/attend',
    name: '学员考勤',
    components: {default: attend, h: header}
  }, {
    path: '/person/myleave',
    name: '我的假单',
    components: {default: myleave, h: header}
  }, {
    path: '/person/summary',
    name: '学习心得',
    components: {default: summary}
  }, {
    path: '/person/addresslist',
    components: {default: address}
  }, {
    path: '/person/addresslistpg',
    components: {default: address, h: headerpg}
  }, {
    path: '/person/talk',
    components: {default: talk, h: header}
  }, {
    path: '/person/addresslist/addressdetail',
    name: '班级通讯录',
    components: {default: addressdetail, h: header}
  }, {
    path: '/person/uppassword',
    name: '密码修改',
    components: {default: uppassword, h: header}
  }, {
    path: '/person/upphone',
    name: '更换手机号',
    components: {default: upphone, h: header}
  }, {
    path: '/linepuzzle/writepuzzle',
    name: '我有疑问',
    components: {default: writepuzzle, h: headernull}
  }, {
    path: '/person/perinfo',
    name: '个人信息',
    components: {default: perinfo, h: header}
  }
]
export default routes
