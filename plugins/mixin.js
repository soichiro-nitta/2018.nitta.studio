import Vue from 'vue'

Vue.mixin({
  methods: {
    $imageOnLoad(src, func) {
      const img = new Image()
      img.onload = () => {
        func()
      }
      img.src = src
    },
    $delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  }
})
