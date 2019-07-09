<template>
  <div class="recommand">
    <div class="title">周未去哪儿</div>
        <div 
            class="rcm-item"
            v-for="item in rcmList"
            :key="item.id"
        >
            <img class="rcm-item-img" :src="item.img" />
            <div class="rcm-content">
                <p class="rcm-title">{{item.title}}</p>
                <p class="rcm-dec">{{item.dec}}</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() { 
    return {
        rcmList: [
            {id: 1, img: "http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg", title: "深圳野生动物园(AAAA景区)", dec: "广东省深圳市南山区西丽镇西丽路4065号"},
            {id: 2, img: "http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg", title: "深圳野生动物园(AAAA景区)", dec: "广东省深圳市南山区西丽镇西丽路4065号"},
            {id: 3, img: "http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg", title: "深圳野生动物园(AAAA景区)", dec: "广东省深圳市南山区西丽镇西丽路4065号"},
            {id: 4, img: "http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg", title: "深圳野生动物园(AAAA景区)", dec: "广东省深圳市南山区西丽镇西丽路4065号"},
            {id: 5, img: "http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg", title: "深圳野生动物园(AAAA景区)", dec: "广东省深圳市南山区西丽镇西丽路4065号"},
        ]
    }
  }
 }
</script>

<style lang="stylus" scoped>
@import "~style/mixins.styl";
  .title
    background-color #eeeeee
    line-height .8rem
    margin-top .2rem
    text-indent .2rem
  .rcm-item
     overflow hidden
     .rcm-item-img
       width 100%
     .rcm-content
       padding .1rem
       .rcm-title
         font-size .32rem
         line-height .54rem
         ellipsis()
       .rcm-dec
         color #ccc
         line-height .4rem
         ellipsis()
</style>