import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
Vue.config.productionTip = false
import './mixin'
import store from './store'
Vue.prototype.$bus = new Vue()
Vue.use(Vuex)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')