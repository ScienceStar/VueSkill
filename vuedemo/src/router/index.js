import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import welcome from '@/components/welcome'
import knowledge from '@/components/knowledge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/welcom',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: knowledge
    }
  ]
})
