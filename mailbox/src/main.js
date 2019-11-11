import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/element.js'
var echarts = require('echarts');
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  baseURL:'http://192.168.60.190:11000'
})

let AUTH_TOKEN=(function(){
  return localStorage.getItem("token");
})();

Vue.prototype.$http.defaults.headers.common["x-user-token"] = AUTH_TOKEN; //在请求头带上token

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
