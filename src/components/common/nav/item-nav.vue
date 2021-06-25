<template>
    <div class="item-nav" 
    :color='color' 
    :bcolor="bcolor" 
    :style="{'color': color,'background-color':bcolor}">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot>苟宏</slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
      // 组件名称
    name: 'item-nav',
    // 组件参数 接收来自父组件的数据
    props: {
        color : {
            type : String,
            default : 'black'
        },
        bcolor : {
            type : String,
            default : "tranparent"
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
<style>
.item-nav{
    z-index: 999;
    height:44px;
    border-bottom:1px solid 	#D9D9D9;
    display:flex;
    justify-content: space-between;
    align-items: center;
    font-size:21px;
    font-weight: 900;
    /* color:	#838B83; */
}
.item-nav>.left{
    height:100%;
    width:60px;
    text-align: center;
}
.item-nav>.right{
    height:100%;
    width:60px;
    text-align: center;
}
.item-nav>.center{
    flex:1;
    line-height: 44px;
    text-align: center;
}
</style>