<template>
  <div class="home">
    <!-- header start -->
    <div class="header">
      <div class="headerSearch">
        <i class="iconfont icon-search1187938easyiconnet"></i>
        <input type="text" placeholder="搜索食材餐具">
      </div>
      <div class="headerRight">
        <i class="iconfont icon-daohanggouwuche"></i>
      </div>
    </div>
    <!-- header end -->

    <!-- banner start -->
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img class="bannerImage" src="../assets/1.jpg" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="bannerImage" src="../assets/2.jpg" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="bannerImage" src="../assets/3.jpg" alt>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- banner end -->

    <!-- nav start -->
    <div class="navBar">
      <dl>
        <dt>
          <i class="iconfont icon-jinkoumimianyou"/>
        </dt>
        <dd>米面粮油</dd>
      </dl>
      <dl>
        <dt>
          <i class="iconfont icon-yu"/>
        </dt>
        <dd>果蔬生鲜</dd>
      </dl>
      <dl>
        <dt>
          <i class="iconfont icon-chufangyongpin"/>
        </dt>
        <dd>厨房电器</dd>
      </dl>
      <dl>
        <dt>
          <i class="iconfont icon-tiaoweipin"/>
        </dt>
        <dd>调味品</dd>
      </dl>
      <dl>
        <dt>
          <i class="iconfont icon-canju"/>
        </dt>
        <dd>厨房餐具</dd>
      </dl>
      <dl>
        <dt>
          <i class="iconfont icon-unie643"/>
        </dt>
        <dd>养生食材</dd>
      </dl>
    </div>
    <!-- nav end -->
    <CardHeader title="限时抢购"/>
    <div class="timeShop">
      <div v-for="item in timeGoods" :key="item.id" class="timeShopChild">
        <TimeGoodsCard
          :goodsName="item.goodsName"
          :imgSrc="item.imgSrc"
          :nowGoodsPrice="item.nowGoodsPrice"
          :oldGoodsPrice="item.oldGoodsPrice"
        />
      </div>
    </div>

    <!-- HOT GOODS START -->
    <CardHeader title="热销商品"/>
    <div class="hotGoods">
      <div v-for="item in hotGoods" :key="item.id" class="hotShopChild">
        <HotGoodsCard
          :goodsName="item.goodsName"
          :imgSrc="item.imgSrc"
          :price="item.price"
          :people="item.people"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardHeader from "@/components/CardHeader";
import TimeGoodsCard from "@/components/TimeGoodsCard";
import HotGoodsCard from "@/components/HotGoods";

export default {
  name: "home",
  data() {
    return {
      search: "",
      timeGoods: [
        {
          id: 1,
          goodsName: "龙虾龙虾龙虾龙虾龙虾龙虾龙虾龙虾",
          imgSrc: require("../assets/longxia.jpg"),
          nowGoodsPrice: "185",
          oldGoodsPrice: "250"
        },
        {
          id: 2,
          goodsName: "螃蟹螃蟹螃蟹螃蟹螃蟹螃蟹螃蟹",
          imgSrc: require("../assets/px.jpg"),
          nowGoodsPrice: "185",
          oldGoodsPrice: "250"
        },
        {
          id: 3,
          goodsName: "生菜生菜生菜生菜生菜生菜生菜",
          imgSrc: require("../assets/sc.jpg"),
          nowGoodsPrice: "185",
          oldGoodsPrice: "250"
        }
      ],
      hotGoods: [
        {
          id: 1,
          goodsName: "龙虾龙虾龙虾龙虾龙虾龙虾龙虾龙虾",
          imgSrc: require("../assets/longxia.jpg"),
          price: "185",
          people: "250"
        },
        {
          id: 2,
          goodsName: "螃蟹螃蟹螃蟹螃蟹螃蟹螃蟹螃蟹",
          imgSrc: require("../assets/px.jpg"),
          price: "185",
          people: "250"
        },
        {
          id: 3,
          goodsName: "生菜生菜生菜生菜生菜生菜生菜",
          imgSrc: require("../assets/sc.jpg"),
          price: "185",
          people: "250"
        }
      ]
    };
  },
  components: {
    CardHeader,
    TimeGoodsCard,
    HotGoodsCard,
  }
};
</script>

<style lang="less" scoped>
@import url("../styles/market.less");
</style>

