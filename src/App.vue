<template>
    <div id="app">
        <header-menu></header-menu>
        <main>
            <router-view/>
        </main>
    </div>
</template>
<script>
// @ is an alias to /src
import HeaderMenu from '@/components/HeaderMenu.vue'

export default {
  name: 'app',
  components: {
    HeaderMenu
  }
}
</script>
<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        max-width: 750px;
        height: auto;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
