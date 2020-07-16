<template>
<div>
{{goodsid}}
</div>
</template>

<script>
export default {
    computed: {
        goodsid(){
            return this.$route.query.goodsid
        }
    },
}
</script>

<style>

</style>