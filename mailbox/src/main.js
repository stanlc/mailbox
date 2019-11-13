import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/element.js'
import VueAMap from 'vue-amap';

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '632fc907671acd23df063076928b7747',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Geocoder','AMap.Scale','Geocoder' ,'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
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
