<template>
    <div class="layout-home">
        <header-menu></header-menu>
        <main>
            <adsense
                    ad-client="ca-pub-7524637416419319"
                    ad-slot="5289144768"
                    ad-style="display: block"
                    ad-format="auto">
            </adsense>
            <game-title title="热门游戏" link-name="hot"></game-title>
            <game-list :games="hotGames"></game-list>
            <game-title title="最新游戏" link-name="best"></game-title>
            <game-list :games="bestGames"></game-list>
        </main>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Adsense from '@/components/Adsense.vue'
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
    Adsense,
    HeaderMenu,
    Swiper,
    GameList,
    GameTitle
  },
  computed: {
    ...mapGetters([
      'hotGames',
      'bestGames'
    ])
  },
  mounted () {
    this.$store.dispatch('getHotGames')
    this.$store.dispatch('getBestGames')
  }
}
</script>
<style lang="scss">
</style>
