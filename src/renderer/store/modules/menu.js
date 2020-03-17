import Cookies from 'js-cookie'


export default {
  state: {
    menuIndex: Number(Cookies.get('menuIndex'))
  },
  mutations: {
    setMenuIndex(state, menuIndex) {
      Cookies.set('menuIndex', menuIndex)
      state.menuIndex = menuIndex
    }
  },
  actions: {
    actionMenuIndex(context, menuIndex) {
      context.commit('setMenuIndex', menuIndex)
    }
  }
}