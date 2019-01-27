<template>
  <div class="index-wrapper">
    <div class="show-activity" @mouseover="stop" @mouseout="play()">
      <show :title="'近期活动'" :isMore="false">
        <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
          <swiper-slide v-for="item in hotComoditys" :key="item.productId">
            <router-link :to="'categoryDetails/'+item.productId">
              <img :src="baseUrl+item.photos[0].url"  height="200px">
            </router-link>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </show>
    </div>
    <div class="show-oldactivity" @mouseover="stop" @mouseout="play()">
      <show :title="'往期活动'" :isMore="false">
        <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
          <swiper-slide v-for="item in hotComoditys" :key="item.productId">

            <router-link :to="'categoryDetails/'+item.productId">
              <img :src="baseUrl+item.photos[0].url"  height="200px">
            </router-link>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </show>
    </div>
    <div class="center-wrapper">
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
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    show,
    info,
    swiper,
    swiperSlide
  },
  methods: {
    stop () {
      this.$refs.mySwiper.swiper.stopAutoplay()
    },
    play () {
      this.$refs.mySwiper.swiper.startAutoplay()
    }
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
    font-size: 30px
  .show-oldactivity
    flex: 1
    font-size: 30px
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
