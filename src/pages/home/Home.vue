<template>
  <div>
    <homeheader></homeheader>
    <homeswiper></homeswiper>
    <homeicons></homeicons>
    <HomeRecommand></HomeRecommand>
    <HomeWeekend></HomeWeekend>
  </div>
</template>

<script>
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
  }
}
</script>

<style>

</style>
