const state = {
  menuIndex: null
}

const getters = {
  getMenuIndex(state) {
    return state.menuIndex
  },
}
const mutations = {
  setMenuIndex(state, menuIndex) {
    state.menuIndex = menuIndex
  },

}

const actions = {
  //   someAsyncTask({ commit }) {
  //     // do something async
  //     commit('INCREMENT_MAIN_COUNTER')
  //   }
}

export default {
  getters,
  state,
  mutations,
  actions
}
