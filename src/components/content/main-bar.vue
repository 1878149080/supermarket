<template>
    <bar class="main-bar">
        <item-bar path='/home' icon="icon-home" color='#ff0066'>home</item-bar>
        <item-bar path='/category' icon="icon-image" color="#00ff99">category</item-bar>
        <item-bar path='/shopcart' icon="icon-bridge" color="#66ffff">shopcart</item-bar>
        <item-bar path='/profile' icon="icon-edit" color="#FFD700">profile</item-bar>
    </bar>
</template>

<script>
import bar from "../common/bar/bar.vue"
import itemBar from "../common/bar/item-bar.vue"
export default {
      // 组件名称
    name: 'mian-bar',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {
        bar,
        itemBar
    },
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style>
.main-bar{
  z-index: 999;
  background:#fff;
}
</style>