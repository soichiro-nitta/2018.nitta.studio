<template lang="pug">
  .TheFirstviewStart(
    v-if='!off'
    @click='click'
  )
    span.TheFirstviewStart_Letter( v-for='letter in "Click&Start!!"'
    ) {{ letter }}
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import {TweenMax, Expo, Elastic} from 'gsap'

export default {
  data () {
    return {
      off: false,
      clickable: false
    }
  },
  computed: {
    ...mapGetters({
      loaded: 'audio/loaded'
    })
  },
  watch: {
    async loaded () {
      await this.$delay(3600)
      this.enter()
      await this.$delay(200)
      this.effect()
      await this.$delay(800)
      this.clickable = true
    }
  },
  methods: {
    async click () {
      if (!this.clickable) return
      this.clickable = false
      this.playMp3()
      this.start()
      this.leave()
      await this.$delay(600)
      this.off = true
    },
    enter () {
      requestAnimationFrame(() => {
        TweenMax.staggerTo('.TheFirstviewStart_Letter', 1.5, {
          opacity: 1,
          y: 0,
          startAt: {
            y: '-20px'
          },
          ease: Elastic.easeOut
        }, 0.05)
      })
    },
    effect () {
      requestAnimationFrame(() => {
        TweenMax.staggerTo('.TheFirstviewStart_Letter', 0.3, {
          color: '#fff',
          ease: Expo.easeInOut,
          repeat: -1,
          yoyo: true
        }, 0.1)
      })
    },
    playMp3 () {
      document.getElementById('sound').play()
      if (!this.$device.isMobile) document.getElementById('bgm').play()
    },
    leave () {
      requestAnimationFrame(() => {
        TweenMax.to('.TheFirstviewStart', 0.6, {
          opacity: 0,
          scale: 2,
          ease: Expo.easeInOut
        })
      })
    },
    ...mapMutations({
      start: 'firstview/start'
    })
  }
}
</script>

<style lang="stylus" scoped>
.TheFirstviewStart
  display flex
  justify-content center
  align-items center
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  text-align center
  &_Letter
    display inline-block
    font-size 6vw
    font-weight bold
    line-height 2
    letter-spacing 2px
    opacity 0
    color #a2a2a2
    +large()
      font-size 3.2vw
</style>
