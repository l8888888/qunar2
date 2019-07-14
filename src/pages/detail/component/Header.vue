<template>
  <div class="header">
    <router-link tag="div" to="/" v-show="showBack" class="back"><span class="iconfont">&#xe624;</span></router-link>
    <div class="fix-top" :style="fixOpacity" v-show="!showBack">列表详情<router-link to="/" tag="div" class="iconfont fix-back">&#xe624;</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
  },
  data() { 
    return {
      showBack: true,
      fixOpacity: {
        opcacity: 1
      }
    }
  },
  methods: {
    handleScroll(e) {
      const top = document.documentElement.scrollTop
      if(top > 60){
        this.showBack = false
        this.fixOpacity.opacity = top/140 > 1 ? 1 : top/140
      }else{
        this.showBack = true
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  }
 }
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl';
  .back
    height 0 
    width .8rem
    padding-bottom .8rem
    line-height .8rem
    border-radius 50%
    background rgba(0,0,0,0.8)
    color #fff
    position absolute
    top .2rem
    left .2rem
    bottom 0
    right 0
    text-align center
    font-size .4rem
  .fix-top
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    line-height $headerHeight
    height $headerHeight
    text-align center
    overflow hidden
    font-size .32rem
    background $bgcolor
    color #fff
    opacity 0
    .fix-back
      position absolute
      top 0
      left 0
      width .64rem
      color #fff
      font-size .4rem
</style>