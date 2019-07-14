<template>
  <div class="list">
    <div class="ls-item" v-for="(item,index) in categoryImg" :key="index">
      <div class="title">
        <span class="ls-icon"></span>
        {{item.type}}
      </div>
      <div v-if="item.children">
        <List :tickets="item.children"></List>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    categoryImg:Array
  },
  data() { 
    return {
    }
  }
 }
</script>

<style lang="stylus" scoped>
  .list
    overflow hidden
    .ls-item
      line-height .8rem
      padding 0 .4rem 0 .8rem
      position relative
      .ls-icon
        display: inline-block;
        position: absolute;
        width: .36rem;
        height: .36rem;
        top: .26rem;
        left: .2rem;
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        margin-right: .1rem;
        background-size: .4rem 3rem;
</style>