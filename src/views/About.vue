<template>
    <div class="home">
        <img src="../assets/logo.png">
        <GameList msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
// @ is an alias to /src
import GameList from '@/components/GameList.vue'

export default {
  name: 'home',
  components: {
    GameList
  }
}
</script>
