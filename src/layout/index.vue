<template>
  <div class="layout">
    <Layout>
      <Sider
        ref="side1"
        hide-trigger
        collapsible
        :collapsed-width="78"
        v-model="isCollapsed"
        :style="{ height: '100vh' }"
      >
        <!-- <Menu
          active-name="1-2"
          theme="dark"
          width="auto"
          :class="menuitemClasses"
          @on-select="activeMenu"
        >
          <template v-for="(item, index) in routers">
            <MenuItem
              :name="index"
              :key="index"
              v-if="item.hidden"
              :to="item.path"
            >
              <Icon :type="item.icon ? item.icon : ''"></Icon>
              <span>{{ item.meta.title }}</span>
            </MenuItem>
          </template>
        </Menu> -->
        <Menu
          active-name="1-2"
          theme="dark"
          width="auto"
          @on-select="activeMenu"
          :accordion='true'
        >
          <template v-for="(item, index) in routers">
            <MenuItem
              :name="item.path"
              :key="index"
              v-if="item.hidden && !item.children"
              :to="item.path"
            >
              <Icon :type="item.icon ? item.icon : ''"></Icon>
              <span>{{ item.meta.title }}</span>
            </MenuItem>
          </template>
          <template v-for="(item, index) in routers">
            <Submenu
              :name="index"
              :key="index"
              v-if="item.hidden && item.children"
            >
              <template slot="title">
                <Icon :type="item.icon"></Icon>
                {{ item.meta.title }}
              </template>
              <template v-if="item.children">
                <MenuItem
                  :name="index2"
                  v-for="(item2, index2) in item.children"
                  :key="index2"
                  :to="item2.path"
                >
                  {{ item2.meta.title }}</MenuItem
                >
              </template>
            </Submenu>
          </template>
        </Menu>
      </Sider>
      <Layout>
        <Header
          :style="{
            padding: 0
          }"
          class="layout-header-bar"
        >
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{ margin: '0 20px' }"
            type="md-menu"
            size="24"
          ></Icon>
          <Poptip placement="bottom" style="text-align: center;">
            <div style="margin-right:30px;cursor: pointer;user-select: none;">
              673317908@qq.com
            </div>
            <div
              class="api"
              slot="content"
              @click="loginOut({ name: 'Login' })"
            >
              退出<Icon type="md-log-out" />
            </div>
          </Poptip>
        </Header>
        <Content :style="{ margin: '0 20px', minHeight: '260px' }">
          <Breadcrumb :style="{ margin: '16px 0' }">
            <template v-for="(item, index) in breadcrumbList">
              <BreadcrumbItem :key="index" :to="{ path: item.path }">{{
                item.meta.title
              }}</BreadcrumbItem>
            </template>
          </Breadcrumb>
          <Card>
            <div style="height: 700px">
              <router-view></router-view>
            </div>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false,
      breadcrumbList: [],
      routers: {}
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    loginOut(route) {
      this.$router.push(route);
    },
    getBreadcrumb(index) {
      let matched = this.$route.matched.filter(item => item.name);
      const first = matched[index];
      if (
        first &&
        first.name.trim().toLocaleLowerCase() !== "Home".toLocaleLowerCase()
      ) {
        matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
      }
      this.breadcrumbList = matched;
    },
    activeMenu(name) {
      this.getBreadcrumb(name);
    }
  },
  mounted() {
    this.routers = this.$router.options.routes;
    console.log(this.routers);
    this.getBreadcrumb();
  }
};
</script>

<style scoped lang='less'>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  // text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}

.api {
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #f5f7f9;
  }
}
</style>