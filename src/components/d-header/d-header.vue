<template>
  <div class="d-header">
    <div class="icon"></div>
    <h1 class="text">内涵段子</h1>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>
<style lang="stylus" type="text/stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .d-header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      bg-image('logo')
      margin-right: 9px
      background-size: 30px 32px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>