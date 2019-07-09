<template>
  <div class="recommand">
    <div class="title">热销推荐</div>
    <ul>
        <li 
            class="rcm-item"
            v-for="item in rcmList"
            :key="item.id"
        >
            <img class="rcm-item-img" :src="item.img" />
            <div class="rcm-content">
                <p class="rcm-title">{{item.title}}</p>
                <p class="rcm-dec">{{item.dec}}</p>
                <button class="rcm-det">详情查看</button>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommand',
  data() { 
    return {
        rcmList: [
            {id: 1, img: "http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg", title: "深圳野生动物园(AAAA景区)", dec: "广东省深圳市南山区西丽镇西丽路4065号"},
            {id: 2, img: "http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg", title: "深圳野生动物园(AAAA景区)", dec: "广东省深圳市南山区西丽镇西丽路4065号"},
            {id: 3, img: "http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg", title: "深圳野生动物园(AAAA景区)", dec: "广东省深圳市南山区西丽镇西丽路4065号"},
            {id: 4, img: "http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg", title: "深圳野生动物园(AAAA景区)", dec: "广东省深圳市南山区西丽镇西丽路4065号"},
            {id: 5, img: "http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg", title: "深圳野生动物园(AAAA景区)", dec: "广东省深圳市南山区西丽镇西丽路4065号"},
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