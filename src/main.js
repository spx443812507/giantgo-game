import Vue from 'vue'
import 'lib-flexible'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/sanitize.css'
import '@/assets/css/iconfont.css'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
