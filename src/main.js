import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible' // 动态添加meta标签
import { Button, Header, Field, Search, Swipe, SwipeItem, Tabbar, TabItem } from 'mint-ui'
import './styles/common.less'
import './styles/iconfont.css'


// 注册组件
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Field.name, Field)
Vue.component(Search.name, Search)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
