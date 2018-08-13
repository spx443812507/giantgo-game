<template>
    <div>
        <header-menu></header-menu>
        <swiper></swiper>
        <game-title title="热门游戏"></game-title>
        <game-list :games="hotGames"></game-list>
        <game-title title="最新游戏"></game-title>
        <game-list :games="goodGames"></game-list>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderMenu from '@/components/HeaderMenu.vue'
import Swiper from '@/components/Swiper.vue'
import GameList from '@/components/GameList.vue'
import GameTitle from '@/components/GameTitle.vue'

export default {
  name: 'home',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components: {
    HeaderMenu,
    Swiper,
    GameList,
    GameTitle
  },
  computed: {
    ...mapGetters([
      'hotGames',
      'goodGames'
    ])
  },
  mounted () {

  }
}
</script>
<style lang="scss">

</style>
