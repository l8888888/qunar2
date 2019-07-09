<template>
    <div class="icons">
        <swiper v-if="showIcon">
            <swiper-slide :swiperOption="swiperOption" v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img"><img :src="item.imgUrl" ></div>
                    <p class="icon-content">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'homeicons',
  props: {
      list: Array 
  },
  data() {
      return {
          swiperOption: {autoplay: false},
      }
  },
  computed: {
      pages(){
          const pages = []
          this.list.forEach((item,index,arr)=>{
              const page = Math.floor(index/8)
              !pages[page] && (pages[page] = [])
              pages[page].push(item)
          })
          return pages
      },
      showIcon(){
          return this.list.length
      }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~style/variables.styl';
  @import '~style/mixins.styl';
    .icons
      margin-top .2rem
    .icons >>> .swiper-container
      height 0
      padding-bottom 50%
    .icon
        float left
        width 25%
        height 0
        padding-bottom 25%
        overflow hidden
        position relative
        .icon-img
            width 100%
            box-sizing border-box
            padding .2em
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            img
                display block
                height 100%
                margin 0 auto
        .icon-content
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            text-align center
            color $darkTextColor
            ellipsis()
</style>
