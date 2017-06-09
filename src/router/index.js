import Vue from 'vue'
import Router from 'vue-router'
import Workout from '@/components/Workout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Workout',
      component: Workout
    }
  ]
})
