
<template>
  <div id="app">
    <van-button>默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <hr />

    <div class="title">《中国历代政治得失》</div>
    <p class="content">
      《中国历代政治得失》是钱穆的讲稿整理而成。该书选了汉、唐、宋、明、清五个朝代来讲，这五个朝代大体可代表中国历史之全进程。钱穆从人事和制度两方面重点考察一朝一代之政治得失，制度方面则侧重政府组织、财政税收，铨选制度与国防兵制，四顶都可谓是立国之本。
    </p>
    <my-button></my-button>
    <my-button>
      <!-- template里面的内容会替换掉myButton里的name为icon的slot -->
      <template v-slot:icon>
        <img width="20px" height="20px" src="~@/assets/img/logo.png" />
      </template>
    </my-button>
    <!-- 替换匿名插槽的内容 -->
    <my-button :info="info"
      >充值
      <template v-slot:num="{ info }">
        {{ info.price }}
      </template>
    </my-button>
    <my-button :info="info"
      >增加
      <template v-slot:num="slotProps">
        {{ slotProps.info.num }}
      </template>
    </my-button>
  </div>
</template>

<script>
/* eslint-disable */
import { Button } from "vant";
import MyButton from "./components/MyButton.vue";

export default {
  name: "App",
  data() {
    return {
      info: {
        price: 100,
        num: 5,
      },
    };
  },
  components: {
    [Button.name]: Button,
    MyButton,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.title {
  font-size: 30px;
  font-weight: 700;
  text-align: center;
}
.content {
  font-size: 24px;
  line-height: 2;
}
</style>
