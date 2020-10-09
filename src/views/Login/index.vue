<template>
  <div class="account">
    <div class="account_content">
      <div class="tabList">
        <ul>
          <li
            v-for="(item, index) in tabData"
            :key="index"
            @click="active(index)"
            :class="activeIndex === index ? 'active_css' : 'not_active'"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <Login v-show="activeIndex == 0" ref="login" />
      <Register v-show="activeIndex == 1" ref="register" />
      <Button
        type="primary"
        style="width:200px; margin-left:280px;"
        size="large"
        @click="sgin"
        >{{ tabData[activeIndex] }}</Button
      >
    </div>
  </div>
</template>

<script>
import Login from "./components/login.vue";
import Register from "./components/register.vue";
export default {
  components: { Login, Register },
  data() {
    return {
      tabData: ["登录", "注册"],
      activeIndex: 0
    };
  },
  created() {},
  mounted() {},
  methods: {
    //   tab切换
    active(index) {
      this.activeIndex = index;
      if (this.activeIndex == 0) {
        this.$refs.login.handReset("formValidate");
      } else {
        this.$refs.register.handReset("formValidate");
      }
    },
    // 登录或注册
    sgin() {
      if (this.activeIndex == 0) {
        this.$refs.login.validateForm("formValidate");
      } else {
        this.$refs.register.validateForm("formValidate");
      }
      this.$router.push({
        name: "Home"
      });
    }
  }
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
  //   background: url("../../assets/login_bg.jpg") no-repeat center center/cover;
  background-color: #515a6e;
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
    transition: all 1s ease;
    padding: 30px;
    .tabList {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        li {
          margin: 30px 10px;
          user-select: none;
          cursor: pointer;
        }
      }
    }
  }
}
.active_css {
  font-size: 30px;
  color: #515a6e;
}
.not_active {
  font-size: 20px;
}
</style>
