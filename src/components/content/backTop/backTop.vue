<template>
    <div class="back-top" :class="{show:show}">
        <div class="content">点我</div>
    </div>
</template>

<script>
export default {
      // 组件名称
    name: 'backTop',
    // 组件参数 接收来自父组件的数据
    props: {
        show : {
            type : Boolean,
            default : false
        }
    },
      // 局部注册的组件
    components: {},
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style scoped>
.back-top{
    opacity: 0;
    transition:all 0.3s;
}
    .content{
        position:fixed;
        bottom:53px;
        right:12px;
        width:35px;
        height:35px;
        border-radius:50%;
        background:rgba(0, 195, 255, 0.329);
        font-size : 12px;
        text-align: center;
        line-height: 35px;
        font-weight: 600;
        color : #fff;
    }
    .show{
        opacity: 1;
    }

</style>