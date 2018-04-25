export const state = () => ({
  started: false,
  painted: false,
  completed: false,
  killed: false
})

export const getters = {
  started: state => state.started,
  painted: state => state.painted,
  completed: state => state.completed,
  killed: state => state.killed
}

export const mutations = {
  start (state) {
    state.started = true
  },
  paint (state) {
    state.painted = true
  },
  complete (state) {
    state.completed = true
  },
  kill (state) {
    state.killed = true
  }
}
