import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/aboutUS',
      name: 'aboutUS',
      component: () => import('@/pages/aboutUS')
    },
    {
      path: '/:name',
      name: 'InfoList',
      component: () => import('@/components/InfoList')
      // children: [
      //   {
      //     path: ':id',
      //     component: () => import('@/components/InfoDetail')
      //   }
      // ]
    }
  ]
})
