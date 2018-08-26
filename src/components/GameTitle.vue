<template>
    <div class="game-title">
        <div class="flag"></div>
        <div class="title">{{title}}</div>
        <div class="see-all" @click="jump">全部</div>
    </div>
</template>

<script>
export default {
  name: 'GameTitle',
  props: {
    title: String,
    linkName: String
  },
  methods: {
    jump () {
      this.$router.push({name: this.linkName})
    }
  }
}
</script>

<style scoped lang="scss">
    .game-title {
        width: 100%;
        height: 72px;
        font-size: 36px;
        font-weight: 700;
        line-height: 72px;
        background-color: #fff;
        color: #7e848c;
        padding-left: 72px;
        box-sizing: border-box;
        overflow: hidden;
        margin: 40px 0 10px;

        div {
            float: left;
            height: 72px;
        }

        div.flag {
            height: 42px;
            width: 8px;
            margin: 12px 20px 0 0;
            background-color: rgb(66, 103, 178);
        }

        div.title {
            float: left;
            height: 72px;
        }

        div.see-all {
            float: right;
            padding: 0 32px;
            font-size: 28px;
            color: rgb(66, 103, 178);

            &:active {
                background: #efefef;
            }
        }
    }
</style>
