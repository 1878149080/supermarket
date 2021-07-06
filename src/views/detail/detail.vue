<template>
    <div class="detail">
        <detailNav @titleClick="titleClick" ref="detailNav"></detailNav>
        <scroll class="wrapper"
        ref='scroll'
        :probe-type="3" 
        :pullUpLoad='true'
        @scroll="positionChange">
          <carousel></carousel>
          <shop-info ref="info"></shop-info>
          <shop-message ref="message"></shop-message>
          <shop-photo ref="photo"></shop-photo>
        </scroll>
        <back-top @click.native="backClick" :show="show"></back-top>
        <detail-bar></detail-bar>
    </div>
</template>

<script>
// 公共组件
import carousel from "../../components/common/carousel/carousel.vue"
import scroll from "../../components/common/scroll/scroll.vue"

// 引用项目共用组件
import shopInfo from "../../components/content/detailShow/shopInfo.vue"
import shopMessage from "../../components/content/detailShow/shopMessage.vue"
import shopPhoto from "../../components/content/detailShow/shopPhoto.vue"

// 引入子组件
import detailBar from "./children/detailBar.vue"

// 引入混入文件
import {backTopMixin} from "../../commonjs/mixin"

// 引入工具文件
import {debounce} from "../../components/common/utils/index"

// 子组件
import detailNav from "./children/detailNav.vue"


//网络请求
import {getDetail} from "../../network/detail"
export default {
      // 组件名称
    name: 'detail',
    // 组件参数 接收来自父组件的数据
    props: {},
    mixins : [backTopMixin],
      // 局部注册的组件
    components: {
      carousel,
      scroll,
      shopInfo,
      shopMessage,
      shopPhoto,
      detailBar,
      detailNav,
    },
      // 组件状态值
    data () {
        return {
          id : null,
          data : null,
          themeY : [],
          currentIndex : 0,
        }
    },
    created(){
      this.getId();
      this.getDetail();
    },
    methods : {
      getId(){
        this.id = this.$route.query.id;
      },
      getDetail(){
        getDetail(this.id).then(res=>{
          this.data = res;
          console.log(res);
        });
      },
      changePosition(){
        console.log(12345);
      },
      loadMore1(){
        console.log(1234);
      },
      titleClick(index){
        console.log(this.themeY);
        console.log(this.themeY[index]);
        this.$refs.scroll.scroll.scrollTo(0,this.themeY[index],500);
      },
      positionChange(position){
        for(var i=0;i<this.themeY.length;i++){
          // console.log(11111);
          // console.log(position.y);
          if((i<this.themeY.length-1 && position.y<this.themeY[i] && position.y>this.themeY[i+1] || (i==this.themeY.length-1 && position.y<this.themeY[i]))){
            this.$refs.detailNav.currentIndex = i;
          }
        }

        this.contentScroll(position);
        // console.log(position);
      }
    },
    mounted(){
      this.$nextTick(()=>{
        // debounce(()=>{
          this.themeY=[];
          this.themeY.push(0)
          this.themeY.push(-this.$refs.info.$el.offsetTop)
          this.themeY.push(-this.$refs.message.$el.offsetTop)
          this.themeY.push(-this.$refs.photo.$el.offsetTop)
        // },100);
      })
    }
}
</script>
<style scoped>
.detail{
  position:relative;
  z-index:99;
}
.wrapper{
  height:calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>