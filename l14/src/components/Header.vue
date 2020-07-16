<template>
  <div class="header flex j-s a-c">
    <div class="logo"></div>
    <div class="flex j-s a-c" style="background:#fff;padding:0 10px;">
      <div class="icon"></div>
      <input type="text" style="border:0;felx:1;height:30px;"/>
    </div>
    <div style="color:#eee">登录</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  height: 50px;
  background-color: #e1251b;
  padding: 0 10px;
}

.logo {
  width: 60px;
  height: 30px;
  background: url(/img/sprites.png) no-repeat 0 -108px / 200px 210px;
}
.icon {
  width: 21px;
  height: 30px;
  background: url(/img/sprites.png) no-repeat -60px -108px / 200px 210px;
}
</style>