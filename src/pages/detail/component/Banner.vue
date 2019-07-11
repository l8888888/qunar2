<template>
  <div>
    <div class="banner" @click="handleClk">
      <img src="http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_600x330_28bda6b0.jpg" class="banner-img" />
      <div class="banner-btm">
        <div class="banner-info">深圳野生动物园</div>
        <div class="banner-num"><span class="iconfont">&#xe791;</span>22</div>
      </div>
    </div>
    <Gallery :img="img" @hideGlry="handleHideGlry" v-show="showGlry"></Gallery>
  </div>
</template>

<script>
import Gallery from "common/gallery/Gallery"
export default {
  name: 'Banner',
  data() { 
    return {
      img: [
        {id: 1, imgUrl: "http://img1.qunarzz.com/sight/p0/1508/18/8169b3d719fa1d280eea16d8c72ca069.water.jpg_r_800x800_a0a66301.jpg"},
        {id: 2, imgUrl: "http://img1.qunarzz.com/sight/p0/1508/18/8169b3d719fa1d280eea16d8c72ca069.water.jpg_r_800x800_a0a66301.jpg"}
      ],
      showGlry:false ,
    }
  },
  components: {
    Gallery
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