<template>
    <div id="home">
      <mynav color="#fff" bcolor="pink">购物街</mynav>
      <carousel></carousel>
      <home-recommend :recommend='recommend'></home-recommend>
      home
      </div>
</template>

<script>
import mynav from "../../components/common/nav/item-nav.vue"
import carousel from "../../components/common/carousel/carousel.vue"
import HomeRecommend from "./children/HomeRecommend.vue"
export default {
      // 组件名称
    name: 'home',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {
      mynav,
      carousel,
      HomeRecommend
    },
      // 组件状态值
    data () {
        return {
          // images : null,
          recommend :[
                {image:'../../../assets/images/beauty.webp',link:"#",text:'你好'},
                {image:'../../../assets/images/beauty.webp',link:"#",text:'你好'},
                {image:'../../../assets/images/beauty.webp',link:"#",text:'你好'},
                {image:'../../../assets/images/beauty.webp',link:"#",text:'你好'}
            ]
        }
    },
    created(){
      //发送请求
    }
}
</script>
<style>

</style>