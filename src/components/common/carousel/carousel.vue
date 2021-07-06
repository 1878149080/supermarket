<template>
    <div class="carousel">
      <Swiper>
        <Slide>
          <slot><img src="../../../assets/images/beauty.webp" alt=""></slot>
        </Slide>
        <Slide>
          <slot><img src="../../../assets/images/beauty.webp" alt=""></slot>
        </Slide>
        <Slide>
          <slot><img src="../../../assets/images/beauty.webp" alt=""></slot>
        </Slide>
        <Slide>
          <slot><img src="../../../assets/images/beauty.webp" alt=""></slot>
        </Slide>
  </Swiper>
    </div>
</template>

<script>
import { Swiper, Slide } from 'vue-swiper-component';
export default {
      // 组件名称
    name: 'carousel',
    // 组件参数 接收来自父组件的数据
    props: {
      carousel : { 
        type : Array,
        default : function(){
          return ['../../../assets/images/beauty.webp']
        }
      }
    },
      // 局部注册的组件
    components: {
      Swiper,
      Slide
    },
      // 组件状态值
    data () {
        return {
        }
    },
}
</script>
<style>
.carousel{
    width:100%;
    height:200px;
    background:chocolate;
}
.carousel img{
  width:100%;
  height:200px;
}
</style>