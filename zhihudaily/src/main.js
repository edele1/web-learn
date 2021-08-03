import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { Carousel,Button, Select,Switch, } from 'element-ui';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

// Vue.use(Carousel)
// Vue.use(Select)
// Vue.use(Button)
// Vue.use(Switch)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
