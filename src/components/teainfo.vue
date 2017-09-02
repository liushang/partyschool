<template>
  <div class="teainfo">
    <el-carousel id="lunbo" :interval="99999999" arrow="always" style="height: 100%;">
      <el-carousel-item class="addressdetail" v-for="item in teainfo" :key="item">
        <div class="head"><img :src="item.headimg" width="100" height="100"></div>
        <div class="name">{{item.name}}</div>
        <div class="tea-detail">
          {{item.detail}}
        </div>
        <div class="detail">
          <div class="item sex">职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称&nbsp;&nbsp;&nbsp;&nbsp;{{item.job}}</div>
          <div class="item class">部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;门&nbsp;&nbsp;&nbsp;&nbsp;{{item.part}}</div>
          <div class="item address">办&nbsp;&nbsp;公&nbsp;室&nbsp;&nbsp;&nbsp;&nbsp;{{item.place}}</div>
          <div class="item phone">联系方式&nbsp;&nbsp;&nbsp;&nbsp;{{item.phone}}</div>
          <div class="item QQ">移动电话&nbsp;&nbsp;&nbsp;&nbsp;{{item.mobile}}</div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        teainfo: [
          {
            'name': '翟秋白',
            'headimg': 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png',
            'detail': '瞿秋白，1899年1月29日生于江苏常州，是中国共产党早期主要领导人之一，伟大的马克思主义者，卓越的无产阶级革命家、理论家和宣传家，中国革命文学事业的重要奠基者之一。',
            'job': '教授',
            'part': '教研部门',
            'place': '1-211',
            'phone': '0577-11111111',
            'mobile': '13157715151'
          },
          {
            'name': '高楼倚',
            'headimg': 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png',
            'detail': '瞿秋白，1899年1月29日生于江苏常州，是中国共产党早期主要领导人之一，伟大的马克思主义者，卓越的无产阶级革命家、理论家和宣传家，中国革命文学事业的重要奠基者之一。',
            'job': '教授',
            'part': '教研部门',
            'place': '1-211',
            'phone': '0577-11111111',
            'mobile': '13157715151'
          },
          {
            'name': '凭栏处',
            'headimg': 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png',
            'detail': '瞿秋白，1899年1月29日生于江苏常州，是中国共产党早期主要领导人之一，伟大的马克思主义者，卓越的无产阶级革命家、理论家和宣传家，中国革命文学事业的重要奠基者之一。',
            'job': '教授',
            'part': '教研部门',
            'place': '1-211',
            'phone': '0577-11111111',
            'mobile': '13157715151'
          },
          {
            'name': '山水间',
            'headimg': 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png',
            'detail': '瞿秋白，1899年1月29日生于江苏常州，是中国共产党早期主要领导人之一，伟大的马克思主义者，卓越的无产阶级革命家、理论家和宣传家，中国革命文学事业的重要奠基者之一。',
            'job': '教授',
            'part': '教研部门',
            'place': '1-211',
            'phone': '0577-11111111',
            'mobile': '13157715151'
          }
        ]
      }
    },
    created(){
      document.body.style.backgroundColor = 'white'
    }
  }
</script>

<style lang="stylus" type="text/stylus">
@import '../common/css/teainfo.styl'
@import '../common/css/addressdetail.styl'
</style>
