<template>
  <div>
    <homeheader></homeheader>
    <homeswiper></homeswiper>
  </div>
</template>

<script>
import homeheader from './component/homeheader'
import homeswiper from './component/swiper'
export default {
  name: 'Home',
  components: {
    homeheader,
    homeswiper
  }
}
</script>

<style>

</style>
