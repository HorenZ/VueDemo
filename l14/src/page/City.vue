<template>
  <div>
      <ul>
          <li v-for="(item, index) in cityList" :key="index">
              {{item.name}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            cityList:[]
        }
    },
    computed: {
        pid(){
            return this.$route.query.pid
        }
    },
    async created() {
        let {data} = await this.$get('/data.json')
        this.cityList = data.find(r=>r.id===parseInt(this.pid)).children
    },
}
</script>

<style>

</style>