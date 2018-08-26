<template>
    <div class="layout-inside">
        <header-menu></header-menu>
        <main>
            <game-list :games="bestGames"></game-list>
        </main>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderMenu from '@/components/HeaderMenu.vue'
import GameList from '@/components/GameList.vue'

export default {
  name: 'bestGame',
  data () {
    return {}
  },
  components: {
    HeaderMenu,
    GameList
  },
  computed: {
    ...mapGetters([
      'bestGames'
    ])
  },
  mounted () {

  }
}
</script>
<style lang="scss">

</style>
