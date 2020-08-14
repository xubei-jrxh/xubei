<template>
  <div class="homeContainer">
    <Search />
    <Content />
  </div>
</template>
<script>
import Search from "./Search/Search";
import Content from "./Content/Content";
export default {
  name: "Home",
  components: {
    Search,
    Content,
  },
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.homeContainer {
  width: 1400px;
  height: 1000px;
  margin: 0 auto;
  background-color: #bfa;
}
</style>
