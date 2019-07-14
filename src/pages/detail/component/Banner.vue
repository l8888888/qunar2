<template>
  <div>
    <div class="banner" @click="handleClk">
      <img :src="bannerImg" class="banner-img" />
      <div class="banner-btm">
        <div class="banner-info">{{sightName}}</div>
        <div class="banner-num"><span class="iconfont">&#xe791;</span>{{glryImg.length}}</div>
      </div>
    </div>
    <fade-animation>
      <Gallery :img="glryImg" @hideGlry="handleHideGlry" v-if="showGlry"></Gallery>
    </fade-animation>
  </div>
</template>

<script>
import Gallery from "common/gallery/Gallery"
import FadeAnimation from "common/fade/fadeAnimation"
export default {
  name: 'Banner',
  props: {
    sightName: String,
    glryImg: Array,
    bannerImg: String
  },
  data() { 
    return {
      showGlry:false ,
    }
  },
  components: {
    Gallery,
    FadeAnimation
  },
  methods: {
    handleClk(){
      this.showGlry = true
    },
    handleHideGlry(){
      this.showGlry = false
    }
  }
 }
</script>

<style lang="stylus" scoped>
.banner
  overflow hidden
  height 0
  padding-bottom 55%
  position relative
  .banner-img
    width 100%
  .banner-btm
    position absolute  
    left 0
    right 0
    bottom 0
    color #fff
    background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
    display flex
    line-height .6rem
    font-size .24rem
    .banner-info
      flex 1
      font-size .32rem
      padding 0 .4rem
    .banner-num
      height .32
      font-size .2rem
      padding 0 .4rem
      float right
      margin-top .14
      border-radius .02rem
      background-color rgba(0,0,0,0.2)
      span 
        font-size .24rem
        padding-right .12rem
</style>