<template>
    <div id="category">
      dsfgh
      <form action="" @submit.prevent>
        <input type="submit" value="dian" @click="change">
      </form>
    </div>
</template>

<script>
// import scroll from "@better-scroll/core"

// import scroll from './children/scroll.vue'
// import BScroll from '@better-scroll/core'


export default {
      // 组件名称
    name: 'category',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {
      // scroll
    },
      // 组件状态值
    data () {
        return {}
    },
    create(){

    },
    methods : {
      change(){
        console.log(234);
      }
    }
}
</script>
<style>

</style>