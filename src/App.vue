<template>
  <div id="app">
    <!-- app -->
    <Top />
    <Home />
    <Bottom />
  </div>
</template>

<script>
import Top from "./components/Top/Top";
import Bottom from "./components/Bottom/Bottom";
import Home from "./pages/Home/Home";

export default {
  name: "App",
  components: {
    Top,
    Bottom,
    Home,
  },
  data() {
    return {
      value: true,
    };
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped></style>
