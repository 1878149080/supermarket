<template>
    <div class="detailNav">
        <item-nav>
            <div slot="left" class="left" @click="backClick">返回</div>
            <template>
                <div class="center1">
                    <span 
                    v-for="(item,index) in title" 
                    :key="index"
                    :class="{isActive : currentIndex == index}"
                    @click="active(index)"
                    >{{item}}</span>
                </div>
            </template>
        </item-nav>
    </div>
</template>

<script>
// import ItemNav from '../../../components/common/nav/item-nav.vue'
import itemNav from "../../../components/common/nav/item-nav.vue"
export default {
      // 组件名称
    name: 'detailNav.vue',
    // 组件参数 接收来自父组件的数据
    props: {
       
    },
      // 局部注册的组件
    components: {
        itemNav
    },
      // 组件状态值
    data () {
        return {
            currentIndex : 0,
            title :['商品','参数','评论','推荐']
        }
    },
    methods : {
        active(index){
            this.currentIndex = index;
            this.$emit("titleClick",index);
        },
        backClick(){
            this.$router.go(-1);
        }
    }
}
</script>
<style>
.left{
    font-size:18px;
}
.center1{
    width:100%;
    padding: 0 3rem;
    font-size:14px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.isActive{
    color:red;
}

</style>