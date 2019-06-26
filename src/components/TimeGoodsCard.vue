<template>
  <div class="timeGoodsCard">
    <div class="goods">
      <img class="goodsImg" :src="imgSrc" alt>
      <div class="goodsName">{{ goodsName }}</div>
      <div class="nowGoodsPrice">{{ nowGoodsPrice | moneyPrefix }}</div>
      <div class="oldGoodsPrice">{{ oldGoodsPrice }}</div>
    </div>
  </div>
</template>

<script>
import { moneyPrefix } from "@/utils/filter.js";

export default {
  name: "TimeGoodsCard",
  props: {
    imgSrc: String,
    goodsName: String,
    nowGoodsPrice: String,
    oldGoodsPrice: String
  },
  filters: {
    moneyPrefix
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.timeGoodsCard {
  .goods {
    text-align: center;
    .goodsImg {
      display: inline-block;
      height: 100px;
      width: 100%;
    }
    .goodsName {
      overflow: hidden;
      // white-space: nowrap;
      text-overflow: ellipsis;
    }
    .nowGoodsPrice {
      color: #af1227;
      line-height: 20px;
    }
    .oldGoodsPrice {
      color: #ccc;
      line-height: 20px;
      text-decoration: line-through;
    }
  }
}
</style>
