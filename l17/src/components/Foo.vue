<template>
  <div style="padding:20px;border:1px solid blue;">
    Foo:
    <h2>{{$store.state.nickname}}</h2>
    <button @click="zz">测试</button>
  </div>
</template>

<script>
export default {
  methods: {
    zz() {
      this.$bus.$emit("change", 200);
    }
  },
  computed: {
    nickname() {
      return this.$store.state.nickname;
    }
  }
};
</script>

<style>
</style>