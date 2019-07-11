<template lang="pug">
  .TheAudio
    audio(
      src='/click.mp3',
      :autoplay='$device.isMobile',
      id='sound',
      @canplay='canplaySound'
    )
    audio(
      src='/bgm.mp3',
      loop,
      id='bgm',
      @canplay='canplayBgm',
      v-if='!$device.isMobile'
    )
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      loadedSound: false,
      loadedBgm: false
    }
  },
  methods: {
    canplaySound() {
      this.loadedSound = true
      if (this.$device.isMobile) this.setLoaded()
      if (this.loadedBgm) this.setLoaded()
    },
    canplayBgm() {
      this.loadedBgm = true
      if (this.loadedSound) this.setLoaded()
    },
    ...mapMutations({
      setLoaded: 'audio/setLoaded'
    })
  }
}
</script>

<style lang="stylus" scoped>
.TheAudio
  position absolute
</style>
