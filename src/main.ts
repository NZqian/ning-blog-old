import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueCookies from "vue-cookies"

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueCookies)

Vue.prototype.userid = 0 //0: hq, 1: nzq
Vue.prototype.serverAddr = "http://114.115.138.166:443"
/*
import config from "@/components/Config.vue"
Vue.prototype.config = config
*/
