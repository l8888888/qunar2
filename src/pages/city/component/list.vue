<template>
  <div 
    class="list" 
    ref="wrapper"
  >
    <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" v-for="item in hot" :key="item.id">
                    <div class="button">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list">
                <div class="item boder-bott" v-for="city in item" :key="city.id">{{city.name}}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll"
export default {
  name: 'list',
  props: {
      cities: Object,
      hot: Array,
      letter: String
  },
  data() { 
    return {
        
    }
  },
  methods: {

  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper)
  },
  watch: {
      letter() {
          const element = this.$refs[this.letter]
          this.scroll.scrollToElement(element[0])
      }
  }
 }
</script>

<style lang="stylus" scoped>  
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc  
    .border-bottom
        &:before
            border-color #ccc
    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        .title
            background #eee
            line-height .44rem
            font-size .26rem
            padding-left .2rem
        .button-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            .button-wrapper
                float left
                width 33.3%
                .button
                    border .02rem solid #333
                    border-radius .06rem
                    padding .1rem 0
                    margin .1rem
                    text-align center
        .item-list
            overflow hidden
            .item
                text-align left
                line-height .76rem
                padding-left .2rem
                text-align left
</style>