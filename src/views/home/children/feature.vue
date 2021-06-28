<template>
    <div class="feature" week='week'>
        <p>本周推荐</p>
        <home-recommend :recommend="week"></home-recommend>
    </div>
</template>

<script>
import recommend from "../../../components/content/recommend.vue"
import HomeRecommend from './HomeRecommend.vue'
export default {
      // 组件名称
    name: 'feature',
    // 组件参数 接收来自父组件的数据
    props: {
        week : {
            type : Array,
            default : []
        }
    },
      // 局部注册的组件
    components: {
        recommend,
        HomeRecommend
    },
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style>
.feature{
    background:#fff;
    
}
.feature>p{
    font-weight: 600;
    padding-top:3rem;
    padding-bottom:3rem;
    font-size:5rem;
    margin-top:3rem;
    text-align: center;
}
</style>