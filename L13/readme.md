# 自定义指令
el 代表 指令所在的DOM对象
binding 代表 指令相关的绑定数据如修饰符、参数名、参数值

```
<input type="text" v-focus.trim='zz'>

Vue.directive('focus', function(el, binding){
    if(binding.modifiers.trim){

    }

    binding.expression
    binding.value

    el.focus()
})
```

# 自定义插件 要求一个有install的方法的对象，Vue使用use方法引用插件

```
    let plugin={
        install:function(Vue,options){

        }
    }

    Vue.use(plugin)
```

# 路由
```
    <router-link to='/'>首页</router-link>
    <router-view></router-view>
```
编程式导航      this.$router.push('/')
获取路由信息    this.$route
```
import Vue from 'vue'
import App from './App.vue'
import VueRotuer from 'vue-router'
Vue.use(VueRotuer)

import Home from './views/Home'
import User from './views/User'

new Vue({
    router: new VueRotuer({
        routes: [{
            path: '/',
            component: Home
        }, {
            path: '/user',
            component: User
        }]
    })
}).$mount('#app')

```