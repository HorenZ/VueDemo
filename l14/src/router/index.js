import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const router = new VueRouter({
    routes: [{
        path: '/',
        meta: { title: '首页' },
        component: () =>
            import ('@/page/Home')
    }, {
        path: '/fenlei',
        meta: { title: '分类' },
        component: () =>
            import ('@/page/Classify')
    }, {
        // 动态路径参数 restful风格 $route.props
        path: '/detail/:id/:age',
        props: true, //组件可以使用props接受name
        meta: { title: '详情' },
        component: () =>
            import ('@/page/Detail')
    }, {
        // 动态路径参数 restful风格 $route.query
        path: '/buy',
        meta: { title: '详情' },
        component: () =>
            import ('@/page/Buy')
    }, {
        // 动态路径参数 restful风格 $route.query
        path: '/city',
        meta: { title: '城市' },
        component: () =>
            import ('@/page/City')
    }]
})

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router