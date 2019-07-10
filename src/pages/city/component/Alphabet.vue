<template>
  <ul 
    class="list"
      @touchstart = "handleTouchStart"
    @touchmove = "handleTouchMove"
    @touchend = "handleTouchEnd"  
  >
    <li 
      class="item" 
      v-for="(item,index) in letters" 
      :key="index"
      @click = "handleClk"
      :ref="item"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: '',
  props: {
    cities: Object
  },
  data() { 
    return {
      touchStatus:false,
      listY:null,
      timer:null
    }
  },
  updated(){
    this.listY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleClk(e){
      this.$emit('change',e.target.innerHTML)
    },
    handleTouchStart(e){
      this.touchStatus = true
    },
    handleTouchMove(e){
      if(this.timer) clearTimeout(this.timer)
      this.timer = setTimeout ( () => {
        if(this.touchStatus){
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY-this.listY)/20)
          if(index >= 0 && index < this.letters.length){
            this.$emit('change',this.letters[index])
          }
       }
      }, 10)
      
    },
    handleTouchEnd(){
      this.touchStatus = false
    }
  },
  computed:{
    letters(){
      const letters = [] 
      for(const item in this.cities){
        letters.push(item)
      }
      return letters
    }
  }
 }
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
    .list
      position absolute
      top 1.24rem
      right 0
      bottom 0
      display flex
      flex-direction column
      justify-content center
      width .4rem
      .item
        text-align center
        line-height .4rem
        color $bgcolor
</style>