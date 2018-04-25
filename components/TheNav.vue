<template lang="pug">
  .TheNav
    .TheNav_Menu(
      ref='menu'
    )
      .TheNav_MenuDummy1(
        ref='menuDummy1'
      )
      .TheNav_MenuDummy2(
        ref='menuDummy2'
      )
      .TheNav_MenuDummy3(
        ref='menuDummy3'
      )
      .TheNav_MenuFace(
        ref='menuFace'
      )
      .TheNav_MenuContent
        nuxt-link.TheNav_MenuContentLogo(
          to='/',
          ref='logo',
          @click.native='close'
        )
          .TheNav_MenuContentLogoShadow Nitta.Studio
          .TheNav_MenuContentLogoOver(
            ref='over'
          ) Nitta.Studio
        .TheNav_MenuContentList
          nuxt-link(
            to='/',
            @click.native='close'
          )
            .TheNav_MenuContentListEng HOME
            .TheNav_MenuContentListJa ホーム
            .TheNav_MenuContentListMark
          nuxt-link(
            to='/about',
            @click.native='close'
          )
            .TheNav_MenuContentListEng ABOUT
            .TheNav_MenuContentListJa 新田について
            .TheNav_MenuContentListMark
          nuxt-link(
            to='/contact',
            @click.native='close'
          )
            .TheNav_MenuContentListEng CONTACT
            .TheNav_MenuContentListJa お問い合わせ
            .TheNav_MenuContentListMark
          .TheNav_MenuContentFooter(
            ref='footer'
          )
          .TheNav_MenuContentProduced(
            ref='produced'
          ) Produced by Soichiro Nitta.
    .TheNav_Switch(
      ref='switch',
      @click='toggle',
      v-show='isMobile'
    )
      .TheNav_SwitchDummy1(
        ref='switchDummy1'
      )
      .TheNav_SwitchDummy2(
        ref='switchDummy2'
      )
      .TheNav_SwitchDummy3(
        ref='switchDummy3'
      )
      .TheNav_SwitchFace(
        ref='switchFace'
      )
      .TheNav_SwitchContent(
        ref='switchContent'
      )
        .TheNav_SwitchBorder1(
          ref='border1'
        )
        .TheNav_SwitchBorder2(
          ref='border2'
        )
        .TheNav_SwitchBorder3(
          ref='border3'
        )
</template>

