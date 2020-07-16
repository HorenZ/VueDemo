<template>
<swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
      <img src="/img/banner1.jpg" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="/img/banner2.jpg" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="/img/banner3.jpg" alt />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 2000
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
        // Some Swiper option/callback...
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {},
  components: {}
};
</script>

<style>
.swiper-container {
  width: 100vw;
  height: 200px;
}
.swiper-container img {
  width: 100%;
  height: 100%;
}
</style>