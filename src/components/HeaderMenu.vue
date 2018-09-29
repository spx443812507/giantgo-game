<template>
    <header class="header">
        <div class="icon-btn">
            <!--<i class="iconfont icon-menu"></i>-->
        </div>
        <span class="title">GiantGo Game</span>
        <div class="icon-btn">
            <!--<i class="iconfont icon-share"></i>-->
        </div>
    </header>
</template>

<script>
export default {
  name: 'HeaderMenu',
  props: {
    msg: String
  }
}
</script>
<style scoped lang="scss">
    .header {
        height: 112px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, .117647), 0 2px 8px rgba(0, 0, 0, .117647);
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        background-color: rgb(66, 103, 178);
        .icon-btn {
            display: flex;
            width: 96px;
            height: 96px;
            align-items: center;
            justify-content: center;
        }
        .title {
            font-size: .533333rem;
            color: #fff;
        }
    }
</style>
