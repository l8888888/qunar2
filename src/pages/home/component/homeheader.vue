<template>
    <div class="header">
        <div class="header-left"><span class="iconfont">&#xe624;</span></div>
        <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
        <div class="header-right">{{city}}<span class="iconfont">&#xe62d;</span></div>
    </div>
</template>

<script>
export default {
  name: 'homeheader',
  props: {
    city: String
  }
}
</script>

<style lang='stylus' scoped>
  @import '~style/variables.styl';
  .header
    display: flex
    line-height:.86rem
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
      width: 1.24rem
      float: right
      text-align: center
      font-size: .28rem
      span
        font-size: .1rem
        padding-left: .08rem
</style>
