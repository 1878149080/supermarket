<template>
    <div class="shop-info">
        <p class="message"><span class="title">【妹妹】</span>的减肥；拉克的设计费大姐夫讲课费的观点撒旦法会替换放到二阿道夫阿道夫更丰富和大是大非大师傅撒旦法</p>
        <p class="price">
            <span class="oldPrice">￥13232</span>
            <span class="newPrice">￥3434343</span>
        </p>
        <p class="saleInfo">
            <span>销量 123</span>
            <span>收藏 23</span>
            <span>23小时发布</span>
        </p>
        <p class="other">
            <span>退货补运费</span>
            <span>全国包邮</span>
            <span>8天无理由退货</span>
        </p>
    </div>
</template>

<script>
export default {
      // 组件名称
    name: 'shopInfo',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {},
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style>
.shop-info{
    width:100%;
    padding:0 3rem;
    background-color:#fff;
    padding-bottom:5rem;
    box-shadow: 0px 0px 8px 0px rgb(197, 195, 195);
    padding-top:3rem;
}
.shop-info>.message{
    font-size:15px;
    font-weight: 600;
}
.shop-info .title{
    /* font-size: */
}
.shop-info .price{
    margin-top:1rem;
}
.shop-info .oldPrice{
    color:#ff0033;
    font-weight: 900;
    font-size: 20px;
    margin-right:1rem;
}
.shop-info .newPrice{
    font-size: 13px;
    text-decoration: line-through;
    font-weight: normal;
}
.shop-info .saleInfo{
    width:100%;
    /* margin-top:3rem; */
    display: flex;
    justify-content: space-between;
    line-height:10rem;
    border-bottom:1px solid #C4C4C4;
    font-size: 14px;
    color:	#C4C4C4;
    font-weight:normal;
}
.shop-info .other{
    display: flex;
    justify-content: space-between;
    margin-top:5rem;
    font-size:12px;
    font-weight: 600;
}
</style>