import Vue from 'vue'
import App from './App'

import router from './router'
import Header from './components/Header/Header'

Vue.component('Header', Header)

new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<App/>',
  router
})
