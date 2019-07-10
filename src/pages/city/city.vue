<template>
  <div>
    <cityHeader></cityHeader>
    <citySearch :cities="cities"></citySearch>  
    <cityList :cities="cities" :hot="hotCities" :letter="letter"></cityList>  
    <cityAlphabet :cities="cities" @change="handleChg"></cityAlphabet>  
  </div>
</template>

<script>
import axios from 'axios'
import cityHeader from "./component/header"
import citySearch from "./component/search"
import cityList from "./component/list"
import cityAlphabet from "./component/Alphabet"
export default {
  name: 'City',
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods:{
    getCityInfo(){
      axios.get('/api/city.json').then(this.getCityInfoSuc)
    },
    getCityInfoSuc(res){
      let data = res.data
      if(data.ret&&data.data){
        this.cities = data.data.cities
        this.hotCities = data.data.hotCities
        console.log(this.cities,this.hotCities)
      }
    },
    handleChg (res) {
      this.letter = res
    }
  },
  mounted(){
    this.getCityInfo()  
  }
 }
</script>

<style lang="stylus" scoped>
</style>
