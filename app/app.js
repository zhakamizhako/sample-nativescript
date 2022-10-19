import Vue from 'nativescript-vue'

import App from './App.vue'
import {routes} from './routes'
import Navigator from 'nativescript-vue-navigator'
Vue.use(Navigator, {routes})

new Vue({
  render: (h) => h(App),
}).$start()
