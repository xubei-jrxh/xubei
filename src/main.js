import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'
import router from './router'
import Carousel from '@/components/Carousel'
Vue.use(element)

Vue.config.productionTip = false

Vue.component('Carousel', Carousel)

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: (h) => h(App),
  router,
}).$mount('#app')
