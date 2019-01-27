<template >
  <div class="info-list"  v-loading="loading">
    <router-view :infoData="infoData"></router-view>
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{flag[$route.params.name]}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="list-show" v-show="isShow">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{flag[$route.params.name]}}</span>
        </div>
        <info :info="news" @select="selectItem" big></info>
        <div class="pagination" v-if="news.length > 0">
          <el-pagination
            background
            layout="prev, pager, next"
            :page-count="pageCount"
            :current-page.sync="currentPage"
            @current-change="changePage">
          </el-pagination>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import Info from '../components/Info'
export default {
  components: {
    Info
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      news: [],
      infoData: {},
      loading: false,
      input: '',
      flag: {
        'news': '学术新闻',
        'achievements': '学术成果',
        'knowledge': '相关知识',
        'newactivity': '近期活动',
        'oldactivity': '往期活动'
      },
      flag1: {
        '/news': 'news',
        '/achievements': 'achievements',
        '/chances': 'chances'
      },
      isShow: true,
      currentPage: 1,
      pageSize: 15,
      pageCount: 4
    }
  },
  created () {
    console.log(this.$route)
  }
}
</script>
<style lang="stylus" scoped>
  .info-list
    position: relative
    width: 1100px
    margin: 20px auto
    .breadcrumb
      font-size: 16px
      height: 25px
      line-height: 25px
      margin-left: 10px
    .list-show
      margin-top: 10px
      span
        font-size: 18px
        font-weight: bold
      .pagination
        position: relative
        margin: 0 auto
        margin-left: 50%
        transform: translateX(-25%)
      .el-select
         width: 130px;
      .el-input
         width: 100%;
</style>
