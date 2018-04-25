<template lang="pug">
  .sorry(
    ref='sorry'
  )
    .tbc ご使用のブラウザには対応しておりません。ごめんなさいっっっ( ´ ; ω ; ` )
</template>

<script>
import {TweenMax, Expo} from 'gsap'

export default {
  mounted () {
    requestAnimationFrame(() => {
      TweenMax.to(this.$refs.sorry, 2, {
        opacity: 1,
        y: 0,
        startAt: {
          y: '30px'
        },
        ease: Expo.easeInOut
      })
    })
  },
  head: {
    title: 'Sorry...'
  },
  layout: 'poster'
}
</script>

<style lang="stylus" scoped>
.sorry
  display table
  padding 0 30px
  width 100%
  height 100%
  text-align center
  color #555
  font-size 18px
  font-weight bold
  opacity 0
</style>


