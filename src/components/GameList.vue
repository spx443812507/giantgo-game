<template>
    <div class="card-wrapper">
        <game-item v-for="game in games"
                   :name="game.name"
                   :logo="game.logo"
                   :category="game.category"
                   :start="game.start"
                   :key="game.name"
                   @click.native="play(game)">
        </game-item>
    </div>
</template>

<script>
import GameItem from '@/components/GameItem.vue'

export default {
  name: 'GameList',
  props: {
    games: Array
  },
  components: {
    GameItem
  },
  computed: {},
  methods: {
    play (game) {
      window.location.href = game.url
    }
  }
}
</script>

<style scoped lang="scss" scope>
    .card-wrapper {
        overflow: hidden;
    }
</style>
