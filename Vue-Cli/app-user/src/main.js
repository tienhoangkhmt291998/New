import Vue from 'vue'
import App from './App.vue'
// import  { store } from './components/store/store'
import VueRouter from 'vue-router'
import { routers } from './router'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter ({
    routers
})

new Vue({
  el: '#app',
  // store,
  router,
  render: h => h(App),
})
