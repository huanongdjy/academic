<template>
  <div>
    <div class="banner-info" width="100%" id = "bannerinfo"></div>
    <div class="header-wrapper">
      <div class="banner">
        <div class="banner-menu">
          <ul class="banner-menu-ul">
            <!-- <li @click="dialogVisible = true;flag=true" v-if="!user">登录</li> -->
            <!-- <li v-if="user">
              <img :src="baseUrl + user.portrait" class="portrait"/>
            </li>
            <li v-if="user" @click="$router.push('/personal')">
              <span>{{user.userName}}</span>
            </li>
            <li v-if="user" @click="$router.push('/personal')">
              <span>个人中心</span>
            </li>
            <li v-if="user" @click="$router.push('/sellerCenter')">
              <el-badge :is-dot="isDot">卖家中心</el-badge>
            </li>
            <li v-if="user" @click="selectNotification">
              <el-badge :is-dot="isDot">通知</el-badge>
            </li>
            <li v-if="user" class="logout" @click="logout">退出</li>
            <li class="regsister" v-if="!user" @click="dialogVisible = true;flag=false">注册</li> -->
            <li class="about" @click="goto('/aboutUS')">关于我们</li>
          </ul>
        </div>
      </div>
      <div class="imgbgr">
        <img src="../assets/logoTransparent.png"/>
      </div>
      <div class="nav">
        <ul class="navbar">
          <el-menu  class="el-menu-demo" mode="horizontal" text-color="black" active-text-color="#409eff">
            <el-menu-item index="1"  @click="goto('/')">首页</el-menu-item>
            <!-- <el-menu-item index="3" @click="goto('/news')">学术新闻</el-menu-item> -->
            <el-menu-item index="2" @click="goto('/newactivity')">近期活动</el-menu-item>
            <el-menu-item index="4" @click="goto('/oldactivity')">往期活动</el-menu-item>
            <el-menu-item index="5" @click="goto('/achievements')">学术成果</el-menu-item>
            <el-menu-item index="8" style="margin-left:350px">
              <el-input placeholder="请输入内容" v-model="input" class="input-with-select" size="small">
                <el-select v-model="select" slot="prepend" placeholder="请选择" style="width:100px">
                  <el-option label="学术活动" value="activity"></el-option>
                  <el-option label="学术成果" value="achievement"></el-option>
                </el-select>
                <el-button slot="append" type="primary" icon="el-icon-search" @click="_search"></el-button>
              </el-input>
            </el-menu-item>
          </el-menu>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {search} from '../../api/index'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      input: '',
      select: '',
      result: []
    }
  },
  // computed: {
  //   ...mapMutations([""])
  // },
  methods: {
    ...mapMutations({ setSearchResult: 'setSearchResult' }),
    goto (url) {
      let router = this.$router
      router.push(url)
    },
    _search () {
      if (this.select === '') {
        this.$message('请选择类别')
      } else if (this.input === '') {
        this.$message('请输入')
      } else {
        search(this.select, this.input).then(res => {
          this.result = []
          console.log(res.data.resultCode === 400)
          if (res.data.resultCode === 400) {
            this.$message(res.data.message)
          } else if (res.data[0].resultCode === '200') {
            res.data.forEach(element => {
              this.result.push(element)
            })
            this.result.splice(0, 1)
            this.setSearchResult(JSON.stringify(this.result))
          }
        })
        this.goto('/search')
      }
    }
  }
}
</script>

<style lang="stylus">
  .banner-info
    position:absolute
    z-index: -1
    // height: 290px
    width: 100%
  .imgbgr
    background-color: #6495ED
    width: 100%
  .header-wrapper
    width: 100%
    margin: 0 auto
    .banner
      z-index: 1;
      // height :200px
      .banner-menu
        box-shadow: 0 1px 2px rgba(0,0,0,.1)
        background-color: hsla(0,0%,100%,.6)
        width: 100%
        height: 50px
        // background: #f1f1f1
        .banner-menu-ul
          width: 1200px
          margin: 0 auto
          display: flex
          justify-content: flex-end
          li
            list-style-type: none
            font-family: '楷体'
            height: 50px
            line-height : 50px
            margin: 0 7px
            font-size: 16px
            &:hover
              cursor: pointer
              color : #20A0FF
              text-decoration: underline
            .el-badge
              vertical-align: baseline
            .el-badge__content
              top: 7px
            .portrait
              display: inline-block
              width: 48px
              height: 48px
              border-radius: 50%
            span
              display: inline-block
              height: 40px
              line-height: 40px
    .nav
      width: 100%
      // height: 60px
      box-shadow: 0 5px 15px rgba(0,0,0,0.2)
      .navbar
        margin: 0 auto
        width: 1100px
        line-height: 50px
        .nav-item
          width: 120px
          &:hover
            background: #20A0FF
            cursor: pointer
  .search
    margin-top:2px
    margin-left: 700px
    .el-select
        width: 100px;
    .el-input
        whidth:300px
    .input-with-select
      background-color: #fff;
      width: 500px;
      margin: 0 auto;
    .el-dialog
      .title
        font-size: 20px
        height: 30px
        line-height: 30px
        padding: 0 5px
        &:hover
          cursor: pointer
          color: #20A0FF
          border-bottom: 1px solid #20A0FF
      .active
        color: #20A0FF
        border-bottom: 1px solid #20A0FF
      .el-form
        padding-top: 0
        .error
          color: red
          margin: 0 0 5px 80px
          visibility: hidden
          height: 20px
          line-height: 20px
          i
            padding-right: 5px
        .el-button
          margin-left: 60px
          width: 200px
</style>
