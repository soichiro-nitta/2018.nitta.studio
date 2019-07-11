<template lang="pug">
  .TheFirstviewLoading(
    v-if='!off'
  )
    .TheFirstviewLoading_Gray(
      ref='gray'
    )
</template>

<script>
import { mapGetters } from 'vuex'
import { TweenMax, TimelineMax, Expo, Elastic } from 'gsap'

export default {
  data() {
    return {
      off: false
    }
  },
  computed: {
    ...mapGetters({
      loaded: 'audio/loaded'
    })
  },
  watch: {
    async loaded() {
      await this.$delay(2000)
      this.bar()
      await this.$delay(500)
      this.round()
      await this.$delay(700)
      this.explosion()
      this.changeColor()
      await this.$delay(1000)
      this.off = true
    }
  },
  mounted() {
    window.onload = () => {
      this.loading()
    }
  },
  methods: {
    loading() {
      const timeLine = new TimelineMax()
      timeLine.repeat(-1)
      requestAnimationFrame(() => {
        timeLine
          .to(this.$refs.gray, 0.5, {
            scaleX: 1,
            transformOrigin: 'left center',
            ease: Expo.easeIn
          })
          .to(this.$refs.gray, 0.5, {
            scaleX: 0,
            transformOrigin: 'right center',
            ease: Expo.easeOut
          })
      })
    },
    bar() {
      TweenMax.pauseAll()
      requestAnimationFrame(() => {
        TweenMax.set(this.$refs.gray, {
          scaleX: 0,
          transformOrigin: 'center center'
        })
        TweenMax.to(this.$refs.gray, 0.2, {
          scaleX: 1,
          width: '100%',
          ease: Expo.easeIn
        })
      })
    },
    round() {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.gray, 1, {
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          ease: Elastic.easeOut
        })
      })
    },
    explosion() {
      const wide = window.innerWidth > window.innerHeight
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.gray, 1, {
          width: wide
            ? `${window.innerWidth * 2}px`
            : `${window.innerHeight * 2}px`,
          height: wide
            ? `${window.innerWidth * 2}px`
            : `${window.innerHeight * 2}px`,
          ease: Expo.easeInOut
        })
      })
    },
    changeColor() {
      requestAnimationFrame(() => {
        TweenMax.to(document.body, 1, {
          backgroundColor: '#444',
          ease: Expo.easeInOut
        })
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.TheFirstviewLoading
  display flex
  justify-content center
  align-items center
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  margin auto
  width 100%
  height 100%
  &_Gray
    position absolute
    width 30%
    height 2px
    background #444
    transform scaleX(0)
</style>
