import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import { createPersistedState, createSharedMutations } from 'vuex-electron'

// import modules from './modules'
import menu from './modules/menu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu
  },
  plugins: [
    createPersistedState({
      whitelist: ["actionMenuIndex"]
    }),
    // createSharedMutations()
  ],
  getters,
  strict: process.env.NODE_ENV !== 'production'
})
