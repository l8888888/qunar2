<template>
  <div class="search">
      <input class="search-box" type="text" placeholder="请输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: 'citySearch',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
  .search
    background $bgcolor
    padding 0 .1rem
    height .72rem
    .search-box
      box-sizing border-box
      padding 0 .08rem
      margin 0 auto
      border-radius .06rem
      height .62rem
      line-height .62rem
      width 100%
      color #666
      text-align center
</style>
