import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import './mixins'

Vue.config.productionTip = false


Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')