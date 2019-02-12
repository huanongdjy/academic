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
        <info :info="infolist" @select="selectItem" big></info>
        <div class="pagination" v-if="infolist.length > 0">
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
import { getInformationWithPage, readInformation } from '../../api/index.js'
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
      infolist: [],
      infoData: {},
      loading: false,
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
        '/chances': 'chances',
        '/newactivity': 'newactivity',
        '/oldactivity': 'oldactivity'
      },
      isShow: true,
      currentPage: 1,
      pageSize: 15,
      pageCount: 4
    }
  },
  methods: {
    selectItem (id) {
      var instance = this
      this.infoData = instance.infolist.find(item => {
        return item.id === id
      })
      this.isShow = false
      this.$router.push(this.$route.path + '/' + id)
      readInformation(id)
    },
    changePage (currentPage) {
      getInformationWithPage(this.flag1[this.$route.path], this.pageSize, this.currentPage).then(res => {
        let data = res.data
        if (!data) {
          return
        }
        this.pageCount = data.pageCount
        // data.recordList.forEach(item => {
        //   item.time = item.time.slice(0, 10)
        // })
        // this.infolist = data.recordList
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.isShow = true
      console.log('infolist: to.query.infoData' + to.query.infoData)
      if (to.query.infoData) {
        vm.isShow = false
        vm.$router.push(to.path + '/' + to.query.infoData.informationId)
        vm.infoData = to.query.infoData
      }
    })
  },
  beforeRouteUpdate (to, from, next) {
    var instance = this
    if (!to.params.id) {
      next()
      this.isShow = true
      this.loading = true
      let path = this.flag1[to.path]
      getInformationWithPage(path, 15, this.currentPage).then(res => {
        // console.log(res)
        console.log(res.data.page)
        if (res.data.resultCode === '200') {
          instance.infolist = res.data.page
        } else {
          alert('没有数据')
        }
        this.loading = false
      })
    } else {
      next()
    }
  }
  // created () {
  //   this.loading = true
  //   let path = this.flag1[this.$route.path]
  //   getInformationWithPage(path, 15, this.currentPage).then(res => {
  //     // if (res.data.status === 1) {
  //     //   let data = res.data.data
  //     //   if (!data || data.recordList === null) {
  //     //     this.infolist = []
  //     //     this.loading = false
  //     //     return
  //     //   }
  //     //   this.pageCount = data.pageCount
  //     //   data.recordList.forEach(item => {
  //     //     item.time = item.time.slice(0, 10)
  //     //   })
  //     //   this.infolist = data.recordList
  //     // }
  //     this.loading = false
  //   })
  // }
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
