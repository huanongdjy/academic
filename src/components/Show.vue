<template>
  <div class="show">
    <div class="text-wrapper">
      <h3 class="text">{{title}}</h3>
      <span class="more" v-if="isMore" @click="goMore">更多</span>
    </div>
    <div class="show-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    isMore: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goMore () {
      this.flag = {
        '学术新闻': 'news',
        '学术成果': 'achievements',
        '相关知识': 'knowledge'
      }
      this.$router.push(this.flag[this.title])
    }
  }
}
</script>

<style lang="stylus">
  .show
    box-sizing: border-box
    position: relative
    overflow: hidden
    border: 1px solid #fff
    border-radius: 3px
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2)
    margin-top: 10px
    .text-wrapper
      margin: 10px 15px 5px 15px
      display: flex
      align-items: center
      height: 40px
      .text
        flex: 1
        line-height: 30px
        height: 30px
        font-size: 16px
        border-left: 5px solid #409EFF
        padding-left: 10px
      .more
        flex: 0 0 30px
        font-size: 13px
        cursor: pointer
        &:hover
          color: #20A0FF
    .show-wrap
      border-top: 2px solid #e0dfdd
      margin: 10px
      padding: 10px
</style>
