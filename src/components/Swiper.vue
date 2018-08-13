<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
            <img src="https://images.quickgame.top/2018042405055228162.jpg" class="item-img">
        </swiper-slide>
        <swiper-slide>
            <img src="https://images.quickgame.top/2018042413443740495.jpg" class="item-img">
        </swiper-slide>
        <swiper-slide>
            <img src="https://images.quickgame.top/2018042903174343721.jpg" class="item-img">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Swiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.slideTo(1, 1000, false)
  }
}
</script>

<style scoped lang="scss">
    .item-img {
        display: block;
        height: 264px;
        width: 100%;
    }
</style>
