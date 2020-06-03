import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyASPnMx0424fYtAcg_2jVxGQcmNNGCSUV4"
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

