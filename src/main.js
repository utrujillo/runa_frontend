import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import routes from '@/router/routes.js'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

const router = new VueRouter({ routes: routes, mode: 'history' })

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
