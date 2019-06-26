<template>
  <div class="loginWarp">
    <mt-header title="登录">
      <router-link to="/" slot="left">
        <mt-button icon="back"/>
      </router-link>
    </mt-header>
    <div class="loginContent">
      <div class="logo">
        <div>
          <img src="../assets/logo.png" class="logoImg" alt="logo">
        </div>
        <div>
          欢迎加入咪咕
        </div>
      </div>

      <mt-field label placeholder="请输入用户名" v-model="username" class="loginInput" />
      <mt-field label placeholder="请输入密码" type="password" v-model="password" class="loginInput" />

      <mt-button type="primary" size="large" class="loginBtn">登录</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.loginWarp {
  background: #f5f5f5;
  height: 100%;
  display: flex;
  flex-direction: column;

  .loginContent {
    flex: 1;
    background: #f5f5f5;
    padding: 12px;
    .logo {
      text-align: center;
      padding: 42px 0;
      font-size: 14px;
      line-height: 26px;
      .logoImg {
        width: 90px;
        height: 90px;
      }
    }
    .loginInput {
      margin-bottom: 10px;
    }
  }
}
</style>
