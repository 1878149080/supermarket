<template>
    <div id="bar-control" title="title">
        <div 
        v-for="(item,index) in title" 
        :key='item' class="shadow" 
        :class="{'active-control':index==currentIndex}"
        @click='isActive(index)'>
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
      // 组件名称
    name: 'barControl',
    // 组件参数 接收来自父组件的数据
    props: ['title'],
      // 局部注册的组件
    components: {},
      // 组件状态值
    data () {
        return {
            currentIndex : 0
        }
    },
    methods : {
        isActive(index){
            return this.currentIndex = index;
        }
    }
}
</script>
<style>
#bar-control{
    display:flex;
    justify-content: space-between;
    align-items: center;
    /* padding:0 5.5rem; */
    font-size:4rem;
    font-weight: 900;
    margin-top:3rem;
    background: #fff;
    height:10rem;
    /* line-height: 10rem; */
}
#bar-control>div{
    flex:1;
    text-align: center;
    /* width:20rem; */
    line-height: 7rem;
}
.active-control{
    color:red;
    box-shadow: 0px 1rem 0 -1px red;
}
</style>