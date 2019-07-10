<template>
  <div>
    <div class="search">
        <input v-model="keyword" class="search-box" type="text" placeholder="请输入城市名或拼音" />
    </div>
    <ul class="search-result" v-show="keyword">
      <li class="item" v-for="(item,index) in srhResult" :key="index">{{item.name}}</li>
      <li class="item" v-show="noData">没有匹配的数据</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'citySearch',
  props: {
    cities: Object
  },
  data() { 
    return {
      timer: null,
      keyword: "",
      srhResult:[]
    }
  },
  methods: {
    
  },
  computed: {
    noData(){
      return !this.srhResult.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) clearTimeout(this.timer)
      this.srhResult = []
      this.timer = setTimeout(()=>{ 
        for (let i in this.cities) {
          this.cities[i].forEach((item)=>{
            if(item.name.indexOf(this.keyword) !== -1 || item.spell.indexOf(this.keyword) !== -1) {
                this.srhResult.push(item)
            }
          })
        }   
      },100)
    }
  }
 }
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
  .search
    background $bgcolor
    padding 0 .1rem
    height .72rem
    .search-box
      box-sizing border-box
      padding 0 .08rem
      margin 0 auto
      border-radius .06rem
      height .62rem
      line-height .62rem
      width 100%
      color #666
      text-align center
  .search-result
    top 1.58rem
    bottom 0
    left 0
    right 0
    position absolute
    z-index 1
    overflow hidden
    .item
      background-color #fff
      line-height .44rem
      color #333
      font-size .24rem
      padding-left .4rem
      border-bottom .02rem solid #eee
</style>
