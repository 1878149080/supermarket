<template>
    <div class="carousel">
        <slot><img src="../../../assets/images/beauty.webp" alt=""></slot>
    </div>
</template>

<script>
export default {
      // 组件名称
    name: 'carousel',
    // 组件参数 接收来自父组件的数据
    props: {
      carousel : { 
        type : Array,
        default : '../../../assets/images/beauty.webp'
      }
    },
      // 局部注册的组件
    components: {},
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