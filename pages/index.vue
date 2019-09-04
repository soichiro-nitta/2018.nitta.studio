<template lang="pug">
  .home(
    ref='root'
  )
    .section
      .helloEng Hello World!!
      .helloJa はろーわーるど！
    .separator
    .section
      .nameEng Soichiro Nitta
      h1.nameJa 新田 聡一郎 ({{age}})
    .separator
    .section
      .subTitle 01. Design x Develop
      .intro 1994年生まれ埼玉県在住、フリーランスのデザイナー兼デベロッパー。JavaScriptでのSPA開発、デザイン、2Dアニメーションが得意。服や靴はいつも同じものを何着もまとめ買い、食事は玄米食で添加物NG、トレーニングは毎日欠かしません！ 新海誠作品、BUMP OF CHICKEN、RADWIMPSが好き！😸
        br
        br
        nuxt-link(
          to='/about'
        ) もっと詳しく！
    .separator
    .section
      .subTitle 02. History
      ul.history
        li IQUE株式会社インターン@恵比寿
          .date Dec. 2012 ~
        li 東京成徳大学高等学校卒業
          .date Mar. 2013
        li フリーとして独立、代理店と提携
          .date Apr. 2013 ~
        li 法人化、事件発生
          .date Nov. 2014 ~ Feb. 2015
        li フリーランス@渋谷
          .date Mar. 2015 ~ Dec. 2017
        li フリーランス@埼玉
          .date Jan. 2018 ~
        li フリーランス@神戸
          .date Aug. 2018 ~
        li フリーランス@埼玉
          .date June. 2019 ~
</template>

<script>
import { mapGetters } from 'vuex'
import { TweenMax, Elastic, Back } from 'gsap'

export default {
  computed: {
    age() {
      const yourBirthDay = {
        year: 1994,
        month: 12,
        date: 26
      }
      const birthDate = new Date(
        yourBirthDay.year,
        yourBirthDay.month - 1,
        yourBirthDay.date
      )
      const y2 = birthDate
        .getFullYear()
        .toString()
        .padStart(4, '0')
      const m2 = (birthDate.getMonth() + 1).toString().padStart(2, '0')
      const d2 = birthDate
        .getDate()
        .toString()
        .padStart(2, '0')
      const today = new Date()
      const y1 = today
        .getFullYear()
        .toString()
        .padStart(4, '0')
      const m1 = (today.getMonth() + 1).toString().padStart(2, '0')
      const d1 = today
        .getDate()
        .toString()
        .padStart(2, '0')
      const age = Math.floor(
        (Number(y1 + m1 + d1) - Number(y2 + m2 + d2)) / 10000
      )
      return age
    },
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
  },
  head: {
    title: 'Home',
    meta: [
      { property: 'og:title', content: 'Home | Nitta.Studio🖕🏻' },
      { property: 'og:url', content: 'https://nitta.studio/' },
      { property: 'twitter:title', content: 'Home | Nitta.Studio🖕🏻' }
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
.home
  .section
    opacity 0
  .helloEng
    font-size 22px
    font-weight bold
    +large()
      font-size largeFont22
  .helloJa
    font-size 13px
    letter-spacing 4.5px
    +large()
      font-size largeFont13
  .nameEng
    font-size 30px
    font-weight bold
    +large()
      font-size largeFont30
  .nameJa
    margin 0
    font-size 15px
    font-weight bold
    letter-spacing 8px
    +large()
      font-size largeFont15
  .separator
    margin 50px 0
    width 15px
    height 3px
    background #444
    opacity 0
    +large()
      margin 65px 0
  .subTitle
    color #555
    font-size 22px
    font-weight bold
    +large()
      font-size largeFont22
  .intro
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
  .history
    margin-top 30px
    +large()
      margin-top 45px
    li
      margin-bottom 20px
      font-size 13px
      line-height 2
      +large()
        font-size largeFont13
      .date
        margin-top 5px
        color #555
        line-height 1
        +large()
          margin-top 10px
</style>
