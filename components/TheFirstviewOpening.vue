<template lang="pug">
  .TheFirstviewOpening
    .TheFirstviewOpening_Dummy(
      v-if='!offDummy'
    )
      .TheFirstviewOpening_Dummy1.TheFirstviewOpening_DummyC
      .TheFirstviewOpening_Dummy1.TheFirstviewOpening_DummyB
      .TheFirstviewOpening_Dummy1.TheFirstviewOpening_DummyA
      .TheFirstviewOpening_Dummy2.TheFirstviewOpening_DummyC
      .TheFirstviewOpening_Dummy2.TheFirstviewOpening_DummyB
      .TheFirstviewOpening_Dummy2.TheFirstviewOpening_DummyA
      .TheFirstviewOpening_Dummy3.TheFirstviewOpening_DummyC
      .TheFirstviewOpening_Dummy3.TheFirstviewOpening_DummyB
      .TheFirstviewOpening_Dummy3.TheFirstviewOpening_DummyA
      .TheFirstviewOpening_Dummy4.TheFirstviewOpening_DummyC
      .TheFirstviewOpening_Dummy4.TheFirstviewOpening_DummyB
      .TheFirstviewOpening_Dummy4.TheFirstviewOpening_DummyA
    .TheFirstviewOpening_Layer.TheFirstviewOpening_Face(
      ref='face'
    )
      .TheFirstviewOpening_FaceWrap
        transition-group(
          tag='div'
        )
          div.TheFirstviewOpening_Letter(
            v-for='(letter, index) in listInit',
            :data-index='letter.id - 1',
            :key='letter.id'
          )
            span {{ letter.value }}
        .TheFirstviewOpening_Over(
          ref='over'
        ) {{ sitename }}
        .TheFirstviewOpening_HorizontalTop.TheFirstviewOpening_HorizontalTop1
        .TheFirstviewOpening_HorizontalTop.TheFirstviewOpening_HorizontalTop2
        .TheFirstviewOpening_HorizontalTop.TheFirstviewOpening_HorizontalTop3
        .TheFirstviewOpening_HorizontalBottom.TheFirstviewOpening_HorizontalBottom1
        .TheFirstviewOpening_HorizontalBottom.TheFirstviewOpening_HorizontalBottom2
        .TheFirstviewOpening_HorizontalBottom.TheFirstviewOpening_HorizontalBottom3
    .TheFirstviewOpening_Vertical.TheFirstviewOpening_VerticalL
    .TheFirstviewOpening_Vertical
    .TheFirstviewOpening_Vertical.TheFirstviewOpening_VerticalR
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import {TweenMax, Expo, RoughEase} from 'gsap'

