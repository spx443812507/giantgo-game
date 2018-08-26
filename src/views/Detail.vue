<template>
    <div class="layout-inside">
        <header-menu></header-menu>
        <main>
            <div class="detail-wrapper">
                <div class="detail">
                    <img/>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderMenu from '@/components/HeaderMenu.vue'
import GameList from '@/components/GameList.vue'

export default {
  name: 'detail',
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
<style lang="scss" scoped>
    .detail-wrapper {
        padding: 16px 16px 80px;
        box-sizing: border-box;
        height: auto;
        background: #f5f5f5;

        .detail {
            background: #fff;
            width: 100%;
            min-height: 8rem;
            border-radius: .053333rem;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(0, 0, 0, .117647), 0 2px 8px rgba(0, 0, 0, .117647);
            margin-bottom: 200px;
        }
    }
</style>
