// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import VueRouter from 'vue-router'
import routes from './routers'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './common/stylus/index.styl'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(VueAwesomeSwiper)
Vue.use(axios)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = true
const router = new VueRouter({
  mode: 'hash',
  routes,
  linkActiveClass: 'active'
})
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
