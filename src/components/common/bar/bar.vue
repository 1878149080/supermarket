<template>
    <div id="bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
      // 组件名称
    name: 'bar',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {},
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style>
#bar{
    width:100%;
    height:49px;
    position:fixed;
    bottom:0;
    left:0px;
    padding:0 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-top:1px solid rgba(95, 97, 99, 0.171);
}
</style>