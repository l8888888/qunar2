<template>
  <div class="recommand">
    <div class="title">热销推荐</div>
    <ul v-if="showRcm">
        <li 
            class="rcm-item"
            v-for="item in list"
            :key="item.id"
        >
            <img class="rcm-item-img" :src="item.imgUrl" />
            <div class="rcm-content">
                <p class="rcm-title">{{item.title}}</p>
                <p class="rcm-dec">{{item.desc}}</p>
                <button class="rcm-det">详情查看</button>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommand',
  props: {
    list: Array
  },
  computed: {
    showRcm() {
      return this.list.length
    }
  }
 }
</script>

<style lang="stylus" scoped>
@import "~style/mixins.styl"
  .title
    background-color #eeeeee
    line-height .8rem
    margin-top .2rem
    text-indent .2rem
  .rcm-item
     height 1.9rem
     display flex
     overflow hidden
     .rcm-item-img
       padding .1rem
       width 1.7rem
       height 1.7rem
     .rcm-content
       flex 1
       padding .1rem
       min-width 0
       .rcm-title
         font-size .32rem
         line-height .54rem
         ellipsis()
       .rcm-dec
         color #ccc
         line-height .4rem
         ellipsis()
       .rcm-det
         background #ff9300
         line-height .44rem
         border-radius .06rem
         padding 0 .2rem
         color #fff
         margin-top .2rem
</style>