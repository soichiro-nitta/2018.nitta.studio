<template lang="pug">
  .TheFirstview(
    v-if='!killed'
  )
    TheFirstviewOpening
    TheFirstviewLoading
    TheFirstviewStart
</template>

<script>
import {mapGetters} from 'vuex'
import TheFirstviewOpening from '~/components/TheFirstviewOpening.vue'
import TheFirstviewStart from '~/components/TheFirstviewStart.vue'
import TheFirstviewLoading from '~/components/TheFirstviewLoading.vue'

export default {
  components: {
    TheFirstviewOpening,
    TheFirstviewStart,
    TheFirstviewLoading
  },
  computed: {
    ...mapGetters({
      killed: 'firstview/killed'
    })
  }
}
</script>

<style lang="stylus" scoped>
.TheFirstview
  position absolute
  top 0
  width 100%
  height 100%
</style>


