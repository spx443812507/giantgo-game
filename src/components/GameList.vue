<template>
    <div class="card-wrapper">
        <game-item v-for="game in games"
                   :game="game"
                   :key="game.name">
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
  methods: {}
}
</script>

<style scoped lang="scss" scope>
    .card-wrapper {
        overflow: hidden;
    }
</style>
