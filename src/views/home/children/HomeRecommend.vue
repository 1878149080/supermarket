<template>
    <div class="home-recommend">
        <recommend
        recommend="recommend" 
        v-for="(index,item) in recommend" 
        :key="item" 
        :image='item.image'
        :link="item.link"
        :text="item.text"></recommend>
    </div>
</template>

<script>
// import recommend from "components/contenet/redommend.vue"
import Recommend from "../../../components/content/recommend.vue"
export default {
      // 组件名称
    name: 'HomeRecommend',
    // 组件参数 接收来自父组件的数据
    props: {
        recommend : {
            type : Array,
            default : []
        }
    },
      // 局部注册的组件
    components: {
        Recommend
    },
    data () {
        return {
            
        }
    },
}
</script>
<style>
.home-recommend{
    background:#fff;
    display: flex;
    justify-content: space-between;
    padding:0 5.4rem;
    font-size:3rem;
    flex-wrap: wrap;
}
</style>