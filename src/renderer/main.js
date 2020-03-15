import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import './assets/font/iconfont/iconfont.css'
import './assets/css/animation.css'
import './assets/css/common.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

/**
 * electron 中文网
 * https://wizardforcel.gitbooks.io/electron-doc/content/faq/electron-faq.html
 */
