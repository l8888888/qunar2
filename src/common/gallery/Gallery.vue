<template>
  <div class="gallery">
    <div class="wrapper" @click="handleClk">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in img" :key="item.id">
              <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props:{
    img: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() { 
    return {
      swiperOption:{
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleClk(){
      this.$emit('hideGlry')
    }
  }
 }
</script>

<style lang="stylus" scoped>
.gallery >>> .swiper-container
    overflow: inherit
.gallery
  background #000
  display flex
  flex-direction column
  justify-content center
  z-index 99
  top 0
  left 0
  bottom 0
  right 0
  position fixed
  .wrapper
    width 100%
    height 0
    padding-bottom 100%
    .swiper-img
      width 100%
    .swiper-pagination
      color #fff
      bottom -1rem
</style>