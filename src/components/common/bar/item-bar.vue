<template>
    <span id="item-bar"
    @click="change" 
    path='path' 
    icon="icon" 
    color="color"
    :class="{active:path==$route.path}"
    :style='colorStyle'>
        <span class="iconfont" :class="[icon]"></span>
        <p><slot></slot></p>
    </span>
</template>

<script>
export default {
      // 组件名称
    name: 'item-bar',
    // 组件参数 接收来自父组件的数据
    props: {
        icon : {
            default : 'icon-home'
        },
        path : {},
        color : {
            default : 'red'
        }
    },
      // 局部注册的组件
    components: {},
      // 组件状态值
    data () {
        return {}
    },
    methods :{
        change(){
            this.$route.path == this.path || this.$router.push(this.path);
        }
    },
    computed : {
        isActive(){
            return this.$route.path == this.path;
        },
        colorStyle(){
            console.log(this.color);
            return this.isActive ? {color:this.color} : {}
        }
    }
}
</script>


<style>
#item-bar{
    font-size:12px;
    text-align: center;
}
#item-bar>span{
    font-size:20px;
}
#item-bar p{
    font-size:12px;
}
.active{
    color:red;
}
</style>