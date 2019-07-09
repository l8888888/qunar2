<template>
  <div class="recommand">
    <div class="title" >周未去哪儿</div>
      <div v-if="showWeeklist">
        <div 
            class="rcm-item"
            v-for="item in list"
            :key="item.id" 
        >
            <img class="rcm-item-img" :src="item.imgUrl" />
            <div class="rcm-content">
                <p class="rcm-title">{{item.title}}</p>
                <p class="rcm-dec">{{item.desc}}</p>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  computed:{
    showWeeklist(){
      return this.list.length
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