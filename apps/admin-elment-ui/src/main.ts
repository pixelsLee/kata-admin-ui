import Vue from 'vue'
import router from './router'
import pinia from './stores'
import App from './App.vue'
import 'virtual:svg-icons-register'

// 全局组件样式
import 'element-ui/packages/theme-chalk/src/tooltip.scss'
import 'element-ui/packages/theme-chalk/src/popover.scss'
// element组件全局设置
Vue.prototype.$ELEMENT = { size: 'small' }

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount('#app')

// Object.assign(window, { router, pinia })
