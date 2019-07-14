<template>
  <div class="detail">
    <Banner :bannerImg="bannerImg" :glryImg="glryImg" :sightName="sightName"></Banner>
    <Header></Header>
    <List :categoryList="categoryList"></List>
    <div class="test"></div>
  </div>
</template>

<script>
import axios from 'axios'
import Banner from "./component/Banner"
import Header from "./component/Header"
import List from "./component/List"
export default {
  name: 'Detail',
  components: {
    Banner,
    Header,
    List
  },
  data() { 
    return {
      bannerImg: '',
      categoryList: [],
      glryImg: [],
      sightName: ''
    }
  },
  methods: {
    getInfo(){
      axios.get("/api/detail.json", {params: {id: this.$route.params.id}}).then(this.getInfoSuc)
    },
    getInfoSuc(res){
      res = res.data
      if(res.ret && res.data){
        let data = res.data
        this.bannerImg = data.bannerImg
        this.categoryList = data.categoryList
        this.glryImg = data.gallaryImgs
        this.sightName = data.sightName
      }
    }
  },
  mounted(){
    this.getInfo()
  }
 }
</script>

<style lang="stylus" scoped>
  .test
    height 100rem
</style>
