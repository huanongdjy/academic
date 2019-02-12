<template>
  <div class="news">
    <!-- <div class="left-img" v-show="hasImg">
       <template>
          <el-carousel :interval="5000" indicator-position="outside" trigger="click" height="200px">
            <el-carousel-item v-for="item in info" :key="item.informationId">
              <span  @click="selectItem(item.informationId)">
                <img :src="baseUrl+item.photo" width="350px" height="200px" >
              </span>
            </el-carousel-item>
          </el-carousel>
        </template>
    </div> -->
    <div class="news-wrapper">
      <div v-if="info.length === 0" class="text-warning">暂无数据</div>
      <div class="news-list" v-for="item in info" :key="item.id" :class="{'big': big}">
        <span class="text" :class="{'small': noTime, 'long': big}" :title="item.title" @click="selectItem(item.id)">{{item.title}}</span>
        <span class="time" v-if="!noTime">{{item.time | formatDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import {URL} from '../../api/variable'
import { formatDate } from '../../api/data'
export default {
  // created() {
  //   if (this.infoType === 'news') {
  //     for (let item of info) {
  //       this.item.photo = this.item.photo;
  //     }
  //   }
  // },
  // data () {
  //   return {
  //     baseUrl: URL
  //   }
  // },
  filters: {
    formatDate (time) {
      let date = new Date()
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  props: {
    info: {
      type: Array,
      default: function () {
        return []
      }
    },
    infoType: {
      type: String,
      default: ''
    },
    hasImg: {
      type: Boolean,
      default: false
    },
    big: {
      type: Boolean,
      default: false
    },
    noTime: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectItem (id) {
      this.$emit('select', id, this.infoType)
    }
  }
}
</script>
<style lang="stylus">
  .news
    min-height: 170px
    position: relative
    display: flex
    .left-img
      cursor: pointer
      flex: 0 0 360px
    .news-wrapper
      flex: 1
      .text-warning
        margin:15px auto
        width: 400px
      .news-list
        display: flex
        justify-content: space-between
        height: 35px
        line-height: 35px
        font-size: 15px
        .text
          text-align: left
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          width: 380px
          cursor: pointer
          &:hover
            color: #20A0FF
            text-decoration: underline
        .small
          width: 330px
        .long
          width: 650px
        .time
          flex: 0 0 90px
    .big
      height: 38px !important
      line-height: 38px !important
      font-size: 17px !important
</style>
