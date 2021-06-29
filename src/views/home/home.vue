<template>
    <div id="home">
      <mynav color="#fff" bcolor="pink" class="mynav">购物街</mynav>
      <carousel :carousel='carousel'></carousel>
      <home-recommend :recommend='recommend'></home-recommend>
      <feature :week='week'></feature>
      <bar-control :title="title" class="bar-control" @tabclick="tabClick"></bar-control>
      <goods :goods="goods[currentType].list"></goods>
      home
      home
      home
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      </div>
</template>

<script>
import mynav from "../../components/common/nav/item-nav.vue"
import carousel from "../../components/common/carousel/carousel.vue"
import HomeRecommend from "./children/HomeRecommend.vue"
import feature from './children/feature.vue'
import barControl from "../../components/content/barControl.vue"
import goods from '../../components/content/goods/goods.vue'

import {
  getCarousel, 
  getRecommend, 
  getHomeGoods
  } from '../../network/home'

export default {
      // 组件名称
    name: 'home',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {
      mynav,
      carousel,
      HomeRecommend,
      feature,
      barControl,
      goods
    },
      // 组件状态值
    data () {
        return {
          currentType : 'pop',
          carousel : [],
          // images : null,
          recommend :[
                {image:'../../assets/images/beauty.webp',link:"#",text:'你好'},
                {image:'../../assets/images/beauty.webp',link:"#",text:'我好'},
                {image:'../../assets/images/beauty.webp',link:"#",text:'他好'},
                {image:'../../assets/images/beauty.webp',link:"#",text:'大家好'}
          ],
          week : [
            {image:'../../../assets/images/beauty.webp',link:"#",text:'衣服'},
            {image:'../../../assets/images/beauty.webp',link:"#",text:'鞋子'},
            {image:'../../../assets/images/beauty.webp',link:"#",text:'袜子'},
            {image:'../../../assets/images/beauty.webp',link:"#",text:'裤子'},
            {image:'../../../assets/images/beauty.webp',link:"#",text:'手套'},
            {image:'../../../assets/images/beauty.webp',link:"#",text:'哈哈哈'},
            {image:'../../../assets/images/beauty.webp',link:"#",text:'呵呵呵'},
            {image:'../../../assets/images/beauty.webp',link:"#",text:'你好'}
          ],
          title : ['流行','new','精选'],
          goods : {
            pop : {
              page : 0,
              list : [
                {image : '../../assets/images/beauty.webp',description : '份的如果他就和规范的撒头鲍鱼鸡风凉话',price :998},
                {image : '../../assets/images/beauty.webp',description : '份的如果他就和规范的撒头鲍鱼鸡风凉话',price :998},
                {image : '../../assets/images/beauty.webp',description : '份的如果他就和规范的撒头鲍鱼鸡风凉话',price :998},
                {image : '../../assets/images/beauty.webp',description : '份的如果他就和规范的撒头鲍鱼鸡风凉话',price :998},
              ]
            },
            new : {
              page : 0,
              list : [
                {image : '../../assets/images/beauty.webp',description:'水电费规划就规范电饭锅发的',price : 254},
                {image : '../../assets/images/beauty.webp',description:'水电费规划就规范电饭锅发的',price : 254},
                {image : '../../assets/images/beauty.webp',description:'水电费规划就规范电饭锅发的',price : 254},
                {image : '../../assets/images/beauty.webp',description:'水电费规划就规范电饭锅发的',price : 254},
              ]
            },
            select : {
              page : 0,
              list : []
            }
          }
        }
    },
    created(){
      //发送请求
      this.getCarousel();
      this.getRecommend();

      this.getHomeGoods('new');
      this.getHomeGoods('select')
      this.getHomeGoods('pop')
    },
    methods : {
      //事件监听
      tabClick(index){
        this.currentType = index;
        switch(index){
          case 0 : 
            this.currentType = 'pop'
            break;
          case 1 : 
            this.currentType = 'new'
            break;
          case 2 : 
            this.currentType = 'select'
            break;
        }
        console.log(index);
      },

      //网络请求方法
      getCarousel(){
        getCarousel().then(res=>{
          // this.carousel.push(res);
        })
      },
      getRecommend(){
        getRecommend().then(res=>{
          // this.recommend = res;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page++;
        getHomeGoods(type,page).then(res=>{
          // this.goods[type].list.push(...res);
        });
      }
    }
}
</script>
<style>
.bar-control{
  position:sticky;
  top:44px;
}
.mynav{
  position:sticky;
  top:0;
}
</style>