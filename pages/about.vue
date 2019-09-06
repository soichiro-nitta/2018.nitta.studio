<template lang="pug">
  .about(
    ref='root'
  )
    .section
      .helloEng I'm a Web Designer
      .helloJa 開発もイケちゃうデザイナー
    .separator
    .section
      .intro 2012年、受託会社のインターンを経て独立。デザインとエンジニアリングを両立してきました。デザインをデータにおこすことはせず、コードを書きながらデザインしていきます。制作の全行程を１人の人間が担うことで、細かなインタラクティブや、高い品質を提供することができます。
      .thumb
        img(
          :src='src'
          ref='thumb'
        )
        canvas#canvasThumb
    .separator
    .section
      .subTitle 01. Skillset
      ul.skillset
        li HTML5
          span  /
          |  Pug
        li CSS3
          span  /
          |  Stylus
          span  /
          |  SASS
          span  /
          |  SCSS
        li JavaScript
          span   /
          |  TypeScript
          span   /
          |  React
          span   /
          |  Next
          span   /
          |  Gatsby
          span  /
          |  Vue
          span   /
          |  Nuxt
          span  /
          |  Riot
          span  /
          |  Node
        li GSAP(TweenMax)
          span  /
          |  CSS Animation
        li Go
          span  /
          |  PHP
          span  /
          |  CodeIgniter
          span  /
          |  WordPress
          span  /
          |  MySQL
        li Netlify
          span  /
          |  Heroku
          span  /
          |  Firebase
          span  /
          |  GCP
          span  /
          |  AWS
        li Git
          span  /
          |  GitHub
          span  /
          |  CircleCI 2.0
        li Terminal
          span  /
          |  Zsh
          span  /
          |  tmux
          span  /
          |  Vim
          span  /
          |  VSCode
        li Sketch
          span  /
          |  Photoshop
          span  /
          |  Illustrator
        li Slack
          span  /
          |  Discord
        li etc...
    .separator
    .section
      .subTitle 02. Welcome
      .welcome お仕事募集中😻
        br
        nuxt-link(
          to='/contact'
        ) コチラ
        | からお問い合わせください！
    .separator
    .section
      .subTitle 03. Social
      .social
        a(
          :href='url.twitter',
          target='_blank'
        ) Twitter
        a(
          :href='url.instagram',
          target='_blank'
        ) Instagram
        a(
          :href='url.facebook',
          target='_blank'
        ) Facebook
        a(
          :href='url.github',
          target='_blank'
        ) GitHub
</template>

<script>
import { mapGetters } from 'vuex'
import { TweenMax, Elastic, Expo, Back } from 'gsap'
import { url } from '~/assets/data/config.json'

export default {
  data() {
    return {
      src: '/thumbnail.jpg',
      url: url
    }
  },
  computed: {
    ...mapGetters({
      completed: 'firstview/completed'
    })
  },
  watch: {
    async completed() {
      document.getElementById('scrollArea').scrollTop = 0
      await this.$delay(300)
      requestAnimationFrame(() => {
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
            }
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
            }
          },
          0.1
        )
      })
    }
  },
  mounted() {
    document.getElementById('scrollArea').scrollTop = 0
    this.$imageOnLoad(this.src, () => {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.thumb, 1.5, {
          opacity: 1,
          ease: Expo.easeInOut
        })
      })
    })
    const canvas = document.getElementById('canvasThumb')
    const ctx = canvas.getContext('2d')

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.onresize = resize

    function noise(ctx) {
      const w = ctx.canvas.width
      const h = ctx.canvas.height
      const idata = ctx.createImageData(w, h)
      const buffer32 = new Uint32Array(idata.data.buffer)
      const len = buffer32.length

      let i = 0
      for (; i < len; ) {
        buffer32[i++] = ((255 * Math.random()) | 0) << 24
      }

      ctx.putImageData(idata, 0, 0)
    }

    let toggle = true
    const loop = () => {
      toggle = !toggle
      if (toggle) {
        requestAnimationFrame(loop)
        return
      }
      noise(ctx)
      requestAnimationFrame(loop)
    }
    loop()
  },
  head: {
    title: 'About',
    meta: [
      { property: 'og:title', content: 'About | Nitta.Studio🖕🏻' },
      { property: 'og:url', content: 'https://nitta.studio/about' },
      { property: 'twitter:title', content: 'About | Nitta.Studio🖕🏻' }
    ]
  },
  transition: {
    appear: false,
    enter(el, done) {
      requestAnimationFrame(() => {
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
            }
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
            }
          },
          0.1
        )
      })
    },
    leave(el, done) {
      requestAnimationFrame(() => {
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
.about
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
    letter-spacing 2.5px
    +large()
      font-size largeFont13
  .intro
    font-size 13px
    line-height 2
    +large()
      font-size largeFont13
  .thumb
    position relative
    margin-top 30px
    width 100%
    height 150px
    +large()
      margin-top 45px
      height 300px
    img
      width 100%
      height 100%
      object-fit cover
      opacity 0
    #canvasThumb
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      opacity 0.32
  .skillset
    margin-top 30px
    +large()
      margin-top 45px
    li
      margin-bottom 6.5px
      font-size 13px
      line-height 2
      +large()
        font-size largeFont13
      span
        color #555
  .welcome
    margin-top 30px
    font-size 13px
    line-height 2
    +large()
      margin-top 45px
      font-size largeFont13
    a
      display inline-block
      position relative
    a:after
      content ''
      position absolute
      left 0
      bottom 5px
      width 100%
      height 1px
      background #555
  .social
    margin-top 30px
    font-size 13px
    +large()
      margin-top 45px
      font-size largeFont13
    a
      display inline-block
      position relative
      margin-right 15px
      line-height 2
    a:after
      content ''
      position absolute
      left 0
      bottom 5px
      width 100%
      height 1px
      background #555
</style>
