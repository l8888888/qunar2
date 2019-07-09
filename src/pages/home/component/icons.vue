<template>
    <div class="icons">
        <swiper>
            <swiper-slide :swiperOption="swiperOption" v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img"><img :src="item.img" ></div>
                    <p class="icon-content">{{item.dec}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'homeicons',
  data() {
      return {
          swiperOption: {autoplay: false},
          iconList: [
              {id: 1,img: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png", dec: "景点门票门票门票门票门票门票"},
              {id: 2,img: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png", dec: "景点门票"},
              {id: 3,img: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png", dec: "景点门票"},
              {id: 4,img: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png", dec: "景点门票"},
              {id: 5,img: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png", dec: "景点门票"},
              {id: 6,img: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png", dec: "景点门票"},
              {id: 7,img: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png", dec: "景点门票"},
              {id: 8,img: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png", dec: "景点门票"},
              {id: 9,img: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png", dec: "景点门票"},
              {id: 10,img: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png", dec: "景点门票"},
              {id: 11,img: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png", dec: "景点门票"},
              {id: 12,img: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png", dec: "景点门票"}
            ]
        }
  },
  computed: {
      pages(){
          const pages = []
          this.iconList.forEach((item,index,arr)=>{
               const page = Math.floor(index/8)
              !pages[page] && (pages[page] = [])
              pages[page].push(item)
          })
          return pages
      }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~style/variables.styl';
  @import '~style/mixins.styl';
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
            padding .1em
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
