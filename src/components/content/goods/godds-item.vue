<template>
    <div class="goods-item" @click="itemClick">
        <img src="../../../assets/images/beauty.webp" alt="">
        <div>
            <span>{{item.description}}</span>
            <p>{{item.price}}￥</p>
        </div>
    </div>
</template>

<script>
export default {
      // 组件名称
    name: 'goods-item',
    // 组件参数 接收来自父组件的数据
    props: {
        item : {
            type : Object,
            default : function(){
                return {}
            }
        }
    },
      // 局部注册的组件
    components: {},
      // 组件状态值
    data () {
        return {}
    },
    methods : {
        itemClick(){
            this.$router.push({path:'/detail',query:{id:this.item.id}});
        }
    }
}
</script>
<style>
.goods-item{
    width:48rem;
}
.goods-item>img{
    width:48rem;
    height:75rem;
    border-radius: 5px;
}
.goods-item>div{
    /* width:48rem; */
    padding-right:5px;
    font-size:1rem;
}
.goods-item>div>p{
    font-weight: 700;
    color:red;
}
</style>