<template>
    <div id="home">
      <mynav color="#fff" bcolor="pink" class="mynav">购物街</mynav>
      <carousel></carousel>
      <home-recommend :recommend='recommend'></home-recommend>
      <feature :week='week'></feature>
      <bar-control :title="title" class="bar-control"></bar-control>
      home
      home
      home
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      </div>
</template>

<script>
import mynav from "../../components/common/nav/item-nav.vue"
import carousel from "../../components/common/carousel/carousel.vue"
import HomeRecommend from "./children/HomeRecommend.vue"
import feature from './children/feature.vue'
import barControl from "../../components/content/barControl.vue"
export default {
      // 组件名称
    name: 'home',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {
      mynav,
      carousel,
      HomeRecommend,
      feature,
      barControl
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
          ],
          week : [
            {image:'../../../assets/images/beauty.webp',link:"#",text:'你好'},
            {image:'../../../assets/images/beauty.webp',link:"#",text:'你好'},
            {image:'../../../assets/images/beauty.webp',link:"#",text:'你好'},
            {image:'../../../assets/images/beauty.webp',link:"#",text:'你好'},
            {image:'../../../assets/images/beauty.webp',link:"#",text:'你好'},
            {image:'../../../assets/images/beauty.webp',link:"#",text:'你好'},
            {image:'../../../assets/images/beauty.webp',link:"#",text:'你好'},
            {image:'../../../assets/images/beauty.webp',link:"#",text:'你好'}
          ],
          title : ['第一','第二','第三']
        }
    },
    created(){
      //发送请求
    }
}
</script>
<style>
.bar-control{
  position:sticky;
  top:44px;
}
.mynav{
  position:sticky;
  top:0;
}
</style>