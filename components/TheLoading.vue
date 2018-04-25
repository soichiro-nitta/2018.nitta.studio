<template lang="pug">
  .TheLoading(
    v-if='loading'
  ) loading
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.TheLoading
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background rgba(255, 255, 255, .8)
  text-align center
  pdading-top 200px
  font-size 30px
</style>

