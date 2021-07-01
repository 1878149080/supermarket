<template>
    <div class="goods">
        <goods-item
        v-for="(item,index) in goods" 
        :item="item"
        :key='index'>
        </goods-item>
    </div>
</template>

<script>
import goodsItem from './godds-item.vue'
export default {
      // 组件名称
    name: 'goods',
    // 组件参数 接收来自父组件的数据
    props: {
        goods : {
            type : Array,
            default : function(){
                return [];
            }
        }
    },
      // 局部注册的组件
    components: {
        goodsItem
    },
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style>
.goods{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>