<template>
    <div>
        <header-menu></header-menu>
        <game-title title="热门游戏"></game-title>
        <game-list :games="hotGames"></game-list>
        <game-title title="最新游戏"></game-title>
        <game-list :games="goodGames"></game-list>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderMenu from '@/components/HeaderMenu.vue'
import GameList from '@/components/GameList.vue'
import GameTitle from '@/components/GameTitle.vue'

export default {
  name: 'home',
  components: {
    HeaderMenu,
    GameList,
    GameTitle
  },
  computed: {
    ...mapGetters([
      'hotGames',
      'goodGames'
    ])
  }
}
</script>
<style lang="scss">

</style>
