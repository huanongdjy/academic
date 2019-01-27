<template>
  <div class="aboutUs">
    <show :title="'关于我们'" :isMore="false" >
      <div class="text">
      <!-- {{aboutUs}} -->
      </div>
    </show>
  </div>
</template>

<script>
import Show from '../components/Show'
export default {
  components: {
    Show
  },
  methods: {
  },
  data () {
    return {
      aboutUs: ''
    }
  },
  mounted () {
    // this.aboutUs = this.layout.aboutUs
  }
}
</script>
<style lang="stylus" scoped>
  .aboutUs
    position: relative
    width: 1200px
    margin: 10px auto
    .text
      margin-top :5%
      margin-left :20%
      margin-bottom :5%
      margin-right :20%
      font-size :20px
      text-indent: 50px
      letter-spacing: 3px
      line-height :30px
      font-family: '楷体'
</style>
