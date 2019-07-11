<template>
  <div>
    <homeheader></homeheader>
    <homeswiper :list="swiperList"></homeswiper>
    <homeicons :list="iconList"></homeicons>
    <HomeRecommand :list="recommendList"></HomeRecommand>
    <HomeWeekend :list="weekendList"></HomeWeekend>
  </div>
</template>

<script>
import axios from 'axios'
import homeheader from './component/homeheader'
import homeswiper from './component/swiper'
import homeicons from './component/icons'
import HomeRecommand from './component/recommand'
import HomeWeekend from './component/weekend'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    homeheader,
    homeswiper,
    homeicons,
    HomeRecommand,
    HomeWeekend
  },
  data(){
    return {
      lastCity:"",
      iconList:[],
      recommendList:[],
      swiperList:[],
      weekendList:[],
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo(){
       axios.get("/api/index.json?city=" + this.city).then(this.getHomeInfoSuc)  
    },
    getHomeInfoSuc(res){
      const data = res.data.ret&&res.data.data
      this.iconList = data.iconList     
      this.recommendList = data.recommendList
      this.swiperList = data.swiperList
      this.weekendList = data.weekendList
    }
  },
  mounted() {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated() {
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
