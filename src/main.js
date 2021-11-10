import Vue from 'vue'
import Chakra, { CThemeProvider } from '@chakra-ui/vue'
import router from "./router/index"
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Chakra)

new Vue({
  router,
  render: h => h(CThemeProvider, [h(App)]),
}).$mount('#app')
