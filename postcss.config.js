module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 根元素的字体大小，根据设计图计算
      // 如果设计图是750，此处rootValue是75
      propList: ['*'],
      // propList：可以从px更改到rem的属性，*表示通配符，启用所有属性
      exclude: /node_modules/i, // 排除node_modules目录下的所有文件
      selectorBlackList: ['van-']
      // vant-:过滤掉vant-开头的元素选择器，这样就不会修改vant组件了
      // .my-开头的类选择器也过滤掉，不想对某些样式转rem，就给DOM元素添加my开头的类名，这样就不会修改样式了
    }
  }
}
