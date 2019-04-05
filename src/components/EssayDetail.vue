<template>
  <div class="info-detail">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/'+$route.params.name }">{{flag[$route.params.name]}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{infoData.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content-wrapper">
      <h1 class="title">{{infoData.title}}</h1>
      <div class="time">
      <span class="item">发布时间: {{infoData.time | formatDate}}</span>
      <!-- <span class="item">来源: {{infoData.comeFrom}}</span> -->
      <span class="item">作者: {{infoData.author}} </span>
      <span class="item">阅读量: {{infoData.read_num}}</span>
      </div>
      <div class="content" v-if="!(this.infoData.summary === undefined)">摘要：{{infoData.summary}}</div>
      <div class="content">
      <div class="ql-editor" v-html="infoData.content"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { formatDate } from '../../api/data'
require('quill/dist/quill.core.css')
require('quill/dist/quill.snow.css')
require('quill/dist/quill.bubble.css')
require('swiper/dist/css/swiper.css')
export default {
  // components: {
  //   MFooter
  // },
  props: {
    infoData: {
      type: Object,
      default: () => {}
    }
  },
  filters: {
    formatDate (time) {
      let date = new Date()
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  computed: {
    ...mapGetters({
      getInfoData: 'getInfoData'
    })
  },
  created () {
    if (JSON.stringify(this.infoData) === '{}') {
      this.infoData = JSON.parse(this.getInfoData)
      // console.log(Object.keys(this.infoData.summary).length > 0)
      console.log(this.infoData.summary === undefined)
    }
  },
  data () {
    return {
      flag: {
        'news': '新闻中心',
        'achievements': '学术成果',
        'newactivity': '近期活动',
        'oldactivity': '往期活动',
        'knowledge': '相关知识',
        'search': '查询结果'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.info-detail
  background: #fff
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 5
.breadcrumb
  font-size: 16px
  height: 25px
  line-height: 25px
  margin-left: 10px
  margin-bottom: 10px
.content-wrapper
  border: 1px solid #e6ebf5;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  color: #2d2f33;
  padding-top: 30px
  padding-bottom: 30px
  .title
    font-weight: bold
    font-size: 25px
    text-align: center
  .time
    font-size: 16px
    margin-top: 20px
    text-align: center
    .item
      margin-left :20px
  .content
    margin: 0 auto
    width: 75%
    margin-top: 25px
    line-height: 26px
    text-align: none
</style>
