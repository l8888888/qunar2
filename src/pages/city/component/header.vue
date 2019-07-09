<template>
  <div class="header">
      城市选择
    <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'City',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl';
  .header
    position relative
    line-height $headerHeight
    height $headerHeight
    text-align center
    overflow hidden
    font-size .32rem
    background $bgcolor
    color #fff
    .header-back
        position absolute
        top 0
        left 0
        width .64rem
        color #fff
        font-size .4rem
</style>