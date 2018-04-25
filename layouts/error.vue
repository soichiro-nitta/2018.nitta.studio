<template lang="pug">
  .error(
    ref='error'
  )
    .tbc
      | エラーが発生しています...！
      br
      | 更新してみてねm(_ _)m
</template>

<script>
export default {
  mounted () {
    this.$router.replace({ path: '/' })
  }
}
</script>

<style lang="stylus" scoped>
.error
  display table
  margin 0 auto !important
  width 100%
  height 100%
  text-align center
  color #fff
  font-size 16px
  font-weight bold
  line-height 2
  +large()
    font-size 20px
</style>
