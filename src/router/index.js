import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail.vue'
import Me from '@/pages/detail/Me.vue'
import Person from '@/pages/detail/Person.vue'
import weekend from '@/pages/home/components/weekend.vue'
import Bangdan from '@/pages/home/components/Bangdan'
import Login from '@/pages/Login/Login'
import Register from '@/pages/Login/Register'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/Me',
    name: 'Me',
    component: Me
  },
  {
    path: '/Person',
    name: 'Person',
    component: Person
  },
  {
    path: '/weekend',
    name: 'weekend',
    component: weekend
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Bangdan',
    name: 'Bangdan',
    component: Bangdan
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requireAuth: false
    }
  },
],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
