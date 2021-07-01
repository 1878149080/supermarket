<template>
    <div class="scroll" ref='content'>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BetterScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'

BetterScroll.use(PullUp);

export default {
      // 组件名称
    name: 'scroll',
    // 组件参数 接收来自父组件的数据
    props: {
        probeType : {
            type : Number,
            default : 0
        },
        pullUpLoad : {
            type : Boolean,
            defalue : false
        }
    },
      // 局部注册的组件
    components: {},
      // 组件状态值
    data () {
        return {
            scroll : null
        }
    },
    mounted(){
        this.scrollInit();
        this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position);
        })
        this.pull();
    },
    methods : {
        scrollInit(){
            this.scroll = new BetterScroll(this.$refs.content,{
                click : true,
                probeType : this.probeType,
                pullUpLoad : this.pullUpLoad,
                observeDOM : true,
                observeImage :true
            });
            console.log('scroll初始化完成');
        },
        scrollTop(x=0,y=0,time=3000){
            this.scroll.scrollTo(x,y,time);
        },
        pull(){
            this.scroll.on('pullingUp',()=>{
                this.$emit('pullingUp');
                // this.scroll.finishPullUp();
                // this.scroll.refresh();
            })
        }
    },
    created(){
    }
}
</script>
<style scoped>

</style>