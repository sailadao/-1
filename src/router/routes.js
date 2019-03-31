import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter)

export default [
  {
    path:'/msite',
    component:Msite,
    meta:{
      isShow:true
    }
  },
  {
    path:'/search',
    component: Search,
    meta:{
      isShow:true
    }
  },
  {
    path:'/order',
    component: Order,
    meta:{
      isShow:true
    }
  },
  {
    path:'/profile',
    component: Profile,
    meta:{
      isShow:true
    }
  },

  {
    path:'/',
    redirect:'/msite'
  }
]
