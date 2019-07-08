<template>
  <div>
    <homeheader></homeheader>
    <homeswiper></homeswiper>
    <homeicons></homeicons>
  </div>
</template>

<script>
import homeheader from './component/homeheader'
import homeswiper from './component/swiper'
import homeicons from './component/icons'
export default {
  name: 'Home',
  components: {
    homeheader,
    homeswiper,
    homeicons
  }
}
</script>

<style>

</style>
