<template>
    <div class="header">
        <div class="header-left"><span class="iconfont">&#xe624;</span></div>
        <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
        <router-link to="/city"> 
          <div class="header-right">
              {{this.$store.state.city}}
              <span class="iconfont">&#xe62d;</span>
          </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'homeheader',
  props: {
    city: String
  },
  data() {
    return {
      cityBtn:this.city
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~style/variables.styl'
  @import '~style/mixins.styl'
  .header
    display: flex
    line-height: $headerHeight
    color: #ffffff
    background-color:$bgcolor
    .header-left
      float: left
      width: .64rem
      span
        padding-left: .2rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
      text-align:left
      span
        padding-left: .2rem
    .header-right
      min-width: 1.24rem
      float: right
      text-align: center
      font-size: .28rem
      padding 0 .08rem
      color: #fff
      span
        font-size: .1rem
</style>
