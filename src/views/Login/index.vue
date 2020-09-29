<template>
  <div class="account">
    <div class="account_content">dsdadsadsaddad</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.account {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../../assets/login_bg.jpg") no-repeat center center/cover;
  .account_content {
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    // height: 305px;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 6px;
  }
}
</style>
