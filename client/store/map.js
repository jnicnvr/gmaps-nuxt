export const state = () => ({
  locations: [],
})

export const mutations = {
  SET_LOCATION(state, payload) {
    state.locations = payload
    // state.locations.push(payload)
  }
}

export const actions = {
  async SET_LOCATION({ commit }, payload) {
    commit('SET_LOCATION', payload)
  }
}

export const getters = {
  getLocation: state => state.locations
}