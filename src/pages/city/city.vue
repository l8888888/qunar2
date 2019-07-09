<template>
  <div>
    <cityHeader></cityHeader>
    <citySearch></citySearch>  
  </div>
</template>

<script>
import cityHeader from "./component/header"
import citySearch from "./component/search"
export default {
  name: 'City',
  components: {
    cityHeader,
    citySearch
  }
 }
</script>

<style lang="stylus" scoped>
</style>
