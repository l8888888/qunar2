<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in swiperImg" :key="swiperImg.id" ><img :src="item.img" /></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'homeswiper',
  data() {
    return {
    swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
    },
    swiperImg:[
            {id: 1, img: "https://source.qunarzz.com/site/images/wns/20190705_qunar_dujia_homepage_top_banner_1.jpg"},
            {id: 2, img: "https://source.qunarzz.com/site/images/wns/20190705_qunar_dujia_homepage_top_banner_1.jpg"},
            {id: 3, img: "https://source.qunarzz.com/site/images/wns/20190705_qunar_dujia_homepage_top_banner_1.jpg"}
        ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet
    background-color: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 25.6%
    background-color: #ccc
    img
     width: 100%
</style>
