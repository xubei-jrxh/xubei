<template>
  <div>
    <button @click="toDetail">点击进入详情页</button>
  </div>
</template>
<script>
export default {
  name: 'Search',
  methods: {
    toDetail () {
      this.$router.push({
        name: 'detail',
        query: {
          goodsId: 2894659,
        },
      })
    },
  },
}
</script>
<style lang="less" rel="stylesheet/less" scoped></style>
