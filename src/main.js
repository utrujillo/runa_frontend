import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiceD6, faEye, faEdit, faTimes, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import routes from '@/router/routes.js'

library.add(faDiceD6, faEye, faEdit, faTimes, faCircleNotch)

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

const router = new VueRouter({ routes: routes, mode: 'history' })

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
