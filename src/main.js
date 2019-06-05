import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import Filter from './common/filter'
import APlayer from '@moefe/vue-aplayer'

Vue.config.productionTip = false
Vue.use(APlayer, {
  defaultCover: 'https://audiovyvy.com/wp-content/themes/audio_quynh_ver_two/img/logo.png',
  productionTip: true
})
Vue.use(Vuetify)
Filter(Vue)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
