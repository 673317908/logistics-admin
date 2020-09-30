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
      <FormItem label="确认密码" prop="confirmPassword">
        <Input
          v-model="formValidate.confirmPassword"
          placeholder="请再次输入密码"
          type="password"
        />
      </FormItem>
      <FormItem>
        <Checkbox v-model="formValidate.single" @change="consent"
          >我已阅读并同意</Checkbox
        ><span @click="checkDeal">《什么什么协议》</span>
      </FormItem>
    </Form>
    <Deal v-model="dealStatus" />
  </div>
</template>

<script>
import { checkUserName, checkPassword } from "../../../utils/check";
import Deal from "./dialog";
export default {
  components: { Deal },
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
    const validateConfirmPassword = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("确认密码不能为空"));
      } else if (value != this.formValidate.password) {
        callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    };
    return {
      dealStatus: false,
      formValidate: {
        userName: "",
        password: "",
        confirmPassword: "",
        single: false
      },
      ruleValidate: {
        userName: [{ validator: validateUserName, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        confirmPassword: [
          { validator: validateConfirmPassword, trigger: "blur" }
        ]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    //   验证注册信息
    validateForm(name) {
      this.$refs[name].validate(valid => {
        if (valid && this.formValidate.single) {
          this.$Message.success("Success!");
        } else {
          if (!this.formValidate.single) {
            this.$Message.error("请仔细阅读《什么什么协议》!");
          } else {
            this.$Message.error("Fail!");
          }
        }
      });
    },
    // 清除输入框
    handReset(name) {
      this.$refs[name].resetFields();
    },
    checkDeal() {
      this.dealStatus = true;
    },
    consent() {
      this.formValidate.single = !this.formValidate.single;
    }
  }
};
</script>

<style scoped lang="less">
span {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  user-select: none;
}
</style>
