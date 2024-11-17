 <template>
  <div class="my-button">
    <!-- 图标 -->
    <!-- 图标不是一定有的，因此只需要放一个具名插槽，内容为空 -->
    <slot name="icon"></slot>
    <!-- 文字 -->
    <slot>提交</slot>
    <!-- 数字 -->
    <slot name="num" :info="info"></slot>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "MyButton",
  props: {
    info: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped lang="less">
.my-button {
  width: 300px;
  height: 40px;
  background-color: #1989fa;
  border-radius: 80px;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
}
</style>
