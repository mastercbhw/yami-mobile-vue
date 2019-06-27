<template>
  <div>
    <router-view></router-view>
    <mt-tabbar v-model="selected" class="tabBar">
      <mt-tab-item id="1">
        <router-link tag="span" to="/home">
          <div class="iconfont icon-shouye"></div>
          <div class="tabBarLabel">首页</div>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="2">
        <router-link tag="span" to="/market">
          <div class="iconfont icon-shouyedianpujishishangcheng"></div>
          <div class="tabBarLabel">集市</div>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="3">
        <router-link tag="span" to="/community">
          <div class="iconfont icon-shequ-active"></div>
          <div class="tabBarLabel">社区</div>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="4">
        <router-link tag="span" to="/self">
          <div class="iconfont icon-wode"></div>
          <div class="tabBarLabel">我的</div>
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "1"
    };
  },
  mounted() {
    const { pathname } = location;
    const matchArr = [{ path: "/home", id: "1" }, { path: "/market", id: "2" }, { path: "/community", id: "3" }, { path: "/self", id: "4" } ];
    const { id } = matchArr.find(_ => _.path === pathname) || '1';
    this.selected = id;
  }
};
</script>

<style lang="less" scoped>
.tabBar {
  position: fixed;
  bottom: 0;
  .tabBarLabel {
    margin-top: 8px;
  }
}
</style>

