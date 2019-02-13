import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/components/Index')
    },
    {
      path: '/aboutUS',
      name: 'aboutUS',
      component: () => import('@/pages/aboutUS')
    },
    {
      path: '/:name',
      name: 'InfoList',
      component: () => import('@/components/InfoList'),
      children: [
        {
          path: ':id',
          component: () => import('@/components/EssayDetail')
        }
      ]
    }
  ]
})
