<template>
    <div class="layout-inside">
        <header-menu></header-menu>
        <main>
            <div class="detail-wrapper">
                <div class="detail">
                    <img class="logo" :src="game.logo"/>
                    <div class="tag">{{game.category}}</div>
                    <div class="name">{{game.name}}</div>
                    <div class="description">
                        <div class="tag-tit">
                            <span class="name">简介</span>
                        </div>
                        <div class="desc">{{game.desc}}</div>
                    </div>
                    <div class="detail-info">
                        <div class="tag-tit">
                            <span class="name">详细简讯</span>
                        </div>
                        <div class="details">
                            <div class="items">
                                <span class="tit-name">文件大小:</span>
                                <span class="size">0.3MB</span></div>
                            <div class="items">
                                <span class="tit-name">当前版本:</span>
                                <span class="size">1.0.0</span></div>
                            <div class="items">
                                <span class="tit-name">更新时间:</span>
                                <span class="size">August 23rd 2018</span>
                            </div>
                            <div class="items">
                                <span class="tit-name">开发者:</span>
                                <span class="size">QuickGame</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="play-btn" @click="play">
                开始
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
    return {
      game: {
        logo: '',
        url: ''
      }
    }
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
  methods: {
    play () {
      window.location.href = this.game.url
    }
  },
  mounted () {
    this.$store.dispatch('getGame', this.$route.query.id).then(response => {
      this.game = response.data
    })
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

            .logo {
                display: block;
                width: 224px;
                height: 224px;
                border-radius: 20px;
                margin: 20px auto 0;
            }

            .tag {
                width: 204px;
                height: 36px;
                margin: 4px auto 0;
                border-radius: 32px;
                text-align: center;
                color: white;
                background: rgb(66, 103, 178);
            }

            .name {
                height: 48px;
                width: 100%;
                font-size: 44px;
                line-height: 48px;
                text-align: center;
                margin-top: 20px;
                color: rgba(71, 74, 79, .87);
            }

            .description {
                margin-top: 4px;
                border-top: 4px solid rgba(0, 0, 0, .12);
                border-bottom: 4px solid rgba(0, 0, 0, .12);
                padding: 10px 0;

                .desc {
                    padding: 32px;
                    text-indent: 2em;
                    font-size: 28px;
                    color: #474a4f;
                }
            }

            .tag-tit {
                overflow: hidden;
                height: 60px;
                padding-left: 42px;

                .name {
                    display: inline-block;
                    padding-left: 20px;
                    border-left: 8px solid rgba(0, 0, 0, .54);
                    font-size: 36px;
                    height: 42px;
                    line-height: 42px;
                    color: #7e848c;
                    font-weight: 700;
                    letter-spacing: normal;
                    margin-top: 0;
                    text-align: left;
                }
            }

            .detail-info {
                margin-top: 4px;
                border-top: 4px solid rgba(0, 0, 0, .12);
                border-bottom: 4px solid rgba(0, 0, 0, .12);
                padding: 10px 0;

                .details {
                    padding: 16px;
                    box-sizing: border-box;
                    overflow: hidden;

                    .items {
                        width: 50%;
                        float: left;

                        span {
                            text-indent: 2em;
                            display: block;
                            font-size: 24px;
                        }

                        span.tit-name {
                            padding: 24px 0;
                            color: #7e848c;
                        }

                        span.size {
                            color: #474a4f;
                            font-size: 26px;
                        }
                    }
                }
            }
        }
    }

    .play-btn {
        position: fixed;
        bottom: 200px;
        left: 50%;
        margin-left: -187.5px;
        right: 0;
        width: 376px;
        height: 72px;
        line-height: 72px;
        border-radius: 75px;
        text-align: center;
        z-index: 999;
        transform: translate(-50%, -90%);
        animation: scales .5s infinite linear;
        color: white;
        background: rgb(66, 103, 178);
    }

    @keyframes scales {
        0% {
            transform: scale(1);
        }

        25% {
            transform: scale(1.1);
        }

        50% {
            transform: scale(1.2);
        }

        75% {
            transform: scale(1.1);
        }

        100% {
            transform: scale(1);
        }
    }
</style>
