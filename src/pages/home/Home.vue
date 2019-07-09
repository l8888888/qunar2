<template>
  <div>
    <homeheader></homeheader>
    <homeswiper></homeswiper>
    <homeicons></homeicons>
    <HomeRecommand></HomeRecommand>
  </div>
</template>

<script>
import homeheader from './component/homeheader'
import homeswiper from './component/swiper'
import homeicons from './component/icons'
import HomeRecommand from './component/recommand'
export default {
  name: 'Home',
  components: {
    homeheader,
    homeswiper,
    homeicons,
    HomeRecommand
  }
}
</script>

<style>

</style>
