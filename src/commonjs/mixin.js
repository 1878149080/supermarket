import backTop from "../components/content/backTop/backTop.vue"


export const backTopMixin = {
    components : {
        backTop
    },
    data(){
        return {
            show : false,
        }
    },
    methods : {
        backClick(){
            // console.log(this.$refs.scroll);
            this.$refs.scroll.scrollTop(0,0);
        },
        contentScroll(position){
            this.show = position.y < -500
        },
    }
}