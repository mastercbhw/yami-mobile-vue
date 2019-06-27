<template>
  <div class="self">
    <!-- header start -->
    <mt-header fixed title="个人中心">
    </mt-header>
    <!-- header end -->

    <!-- userInfo start -->
    <div class="userInfo">
      <div class="userContent">
        <div class="userAvatar">
          <div class="avatar"></div>
        </div>
        <div class="info">
          <div class="leftInfo">
            <div>我爱洗澡</div>
            <div>年龄：21岁</div>
          </div>
          <div class="rightInfo">
            <div>
              <div>厨娘</div>
            </div>
            <div>常住地：上海</div>
          </div>
        </div>
      </div>
      <div class="userDesc">吃货一枚，爱吃，爱玩，爱睡觉......</div>
    </div>
    <!-- userInfo end -->
    <!-- tab start -->
    <div class="userTab">
      <div class="item">
        <div class="num">0</div>
        <div class="label">关注</div>
      </div>
      <div class="item">
        <div class="num">6002</div>
        <div class="label">粉丝</div>
      </div>
      <div class="item">
        <div class="num">4002</div>
        <div class="label">积分</div>
      </div>
    </div>
    <!-- tab end -->
    <!-- nav Start -->
    <div class="navBar">
      <div class="item">563菜谱</div>
      <div class="item">0作品</div>
      <div class="item">0帖子</div>
    </div>
    <!-- nav End -->
    <!-- caidan start -->
    <div class="caidan">
      <div class="item">
        <div class="caidanImg">
          <img src="../assets/caidan.png" alt>
          <div class="shoucangBox">
            <div class="viewNum">1999</div>
            <div class="shoucang">297</div>
          </div>
        </div>
        <div class="caiName">柠檬焗龙虾</div>

        <div class="usersname">
          <img src="../assets/avatar.jpg" alt>
          <span>我爱洗澡</span>
        </div>
        <div class="desc">鲜嫩的虾肉漏出来，鲜香的汤汁沾起来，一口吃到嘴里面，清香爽口真刺激....</div>
      </div>

      <div class="item">
        <div class="caidanImg">
          <img src="../assets/caidan.png" alt>
          <div class="shoucangBox">
            <div class="viewNum">1999</div>
            <div class="shoucang">297</div>
          </div>
        </div>
        <div class="caiName">柠檬焗龙虾</div>

        <div class="usersname">
          <img src="../assets/avatar.jpg" alt>
          <span>我爱洗澡</span>
        </div>
        <div class="desc">鲜嫩的虾肉漏出来，鲜香的汤汁沾起来，一口吃到嘴里面，清香爽口真刺激....</div>
      </div>

      <div class="item">
        <div class="caidanImg">
          <img src="../assets/caidan.png" alt>
          <div class="shoucangBox">
            <div class="viewNum">1999</div>
            <div class="shoucang">297</div>
          </div>
        </div>
        <div class="caiName">柠檬焗龙虾</div>

        <div class="usersname">
          <img src="../assets/avatar.jpg" alt>
          <span>我爱洗澡</span>
        </div>
        <div class="desc">鲜嫩的虾肉漏出来，鲜香的汤汁沾起来，一口吃到嘴里面，清香爽口真刺激....</div>
      </div>
    </div>
    <!-- caidan end -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    add() {
      console.log("TCL: add -> add", 1);
      this.$store.dispatch("addFun");
    },
    sub() {
      this.$store.dispatch("subFun");
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../styles/self.less");
</style>

