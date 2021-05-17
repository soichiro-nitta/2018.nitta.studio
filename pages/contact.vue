<template lang="pug">
  .contact(
    ref='root'
  )
    .section
      .helloEng Let's Play Together
      .helloJa お仕事募集しています♪
    .separator
    .section
      .subTitle Say Hello!!
    .relative
      .section
        a.email(
          href='mailto:hello@nitta.studio'
        )
          span.hidden hello
          span @nitta.studio
      .absolute
        a.email(
          href='mailto:hello@nitta.studio'
        )
          span.hello hello
          span.hidden @nitta.studio
          .underline
    .section
      .description ご依頼などございましたら、上記よりお気軽にご連絡ください。デザイン・開発のほか、ロゴ・写真・映像など、素材の製作も承っております。なお、実績公開NGのお仕事は受け付けておりません。
    .section
      .produced Produced by Soichiro Nitta.
</template>

<script>
import { mapGetters } from 'vuex'
import { TweenMax, Elastic, Expo, Back } from 'gsap'

export default {
  computed: {
    ...mapGetters({
      completed: 'firstview/completed'
    })
  },
  watch: {
    completed() {
      document.getElementById('scrollArea').scrollTop = 0
      requestAnimationFrame(() => {
        TweenMax.to('.hello', 4, {
          opacity: 1,
          ease: Elastic.easeOut.config(0.8, 0.3)
        })
        TweenMax.to('.hello', 0.025, {
          color: '#555',
          startAt: {
            color: '#fff'
          },
          ease: Expo.easeOut,
          repeat: 41,
          yoyo: true,
          repeatDelay: 0.025
        })
        TweenMax.to('.underline', 3, {
          scaleX: 1,
          ease: Elastic.easeOut.config(1, 0.3),
          delay: 1
        })
        TweenMax.staggerTo(
          '.section',
          5,
          {
            y: 0,
            opacity: 1,
            ease: Elastic.easeOut.config(1, 0.3),
            startAt: {
              y: '40px',
              opacity: 0
            },
            delay: 0.2
          },
          0.1
        )
        TweenMax.staggerTo(
          '.separator',
          5,
          {
            scaleX: 1,
            x: 0,
            opacity: 1,
            transformOrigin: 'left center',
            ease: Elastic.easeOut.config(1, 0.3),
            startAt: {
              scaleX: 0,
              x: '-20px',
              opacity: 0
            },
            delay: 0.2
          },
          0.1
        )
      })
    }
  },
  mounted() {
    document.getElementById('scrollArea').scrollTop = 0
  },
  head: {
    title: 'Contact',
    meta: [
      { property: 'og:title', content: 'Contact / Nitta.Studio🖕🏻' },
      { property: 'og:url', content: 'https://2018.nitta.studio/contact' },
      { property: 'twitter:title', content: 'Contact / Nitta.Studio🖕🏻' }
    ]
  },
  transition: {
    appear: false,
    enter(el, done) {
      requestAnimationFrame(() => {
        TweenMax.to('.hello', 1, {
          opacity: 1,
          ease: Expo.easeOut
        })
        TweenMax.to('.hello', 0.025, {
          color: '#555',
          startAt: {
            color: '#fff'
          },
          ease: Expo.easeOut,
          repeat: 25,
          yoyo: true,
          repeatDelay: 0.025
        })
        TweenMax.to('.underline', 3, {
          scaleX: 1,
          ease: Elastic.easeOut.config(1, 0.3),
          delay: 0.5
        })
        TweenMax.staggerTo(
          '.section',
          1,
          {
            y: 0,
            opacity: 1,
            ease: Back.easeOut.config(3),
            startAt: {
              y: '40px',
              opacity: 0
            },
            delay: 0.2
          },
          0.1,
          () => {
            done()
          }
        )
        TweenMax.staggerTo(
          '.separator',
          1,
          {
            scaleX: 1,
            x: 0,
            opacity: 1,
            transformOrigin: 'left center',
            ease: Back.easeOut.config(3),
            startAt: {
              scaleX: 0,
              x: '-20px',
              opacity: 0
            },
            delay: 0.2
          },
          0.1
        )
      })
    },
    leave(el, done) {
      requestAnimationFrame(() => {
        TweenMax.to('.hello', 0.7, {
          opacity: 0,
          ease: Back.easeIn.config(5)
        })
        TweenMax.to('.underline', 0.7, {
          scaleX: 0,
          ease: Back.easeIn.config(5)
        })
        TweenMax.staggerTo(
          '.section',
          0.7,
          {
            y: '-40px',
            opacity: 0,
            ease: Back.easeIn.config(3)
          },
          0.1,
          () => {
            done()
          }
        )
        TweenMax.staggerTo(
          '.separator',
          0.7,
          {
            scaleX: 0,
            x: '20px',
            opacity: 0,
            transformOrigin: 'right center',
            ease: Back.easeIn.config(3)
          },
          0.1
        )
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.contact
  .section
    opacity 0
  .subTitle
    color #555
    font-size 22px
    font-weight bold
    +large()
      font-size largeFont22
  .separator
    margin 50px 0
    width 15px
    height 3px
    background #444
    opacity 0
    +large()
      margin 65px 0
  .helloEng
    font-size 22px
    font-weight bold
    +large()
      font-size largeFont22
  .helloJa
    font-size 13px
    letter-spacing 5px
    +large()
      font-size largeFont13
  .description
    margin-top 30px
    font-size 13px
    line-height 2
    +large()
      margin-top 45px
      font-size largeFont13
  .email
    display inline-block
    position relative
    margin-top 30px
    color #fff
    font-size 18px
    line-height 2
    letter-spacing 1.5px
    +large()
      margin-top 45px
      font-size largeFont18
  .relative
    position relative
  .absolute
    position absolute
    top 0
    left 0
  .underline
    position absolute
    left 0
    bottom 5px
    width 100%
    height 1px
    background #555
    transform scaleX(0)
    transform-origin left center
  .hello
    opacity 0
    color #fff
  .hidden
    opacity 0
  .produced
    margin-top 43.5px
    color #555
    font-size 14px
    line-height 1
    letter-spacing 1.7px
    +large()
      margin-top 63.5px
      font-size largeFont14
</style>
