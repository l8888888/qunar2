<template>
  <div>
    <homeheader :city="city"></homeheader>
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
      city:'北京',
      iconList:[],
      recommendList:[],
      swiperList:[],
      weekendList:[],
    }
  },
  methods: {
    getHomeInfo(){
       axios.get("/api/index.json").then(this.getHomeInfoSuc)  
    },
    getHomeInfoSuc(res){
      const data = res.data.ret&&res.data.data
      this.iconList = data.iconList     
      this.recommendList = data.recommendList
      this.swiperList = data.swiperList
      this.weekendList = data.weekendList
      this.city = data.city
      console.log(data)
      console.log(this.recommendList)
    }
  },
  mounted() {
    this.getHomeInfo()
  }

}
</script>

<style>

</style>
