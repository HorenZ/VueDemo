<template>
  <div style="padding:20px;border:1px solid red;">
    show:
    
    <h2>{{nickname}}</h2>
    <button @click="update">修改</button>
    <Counter></Counter>
  </div>
</template>

<script>
import Counter from "../components/Counter";

export default {
  computed: {
    nickname() {
      return this.$store.state.nickname;
    }
  },
  methods: {
    update(){
      this.$store.commit('setnickname','Ace')
    }
  },
  components: {
    Counter
  }
};
</script>

<style>
</style>