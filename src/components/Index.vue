<template>
  <div class="index-wrapper">
    <div class="center-wrapper">
      <div class="show-achievements">
        <show :title="'学术成果'">
          <info :info="achievements" :infoType="'学术成果'" @select="selectItem"></info>
        </show>
      </div>
      <div class="login">
        <show :title=logintitle  :isMore="false">
          <div class="login-wrapper">
            <div class="text">当前在线人数为：{{this.onlineCount}}</div>
            <!-- <div class="btn-wrapper">
              <el-button type="primary" @click="dialogVisible = true; flag=true" v-if="!user">登陆</el-button>
              <el-button type="primary" @click="dialogVisible = true; flag=false" v-if="!user">注册</el-button>
              <span v-if="user">欢迎您，{{user.userName}}</span>
            </div> -->
            <!-- <div class="btn"><el-button size="small" type="primary" v-if="user" @click="$router.push('/personal')">进入个人中心</el-button></div> -->
            <div class="btn"><a target="_blank"  href="http://localhost:8080/managerview/index.html"><el-button type="primary" >进入后台管理系统</el-button></a></div>

          </div>
        </show>
      </div>
      <div class="show-activity" >
        <show :title="'近期活动'">
          <info :info="newactivity" :hasImg="true" :infoType="'近期活动'" @select="selectItem"></info>
        </show>
      </div>
      <div class="show-oldactivity" >
        <show :title="'往期活动'">
          <info :info="oldactivity" :hasImg="true" :infoType="'往期活动'" @select="selectItem"></info>
        </show>
      </div>
      <!-- <div class="show-news">
        <show :title="'学术新闻'">
          <info :info="news" :hasImg="true" :infoType="'学术新闻'" @select="selectItem"></info>
        </show>
      </div> -->
      <!-- <div class="show-chances">
        <show :title="'相关知识'">
          <info :info="knowledge" :infoType="'相关知识'" @select="selectItem"></info>
        </show>
      </div> -->
    </div>
  </div>
</template>

<script>
import show from './Show'
import info from './Info'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getInformationWithPage, readInformation } from '../../api/index.js'
import { mapMutations } from 'vuex'
export default {
  components: {
    show,
    info
    // swiper,
    // swiperSlide
  },
  data () {
    return {
      newactivity: [],
      oldactivity: [],
      achievements: [],
      onlineCount: '',
      logintitle: '欢迎来到学术活动系统'
    }
  },
  methods: {
    ...mapMutations({setInfoData: 'setInfoData'}),
    selectItem (id, title) {
      this.flag = {
        '学术成果': {
          path: 'achievements',
          data: 'achievements'
        },
        '近期活动': {
          path: 'newactivity',
          data: 'newactivity'
        },
        '往期活动': {
          path: 'oldactivity',
          data: 'oldactivity'
        }
      }
      let infoData = this[this.flag[title].data].find(item => {
        return item.id === id
      })
      this.setInfoData(JSON.stringify(infoData))
      this.$router.push({path: this.flag[title].path, query: {infoData}})
      readInformation(id, this.flag[title].data)
    },
    currengetInformationWithPage (type) {
      getInformationWithPage(type, 10, 1).then(res => {
        let data = res.data.page.list
        if (!data) {
          return
        }
        this[type] = data
      })
    }
    // stop () {
    //   this.$refs.mySwiper.swiper.stopAutoplay()
    // },
    // play () {
    //   this.$refs.mySwiper.swiper.startAutoplay()
    // }
  },
  mounted () {
    this.currengetInformationWithPage('achievements')
    this.currengetInformationWithPage('newactivity')
    this.currengetInformationWithPage('oldactivity')
  }
}
</script>

<style lang="stylus">
.index-wrapper
  position: relative
  width: 1200px
  margin: 10px auto
  .login
    // flex: 1
    width: 370px
    margin-right: 10px
    .login-wrapper
      height: 170px
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      .text
        margin-bottom: 15px
        font-size: 18px
      .btn
        margin-top :10px
      span
        display: inline-block
        font-weight: bold
        font-size: 16px
        margin-right: 10px
  .show-activity
    // flex: 1
    margin-right: 10px
    width: 585px
  .show-oldactivity
    // flex: 1
    margin-right: 10px
    width: 585px
  .center-wrapper
    display: flex
    margin-right: 10px
    justify-content: space-between
    flex-wrap: wrap
    .show-achievements
      // flex: 1
      width: 800px
      margin-right: 10px
    .show-chances
      flex: 1
      margin-right: 10px
</style>
