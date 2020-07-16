<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="/img/banner1.jpg" alt=""></div>
        <div class="swiper-slide"><img src="/img/banner2.jpg" alt=""></div>
        <div class="swiper-slide"><img src="/img/banner3.jpg" alt=""></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";

export default {
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
    });
  },
  components: {
    
  }
};
</script>

<style>
.swiper-container {
  width: 100vw;
  height: 200px;
}
.swiper-container img{
    width: 100%;
    height: 100%;
}
</style>