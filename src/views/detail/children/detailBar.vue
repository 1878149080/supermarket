<template>
    <div class="detail-bar">
      <span class="service">
        <span class="iconfont icon-home"></span>
        <p>客服</p>
      </span>
      <span class="shop">
        <span class="iconfont icon-home"></span>
        <p>店铺</p>
      </span>
      <span class="collection">
        <span class="iconfont icon-home"></span>
        <p>收藏</p>
      </span>
      <span class="trolly">加入购物车</span>
      <span class="purchase">购买</span>
    </div>
</template>

<script>
// 引入公共组件
export default {
      // 组件名称
    name: 'detailBar',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {
    },
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style scoped>
.detail-bar{
    width:100%;
    height:49px;
    position:relative;
    left:0;
    bottom:0px;
    display:flex;
    padding:0 10px;
    background:#fff;
    justify-content:space-between;
    align-items: center;
    padding:0;
    font-size: 12px;
    box-shadow: 0px -1px 3px 2px rgb(209, 205, 205);
}
.detail-bar>span{
  flex:1;
  text-align: center;
}
.detail-bar>span>span{
  font-size:21px;
}
.detail-bar>span>p{
  font-size:12px;
}
.detail-bar .purchase
{
  color:#fff;
  font-weight: 600;
  font-size:20px;
  height:100%;
  line-height: 49px;
  background: rgb(250, 118, 152);
}
.detail-bar .trolly{
  color:#fff;
  font-weight: 600;
  flex:2;
  height:100%;
  line-height: 49px;
  font-size:18px;
  background: rgb(249, 218, 18);
}
</style>