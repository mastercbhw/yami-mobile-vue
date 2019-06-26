<template>
  <div class="title">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'CardHeader',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.title {
  font-size: 18px;
  font-weight: 900;
  padding-left: 10px;
}
</style>
