<template>
  <div style="padding:20px;border:1px solid green;">
      counter:
      <button @click="innerCount--">-</button>
      {{innerCount}}
      <button @click="innerCount++">+</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            innerCount:this.count.mycount
        }
    },
    created() {
        this.$bus.$on('change',e=>{
            console.log(e);
        })
    },
    watch: {
        innerCount(val){
           this.count.mycount=val
        }
    },
    inject:["count"]
}
</script>

<style>

</style>