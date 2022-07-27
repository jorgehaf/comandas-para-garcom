import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import enums from '@/Enums.js'

const plugin = {
  install() {
    Vue.prototype.$enums = enums
  }
}

Vue.config.productionTip = false
Vue.use(plugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')