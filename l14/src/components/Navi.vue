<template>
<ul class="navi flex a-c j-s">
    <li v-for="(item,i) in list" :key="i">
        <img :src="'/img/nav'+i+'.png'" alt="">
        <router-link :to="'/detail/'+item+'/12'" tag="div">{{item}}</router-link>
    </li>
</ul>
</template>

<script>
export default {
    data() {
        return {
            list:['京东超时','数码电器','京东服饰','京东生鲜','9.9元拼','领劵','赚钱','PLUS会员']
        }
    },
}
</script>

<style>
.navi{
    padding: 10px 0;
    flex-wrap: wrap;
}
.navi li{
    width: 25vw;
    text-align: center;
    height: 25vw;
}
.navi li img {
    width: 60%;
    height: 60%;
}
</style>