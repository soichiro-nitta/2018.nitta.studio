export const state = () => ({
  loaded: false
})

export const getters = {
  loaded: state => state.loaded
}

export const mutations = {
  setLoaded (state) {
    state.loaded = true
  }
}
