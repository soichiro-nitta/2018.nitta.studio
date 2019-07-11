<template lang="pug">
  .poster
    nuxt
</template>

<script>
export default {
  mounted() {
    const progress = document.getElementsByClassName('nuxt-progress')[0]
    progress.style.height = this.$device.isMobile ? '10px' : '20px'
  }
}
</script>

<style lang="stylus" scoped>
.poster
  position relative
  margin 10px
  width calc(100% - 20px)
  height calc(100% - 20px)
  overflow hidden
  +large()
    margin 20px
    width calc(100% - 40px)
    height calc(100% - 40px)
</style>
