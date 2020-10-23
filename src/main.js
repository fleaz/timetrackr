import Vue from 'vue'
import App from './App.vue'
import { Icon, Tooltip } from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'

Vue.use(Icon)
Vue.use(Tooltip)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
