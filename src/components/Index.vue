<template>
  <div class="index-wrapper">
    <div class="center-wrapper">
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
      <div class="show-news">
        <show :title="'学术新闻'">
          <info :info="news" :hasImg="true" :infoType="'学术新闻'" @select="selectItem"></info>
        </show>
      </div>
      <div class="show-achievements">
        <show :title="'学术成果'">
          <info :info="achievements" :infoType="'学术成果'" @select="selectItem"></info>
        </show>
      </div>
      <div class="show-chances">
        <show :title="'相关知识'">
          <info :info="knowledge" :infoType="'相关知识'" @select="selectItem"></info>
        </show>
      </div>
    </div>
  </div>
</template>

<script>
import show from './Show'
import info from './Info'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getInformationWithPage } from '../../api/index.js'
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
      news: [],
      achievements: [],
      knowledge: []
    }
  },
  methods: {
    selectItem (id, title) {
      this.flag = {
        '学术新闻': {
          path: 'news',
          data: 'news'
        },
        '学术成果': {
          path: 'achievements',
          data: 'achievements'
        },
        '相关知识': {
          path: 'knowledge',
          data: 'knowledge'
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
      this.$router.push({path: this.flag[title].path, query: {infoData}})
      // readInformation(id, )
    },
    currengetInformationWithPage (type) {
      getInformationWithPage(type, 10, 1).then(res => {
        let data = res.data.page
        if (!data) {
          return
        }
        // data.forEach(item => {
        //   item.time = item.time.slice(0, 10)
        // })
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
    this.currengetInformationWithPage('news')
    this.currengetInformationWithPage('achievements')
    this.currengetInformationWithPage('newactivity')
    this.currengetInformationWithPage('oldactivity')
    this.currengetInformationWithPage('knowledge')
  }
}
</script>

<style lang="stylus">
.index-wrapper
  position: relative
  width: 1200px
  margin: 10px auto
  .show-activity
    flex: 1
    margin-right: 10px
  .show-oldactivity
    flex: 1
    margin-right: 10px
  .center-wrapper
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    .show-news
      flex: 1
      margin-right: 10px
    .show-achievements
      flex: 1
      margin-right: 10px
    .show-chances
      flex: 1
      margin-right: 10px
</style>
