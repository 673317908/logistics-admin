<template>
  <div>
    <Modal v-model="model" @on-cancel="cancel" :mask-closable="false">
      <p slot="header" style="text-align:center;">{{ title }}</p>
      <slot name="content"></slot>
      <div slot="footer">
        <Button @click="cancel">取消</Button>
        <Button type="primary" @click="ok">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    }
  },
  components: {},
  data() {
    return {
      model: this.value
    };
  },
  watch: {
    model(n) {
      this.$emit("input", n);
    },
    value(n) {
      this.model = n;
    }
  },
  created() {},
  mounted() {},
  methods: {
    ok() {
      this.$emit("on-confirm");
    },
    cancel() {
      this.$emit("on-cancel");
    }
  }
};
</script>

<style scoped lang="less">
</style>
