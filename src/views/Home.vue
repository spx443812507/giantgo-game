<template>
    <div>
        <game-list></game-list>
    </div>
</template>

<script>
// @ is an alias to /src
import GameList from '@/components/GameList.vue'
import HeaderMenu from '@/components/HeaderMenu.vue'

export default {
  name: 'home',
  components: {
    GameList,
    HeaderMenu
  }
}
</script>
<style lang="scss">

</style>
