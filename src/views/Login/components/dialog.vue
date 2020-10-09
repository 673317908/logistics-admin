<template>
  <div>
    <MyModal
      title="《什么什么协议》"
      v-model="dealStatus"
      @on-cancel="cancel"
      @on-confirm="ok"
    >
      <div slot="content">dsdsadsaad</div>
    </MyModal>
  </div>
</template>

<script>
import MyModal from "../../../components/myModel/index";
export default {
  components: { MyModal },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dealStatus: this.value
    };
  },
  watch: {
    value(n) {
      this.dealStatus = n;
    },
    dealStatus(n) {
      this.$emit("input", n);
    }
  },
  created() {},
  mounted() {},
  methods: {
    cancel() {
      this.dealStatus = false;
    },
    ok() {
      this.dealStatus = false;
      this.$parent.consent()
    }
  }
};
</script>

<style scoped lang="less">
</style>
