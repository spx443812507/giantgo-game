<template>
    <div class="card" @click="play">
        <dl>
            <dt class="card-img">
                <img alt="img" :src="game.logo">
            </dt>
            <dd class="card-content">
                <span class="card-name">{{game.name}}</span>
                <span class="tit-start">
                    <span>{{game.category}}</span>
                    <i class="iconfont icon-star"></i>
                    <span class="start">{{game.start}}</span>
                </span>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
  name: 'GameItem',
  props: {
    game: Object
  },
  methods: {
    play () {
      this.$router.push({
        name: 'detail', params: {
          id: this.game.id
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
    .card {
        width: 46%;
        height: 5rem;
        margin: .2rem;
        padding: .2rem;
        float: left;
        border-radius: .053333rem;
        box-shadow: 0 0.026667rem 0.16rem rgba(0, 0, 0, .117647), 0 0.026667rem 0.106667rem rgba(0, 0, 0, .117647);
        box-sizing: border-box;

        .card-img {
            display: block;
            width: 226px;
            height: 226px;
            margin: 12px auto 0;
            border-radius: 20px;
            img {
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 20px;
            }
        }

        .card-content {
            display: block;
            padding: 20px 32px 0;
            box-sizing: border-box;
            width: 100%;
            .card-name {
                display: -webkit-box;
                height: 60px;
                font-size: 30px;
                font-weight: 400;
                box-sizing: border-box;
                color: rgba(71, 74, 79, .87);
                line-height: 72px;
                white-space: normal;
                overflow: hidden;
            }
            .tit-start {
                width: 100%;
                height: 36px;
                font-size: 24px;
                color: rgba(71, 74, 79, .54);
                overflow: hidden;
                display: table;
                vertical-align: middle;

                span {
                    float: left;
                }

                span.start {
                    float: right;
                    margin-right: 4px;
                }

                .icon-star {
                    float: right;
                    font-size: 20px;
                    color: rgb(66, 103, 178);
                }
            }
        }
    }
</style>
