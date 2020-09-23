<template>
  <el-container id="layout_container">
    <el-aside width="200px"><LayoutSide /></el-aside>
    <el-container>
      <el-header><LayoutHead /></el-header>
      <el-main><LayoutContent /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import LayoutSide from "./side/side";
import LayoutHead from "./head/head";
import LayoutContent from "./content/content";
export default {
  components: { LayoutSide, LayoutHead, LayoutContent },
  data() {
    return {};
  }
};
</script>

<style scoped lang='less'>
#layout_container {
  height: 100vh;
}
.el-header {
    padding: 0;
}
</style>