<template>
<div class="footer flex a-c j-s">
<img src="/img/icon-home.png" alt="">
<router-link to="/fenlei">
    <img src="/img/icon-catergry.png" alt="">
</router-link>
<img src="/img/icon-cart.png" alt="">
<img src="/img/icon-me.png" alt="">
</div>
</template>

<script>
export default {

}
</script>

<style>
.footer{
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 60px;
}

.footer img{
    width: 25vw;
}
</style>