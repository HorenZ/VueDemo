Vue.component("sb-menu", {
    props: ['menulist'],
    template: `
    <ul class="menu">
    <li v-for="(item,i) in menulist" @click="openMenuIndex = i" :class="{active:openMenuIndex===i}">
        <div class="title">
            <i class="iconfont " :class="item.icon"></i>{{item.name}}
        </div>
        <!-- vue过度动画 transition-->
        <transition name="fade">
            <ul class="list" v-show="openMenuIndex == i">
                <li @click="activeItemIndex = j" v-for="(item1,j) in item.children" :class="{active:activeItemIndex===j && openMenuIndex===i}">{{item1.name}}</li>
            </ul>
        </transition>
    </li>
</ul>
    `,
    watch: {
        openMenuIndex() {
            this.activeItemIndex = -1
        }
    },
    data() {
        return {
            openMenuIndex: 0,
            activeItemIndex: 0,
        }
    },
})