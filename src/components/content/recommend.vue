<template>
    <a :href="link" class="recommend" 
    link="link" 
    image='image' 
    text='text'>
        <img  src="../../assets/images/beauty.webp">
        <!-- <img :src="image"> -->
        <p>{{text}}</p>
    </a>
</template>

<script>
export default {
      // 组件名称
    name: 'recommend',
    // 组件参数 接收来自父组件的数据
    props: {
        link : {
            type : String,
            default : '#'
        },
        image : {
            type : String,
            default : "../../assets/images/beauty.webp"
        },
        text : {
            type : String,
            default : 'hello world'
        }
    },
      // 局部注册的组件
    components: {},
      // 组件状态值
    data () {
        return {
            recommend : null,
        }
    },
    computed : {
       
    }
}
</script>
<style>
.recommend{
    text-align: center;
    margin:1rem;
}
.recommend>img{
    display: inline-block;
    width:20rem;
    height:20rem;
    border-radius: 50%;
    background:red;
    text-align: center;
    font-size:1rem;
    /* border:none; */
    /* line-height:20rem; */
    /* line */
    /* outline:1px solid red; */
}
.recommend>p{
    margin-top:1px;
    font-size:1rem;
}
</style>