<script>
import {TweenMax, Expo, Back, Elastic} from 'gsap'
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      opened: false,
      progress: false,
      isMobile: this.$device.isMobile
    }
  },
  computed: {
    ...mapGetters({
      completed: 'firstview/completed'
    })
  },
  watch: {
    async completed () {
      await this.$delay(500)
      this.enterSwitch()
      if (this.isMobile) return
      this.open()
      this.watchRoute()
    }
  },
  methods: {
    async toggle () {
      !this.opened ? this.open() : this.close()
    },
    async open () {
      if (this.progress) return
      this.progress = true
      this.openSwitch()
      this.enterMenu()
      this.openMenu()
      await this.$delay(800)
      this.progress = false
      this.opened = true
    },
    async close () {
      if (!this.isMobile) return
      if (this.progress) return
      this.progress = true
      this.closeSwitch()
      this.closeMenu()
      await this.$delay(700)
      this.progress = false
      this.leaveMenu()
      this.opened = false
    },
    watchRoute () {
      this.$watch('$route', () => {
        this.$nextTick(() => {
          TweenMax.to('.TheNav_MenuContentListMark', 0.7, {
            opacity: 0,
            scale: 0,
            ease: Expo.easeOut
          })
          TweenMax.to('.exact-active-link .TheNav_MenuContentListMark', 1.5, {
            opacity: 1,
            scale: 1,
            ease: Elastic.easeOut.config(1, 0.2),
            delay: 0.55
          })
        })
      })
    },
    enterSwitch () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.switchDummy1, 1, {
          scaleX: 1,
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.switchDummy2, 1, {
          scaleX: 1,
          ease: Expo.easeOut,
          delay: 0.15
        })
        TweenMax.to(this.$refs.switchDummy3, 1, {
          scaleX: 1,
          ease: Expo.easeOut,
          delay: 0.3
        })
        TweenMax.to(this.$refs.switchFace, 1, {
          scaleX: 1,
          ease: Expo.easeOut,
          delay: 0.45
        })
        TweenMax.to(this.$refs.border1, 1.5, {
          scaleX: 1,
          ease: Elastic.easeOut.config(1.7, 0.3),
          delay: 0.65
        })
        TweenMax.to(this.$refs.border2, 1.5, {
          scaleX: 1,
          ease: Elastic.easeOut.config(1.7, 0.3),
          delay: 0.75
        })
        TweenMax.to(this.$refs.border3, 1.5, {
          scaleX: 1,
          ease: Elastic.easeOut.config(1.7, 0.3),
          delay: 0.85
        })
      })
    },
    enterMenu () {
      this.$refs.menu.style.display = 'block'
    },
    leaveMenu () {
      this.$refs.menu.style.display = 'none'
    },
    openSwitch () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.switchContent, 0.65, {
          rotation: 180,
          startAt: {
            rotation: 0
          },
          ease: Back.easeOut
        })
        TweenMax.to(this.$refs.border1, 0.65, {
          top: '21px',
          right: '25px',
          width: '10px',
          rotation: -30,
          startAt: {
            rotation: 0,
            transformOrigin: 'center center'
          },
          ease: Expo.easeInOut
        })
        TweenMax.to(this.$refs.border2, 0.65, {
          width: '20px',
          ease: Expo.easeInOut,
          startAt: {
            transformOrigin: 'center center'
          }
        })
        TweenMax.to(this.$refs.border3, 0.65, {
          top: '27px',
          right: '25px',
          width: '10px',
          rotation: 30,
          startAt: {
            rotation: 0,
            transformOrigin: 'center center'
          },
          ease: Expo.easeInOut
        })
      })
    },
    openMenu () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.menuDummy1, this.isMobile ? 0.7 : 1, {
          left: 0,
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.menuDummy2, this.isMobile ? 0.7 : 1, {
          left: 0,
          ease: Expo.easeOut,
          delay: this.isMobile ? 0.1 : 0.12
        })
        TweenMax.to(this.$refs.menuDummy3, this.isMobile ? 0.7 : 1, {
          left: 0,
          ease: Expo.easeOut,
          delay: this.isMobile ? 0.2 : 0.24
        })
        TweenMax.to(this.$refs.menuFace, this.isMobile ? 0.7 : 1, {
          left: 0,
          ease: Expo.easeOut,
          delay: this.isMobile ? 0.3 : 0.36
        })
        TweenMax.to(this.$refs.logo.$el, 1, {
          opacity: 1,
          y: '35px',
          ease: Expo.easeOut,
          delay: 0.45
        })
        TweenMax.to(this.$refs.over, 1, {
          height: '100%',
          ease: Expo.easeOut,
          delay: 0.7
        })
        TweenMax.staggerTo('.TheNav_MenuContentListEng', 1, {
          opacity: 1,
          x: '-60px',
          ease: Expo.easeOut,
          delay: 0.48
        }, 0.03)
        TweenMax.staggerTo('.TheNav_MenuContentListJa', 1, {
          opacity: 1,
          x: '-25px',
          ease: Expo.easeOut,
          delay: 0.73
        }, 0.03)
        TweenMax.to(this.$refs.footer, 1, {
          y: '-100px',
          ease: Expo.easeOut,
          delay: 0.57
        })
        TweenMax.to(this.$refs.produced, 1, {
          opacity: 1,
          y: '-35px',
          ease: Expo.easeOut,
          delay: 0.82
        })
        TweenMax.set('.TheNav_MenuContentListMark', {
          opacity: 0,
          scale: 0
        })
        TweenMax.to('.exact-active-link .TheNav_MenuContentListMark', 1.5, {
          opacity: 1,
          scale: 1,
          ease: Elastic.easeOut.config(0.7, 0.2),
          delay: 0.9
        })
      })
    },
    closeSwitch () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.switchContent, 0.65, {
          rotation: 360,
          ease: Back.easeOut,
          onComplete: () => {
            TweenMax.set(this.$refs.switchContent, {
              rotation: 0
            })
          }
        })
        TweenMax.to(this.$refs.border1, 0.65, {
          top: '18px',
          right: '15px',
          width: '20px',
          rotation: 0,
          startAt: {
            rotation: -30
          },
          ease: Expo.easeInOut
        })
        TweenMax.to(this.$refs.border2, 0.65, {
          width: '15px',
          rotation: 0,
          ease: Expo.easeInOut
        })
        TweenMax.to(this.$refs.border3, 0.65, {
          top: '30px',
          right: '15px',
          width: '10px',
          rotation: 0,
          startAt: {
            rotation: 30
          },
          ease: Expo.easeInOut
        })
      })
    },
    closeMenu () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.menuFace, 0.7, {
          left: '100%',
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.menuDummy3, 0.7, {
          left: '100%',
          ease: Expo.easeOut,
          delay: 0.1
        })
        TweenMax.to(this.$refs.menuDummy2, 0.7, {
          left: '100%',
          ease: Expo.easeOut,
          delay: 0.2
        })
        TweenMax.to(this.$refs.menuDummy1, 0.7, {
          left: '100%',
          ease: Expo.easeOut,
          delay: 0.3
        })
        TweenMax.to(this.$refs.logo.$el, 0.7, {
          opacity: 0,
          y: 0,
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.over, 0.7, {
          height: 0,
          ease: Expo.easeOut
        })
        TweenMax.staggerTo('.TheNav_MenuContentListEng', 0.7, {
          opacity: 0,
          x: 0,
          ease: Expo.easeOut
        }, 0.02)
        TweenMax.staggerTo('.TheNav_MenuContentListJa', 0.7, {
          opacity: 0,
          x: 0,
          ease: Expo.easeOut
        }, 0.02)
        TweenMax.to(this.$refs.footer, 0.7, {
          y: 0,
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.produced, 0.7, {
          opacity: 0,
          y: 0,
          ease: Expo.easeOut
        })
        TweenMax.to('.TheNav_MenuContentListMark', 0.7, {
          opacity: 0,
          scale: 0,
          ease: Expo.easeOut
        })
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.TheNav
  &_Menu
    display none
    position fixed
    top 10px
    left 10px
    width calc(100% - 20px)
    height calc(100% - 20px)
    +large()
      top 20px
      left 20px
      width 300px
      height calc(100% - 40px)
      overflow hidden
  &_MenuDummy1
    position absolute
    top 0
    left 100%
    width 100%
    height 100%
    background #1B1B1B
    +large()
      left -100%
  &_MenuDummy2
    position absolute
    top 0
    left 100%
    width 100%
    height 100%
    background #171717
    +large()
      left -100%
  &_MenuDummy3
    position absolute
    top 0
    left 100%
    width 100%
    height 100%
    background #131313
    +large()
      left -100%
  &_MenuFace
    position absolute
    top 0
    left 100%
    width 100%
    height 100%
    background #0f0f0f
    +large()
      left -100%
  &_MenuContent
    position absolute
    top 0
    left 0%
    width 100%
    height 100%
    overflow hidden
  &_MenuContentLogo
    display inline-block
    position absolute
    top 15px
    left 30px
    font-size 25px
    font-weight bold
    white-space nowrap
    opacity 0
    +large()
      top 10px
      left 40px
      font-size largeFont25
      letter-spacing 1px
  &_MenuContentLogoShadow
    display inline-block
    color #555
  &_MenuContentLogoOver
    display inline-block
    position absolute
    top 0
    left 0
    width 100%
    height 0
    color #fff
    overflow hidden
  &_MenuContentList
    margin-top 145px
    +large()
      margin-top 160px
    a
      display block
      position relative
      margin-bottom 50px
      padding-left 67px
      +large()
        margin-bottom 70px
        padding-left 82px
  &_MenuContentListEng
    margin-left 60px
    font-size 16px
    font-weight bold
    letter-spacing 5px
    opacity 0
  &_MenuContentListJa
    margin-top 3px
    margin-left 25px
    font-size 12px
    letter-spacing 5px
    color #555
    opacity 0
  &_MenuContentListMark
    position absolute
    top 0
    bottom 10px
    left 35px
    margin auto
    width 8px
    height 8px
    background #555
    border-radius 5px
    transform scale(0)
    opacity 0
    +large()
      left 45px
      width 10px
      height 10px
  &_MenuContentFooter
    position absolute
    bottom -100px
    right 0
    left 0
    margin auto
    width 100%
    height 100px
    background #131313
    transform-origin bottom center
  &_MenuContentProduced
    position absolute
    bottom 8px
    left 30px
    height 14px
    text-align center
    color #555
    font-size 14px
    line-height 1
    letter-spacing 1.7px
    opacity 0
    +large()
      left 40px
      font-size 13px
  &_Switch
    position fixed
    top 10px
    right 10px
    width 50px
    height 50px
  &_SwitchDummy1
    position absolute
    top 0
    right 0
    width 100%
    height 100%
    background #1B1B1B
    transform scalex(0)
    transform-origin right center
  &_SwitchDummy2
    position absolute
    top 0
    right 0
    width 100%
    height 100%
    background #171717
    transform scalex(0)
    transform-origin right center
  &_SwitchDummy3
    position absolute
    top 0
    right 0
    width 100%
    height 100%
    background #131313
    transform scalex(0)
    transform-origin right center
  &_SwitchFace
    position absolute
    top 0
    right 0
    width 100%
    height 100%
    background #0f0f0f
    transform scalex(0)
    transform-origin right center
  &_SwitchContent
    position absolute
    top 0
    right 0%
    width 100%
    height 100%
  &_SwitchBorder1
    position absolute
    top 18px
    right 15px
    width 20px
    height 2px
    background #fff
    transform scalex(0)
    transform-origin right center
  &_SwitchBorder2
    position absolute
    top 24px
    right 15px
    width 15px
    height 2px
    background #fff
    transform scaleX(0)
    transform-origin right center
  &_SwitchBorder3
    position absolute
    top 30px
    right 15px
    width 10px
    height 2px
    background #fff
    transform scaleX(0)
    transform-origin right center
</style>


