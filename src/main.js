import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//引入vant
import { Swipe, SwipeItem } from "vant";
import { Tab, Tabs } from "vant";



//1:引入第三方组件库 mint-ui
//1.1完成引入所有组件
import MintUI from "mint-ui";
//1.2单引入mint-ui样式文件
import "mint-ui/lib/style.css";
//引入vant 样式css
import "vant/lib/index.css";
//1.3将mint-ui注册vue
Vue.use(MintUI)

//将vant 引入vue
Vue.use(Swipe).use(SwipeItem);
Vue.use(Tab).use(Tabs);
//1.4可以引入图标组件


//main.js 配置axios
// 1.5：引入axios库
import axios from "axios";
// 1.6:配置请求时保存session信息
axios.defaults.withCredentials=true
// 1.7：配置请求基础路径
axios.defaults.baseURL="http://127.0.0.1:6767/"
//注意：地址栏请输必须!!!!!!
//http://127.0.0.1:8080/!!!
//如果地址  http://localhost 就会报错
// 1.8：注册
Vue.prototype.axios=axios;




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
