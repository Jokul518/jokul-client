import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/view/Home').default
    },
    {
      path: '/category',
      name: 'category',
      component: require('@/view/Category').default
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: require('@/view/TimeLine').default
    },
    {
      path: '/about',
      name: 'about',
      component: require('@/view/About').default
    },
    {
      path: '/write',
      name: 'write',
      component: require('@/view/Write').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
