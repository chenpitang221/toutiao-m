import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './stylee/index.less'
import './stylee/icon.less'
// 方式3 全部加入加入核心组件库
import Vant from 'vant'
import 'vant/lib/index.css'
// 注册使用vant组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
