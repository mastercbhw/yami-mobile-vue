<template>
  <div class="HotGoodsCard">
    <div class="goods">
      <img class="goodsImg" :src="imgSrc" alt>
      <div class="goodsName">{{ goodsName }}</div>
      <div class="price">{{ price | moneyPrefix }}</div>
      <div class="people">{{ people ? `${people}人已付款` : '' }}</div>
    </div>
  </div>
</template>

<script>
import { moneyPrefix } from "@/utils/filter.js";

export default {
  name: "HotGoodsCard",
  props: {
    imgSrc: String,
    goodsName: String,
    price: String,
    people: String
  },
  filters: {
    moneyPrefix
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.HotGoodsCard {
  .goods {
    text-align: left;
    .goodsImg {
      display: inline-block;
      height: 150px;
      width: 100%;
    }
    .goodsName {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .price {
      color: #af1227;
      line-height: 20px;
    }
    .people {
      color: #ccc;
      line-height: 20px;
    }
  }
}
</style>
