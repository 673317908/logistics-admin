<template>
  <div>
    <Form
      ref="formValidate"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="80"
    >
      <FormItem label="账号" prop="userName">
        <Input v-model="formValidate.userName" placeholder="请输入账号" />
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input
          v-model="formValidate.password"
          placeholder="请输入密码"
          type="password"
        />
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { checkUserName, checkPassword } from "../../../utils/check";
export default {
  components: {},
  data() {
    const validateUserName = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("账号不能为空"));
      } else if (checkUserName(value)) {
        callback(new Error("账号格式不正确"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("密码不能为空"));
      } else if (checkPassword(value)) {
        callback(new Error("密码格式不正确"));
      } else {
        callback();
      }
    };
    return {
      formValidate: {
        userName: "",
        password: ""
      },
      ruleValidate: {
        userName: [{ validator: validateUserName, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    //   验登录信息
    validateForm(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    // 清除输入框
    handReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>

<style scoped lang="less">
</style>
