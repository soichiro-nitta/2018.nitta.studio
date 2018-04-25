<template lang="pug">
  .default
    TheBackground
    #scrollArea
      nuxt
    TheNav
    TheFirstview
    TheAudio
</template>

<script>
import {mapGetters} from 'vuex'
import TheBackground from '~/components/TheBackground'
import TheNav from '~/components/TheNav'
import TheFirstview from '~/components/TheFirstview'
import TheAudio from '~/components/TheAudio'

export default {
  mounted () {
    const progress = document.getElementsByClassName('nuxt-progress')[0]
    progress.style.height = this.$device.isMobile ? '10px' : '20px'
    const userAgent = window.navigator.userAgent.toLowerCase()
    if (userAgent.indexOf('msie') !== -1 || userAgent.indexOf('trident') !== -1 || userAgent.indexOf('edge') !== -1) {
      this.$router.replace({ path: 'sorry' })
    }
  },
  components: {
    TheBackground,
    TheNav,
    TheFirstview,
    TheAudio
  },
  computed: {
    ...mapGetters({
      painted: 'firstview/painted'
    })
  },
  watch: {
    painted () {
      this.$el.style.background = '#191919'
      document.getElementById('scrollArea').style.opacity = '1'
    }
  }
}
</script>

<style lang="stylus" scoped>
.default
  position relative
  margin 10px
  width calc(100% - 20px)
  height calc(100% - 20px)
  overflow hidden
  +large()
    margin 20px
    width calc(100% - 40px)
    height calc(100% - 40px)
  #scrollArea
    position relative
    width 100%
    height 100%
    overflow-x hidden
    overflow-y scroll
    -webkit-overflow-scrolling touch
    -webkit-backface-visibility hidden
    backface-visibility hidden
    opacity 0
    z-index 0
    +large()
      margin-left 300px
      padding 0
      width calc(100% - 300px)
  #scrollArea>div
    margin 50px 0
    padding 0 30px
    +large()
      margin 5.5vw auto
      padding 0 400px 0 100px
      width 1100px
</style>