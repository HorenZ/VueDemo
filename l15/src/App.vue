<template>
  <div id="app">
    <div class="zzz">哈哈哈哈哈</div>
    <div class="aaa">哈哈哈哈哈</div>

    <router-link to="/About">带啊是多久</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
$fc: purple;
#app {
  color: $fc;
  .aaa {
    font: {
      size: 49px;
      family: 楷体;
      weight: bold;
    }
  }
  .zzz {
    border: red solid 1px;
  }

  // &:hover {
  //   background: red;
  // }
}
</style>