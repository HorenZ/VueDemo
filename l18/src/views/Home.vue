<template>
  <div class="home">
    <h1>{{firstName}}</h1>
    <h1>{{fullName}}</h1>
    <button @click="setAge(40)">测试</button>
    <h2>{{age}}</h2>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
let user = createNamespacedHelpers("user");
let { mapState, mapGetters, mapMutations, mapActions } = user;
// function mapState(arr) {
//   let obj = {};
//   arr.forEach(key => {
//     obj[key] = function() {
//       console.log(this);
//       return this.$store.state[key];
//     };
//   });
//   return obj;
// }

export default {
  async mounted() {
    let res = await this.getUserAge();
    console.log(res);
  },
  computed: {
    ...mapGetters(["fullName"]),
    ...mapState(["firstName", "age", "lastName"])
  },
  methods: {
    test() {
      this.$store.commit("setAge", 23);
    },
    ...mapMutations( ["setAge"]),
    ...mapActions(["getUserAge"])
  }
};
</script>

<style>
body {
  text-align: center;
}
</style>