<template>
<div>
    <Header></Header>
    <Swiper></Swiper>
    <Navi></Navi>
    <router-link to="/buy?goodsid=111">商品</router-link>
    <router-link to="/buy?goodsid=112334525331">商品</router-link>
    <hr>
    <ul style="margin-left:40px;">
        <li v-for="(item, index) in provbinceList" :key="index">
            <router-link :to="'/city?pid='+item.id">{{item.name}}</router-link>
        </li>
    </ul>
    <Foot></Foot>
</div>
</template>

<script>
import Header from '@/components/Header'
import Swiper from "@/components/Swiper"
import Navi from "@/components/Navi"
import Foot from "@/components/Foot"
export default {
    async created() {
        let {data} = await this.$get('/data.json')
        console.log(data);
        this.provbinceList = data
    },
    components:{
        Swiper,Navi,Foot,Header
    },
    data() {
        return {
            provbinceList:['江苏','安徽']
        }
    },
}
</script>

<style>

</style>