export default {
  data () {
    return {
      sitename: 'Nitta.Studio',
      offDummy: false,
      listInit: [
        { id: 12, value: 'o' },
        { id: 10, value: 'i' },
        { id: 8, value: 'd' },
        { id: 6, value: 'u' },
        { id: 4, value: 't' },
        { id: 2, value: 'S' },
        { id: 1, value: '.' },
        { id: 3, value: 'a' },
        { id: 5, value: 't' },
        { id: 7, value: 't' },
        { id: 9, value: 'i' },
        { id: 11, value: 'N' }
      ],
      listNormal: [
        { id: 11, value: 'N' },
        { id: 9, value: 'i' },
        { id: 7, value: 't' },
        { id: 5, value: 't' },
        { id: 3, value: 'a' },
        { id: 1, value: '.' },
        { id: 2, value: 'S' },
        { id: 4, value: 't' },
        { id: 6, value: 'u' },
        { id: 8, value: 'd' },
        { id: 10, value: 'i' },
        { id: 12, value: 'o' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      started: 'firstview/started'
    })
  },
  watch: {
    async started () {
      this.dummy()
      this.flash()
      await this.$delay(900)
      this.horizontal()
      await this.$delay(300)
      this.listInit = this.listNormal
      await this.$delay(100)
      this.enter()
      await this.$delay(700)
      this.offDummy = true
      this.$refs.face.style.background = '#0f0f0f'
      this.paint()
      await this.$delay(700)
      this.over()
      await this.$delay(1400)
      this.complete()
      this.$refs.face.classList.add('TheFirstviewOpening_Clip')
      await this.$delay(1300)
      this.kill()
    }
  },
  methods: {
    dummy () {
      requestAnimationFrame(() => {
        TweenMax.staggerTo('.TheFirstviewOpening_Dummy1', 0.3, {
          y: '-100%',
          ease: Expo.easeInOut
        }, 0.2)
        TweenMax.staggerTo('.TheFirstviewOpening_Dummy2', 0.3, {
          y: '100%',
          ease: Expo.easeInOut,
          delay: 0.2
        }, 0.2)
        TweenMax.staggerTo('.TheFirstviewOpening_Dummy3', 0.3, {
          y: '-100%',
          ease: Expo.easeInOut,
          delay: 0.4
        }, 0.2)
        TweenMax.staggerTo('.TheFirstviewOpening_Dummy4', 0.3, {
          y: '100%',
          ease: Expo.easeInOut,
          delay: 0.6
        }, 0.2)
      })
    },
    over () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.over, 0.3, {
          width: '100%',
          ease: Expo.easeInOut
        })
        TweenMax.to(this.$refs.over, 0.03, {
          color: '#444',
          startAt: {
            color: '#fff'
          },
          ease: Expo.easeOut,
          repeat: 7,
          yoyo: true,
          repeatDelay: 0.03,
          delay: 0.5
        })
      })
    },
    flash () {
      requestAnimationFrame(() => {
        TweenMax.to(document.body, 3.5, {
          backgroundColor: '#0f0f0f',
          ease: RoughEase.ease.config({
            strength: 7,
            points: 30,
            taper: 'out',
            randomize: true,
            clamp: true
          })
        })
        TweenMax.staggerTo('.TheFirstviewOpening_Vertical', 2, {
          y: '2px',
          x: '2px',
          opacity: 0.13,
          ease: RoughEase.ease.config({
            template: Expo.easeInOut,
            strength: 7,
            points: 30,
            taper: 'none',
            randomize: true,
            clamp: false
          }),
          startAt: {
            y: '-2px',
            x: '-2px',
            opacity: 0
          },
          repeat: 1,
          yoyo: true
        }, 0.15)
      })
    },
    horizontal () {
      requestAnimationFrame(() => {
        TweenMax.staggerTo('.TheFirstviewOpening_HorizontalTop', 1.5, {
          x: '210%',
          opacity: 0,
          ease: Expo.easeOut
        }, 0.15)
        TweenMax.staggerTo('.TheFirstviewOpening_HorizontalBottom', 1.5, {
          x: '-210%',
          opacity: 0,
          ease: Expo.easeOut
        }, 0.15)
      })
    },
    enter () {
      requestAnimationFrame(() => {
        TweenMax.to('.TheFirstviewOpening_Letter', 1.4, {
          opacity: 1,
          ease: RoughEase.ease.config({
            strength: 3,
            points: 20,
            taper: 'out',
            randomize: false,
            clamp: true
          })
        })
      })
    },
    ...mapMutations({
      paint: 'firstview/paint',
      complete: 'firstview/complete',
      kill: 'firstview/kill'
    })
  }
}
</script>

<style lang="stylus" scoped>
.TheFirstviewOpening
  position absolute
  top 0
  width 100%
  height 100%
  &_Dummy
    position absolute
    top 0
    width 100%
    height 100%
  &_Dummy1
    position absolute
    bottom -100%
    left 0
    margin auto
    width 25%
    height 100%
  &_Dummy2
    position absolute
    top -100%
    left 25%
    margin auto
    width 25%
    height 100%
  &_Dummy3
    position absolute
    bottom -100%
    left 50%
    margin auto
    width 25%
    height 100%
  &_Dummy4
    position absolute
    top -100%
    left 75%
    margin auto
    width 25%
    height 100%
  &_DummyA
    background #0f0f0f
  &_DummyB
    background #212121
  &_DummyC
    background #323232
  &_Clip
    clip-path inset(0 0 0 100%) !important
    transition all 1.3s ExpoEaseOut
  &_Layer
    display flex
    justify-content center
    align-items center
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    text-align center
    font-size 13.5vw
    font-weight bold
    line-height 1.5
    clip-path inset(0 0 0 0)
    +large()
      font-size 9vw
      letter-spacing 0.1vw
  &_FaceWrap
    display inline-block
    position relative
    overflow hidden
  &_Over
    position absolute
    top 0
    left 0
    width 0
    color #fff
    overflow hidden
  &_Letter
    display inline-block
    color #444
    opacity 0
  &_Letter.v-move
    transition transform 1.5s cubic-bezier(0.19, 1, 0.22, 1)
  &_Vertical
    position absolute
    top -5px
    left calc(50% - 0.5px)
    width 1px
    height calc(100% + 10px)
    background #444
    opacity 0
  &_VerticalL
    left calc(25% - 0.5px)
  &_VerticalR
    left calc(75% - 0.5px)
  &_HorizontalTop
    position absolute
    top 0
    left -100%
    width 100%
    height 1px
    background #444
  &_HorizontalBottom
    position absolute
    bottom 0
    right -100%
    width 100%
    height 1px
    background #444
  &_HorizontalTop1
    top 10px
    +large()
      top 30px
  &_HorizontalTop2
    top 5px
    +large()
      top 15px
  &_HorizontalTop3
    top 0px
  &_HorizontalBottom1
    bottom calc(2.3vw + 10px)
    +large()
      bottom calc(2vw + 30px)
  &_HorizontalBottom2
    bottom calc(2.3vw + 5px)
    +large()
      bottom calc(2vw + 15px)
  &_HorizontalBottom3
    bottom 2.3vw
    +large()
      bottom 2vw
</style>
