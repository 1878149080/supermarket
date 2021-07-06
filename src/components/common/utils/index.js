
//防抖函数
function debounce(func,delay=0){
    let time = null;
    return function(...args){
        if(time){
            clearTimeout(time);
        }
        let context = this;
        console.log(this);
        time = setTimeout(() => {
            func.apply(context,args);
        }, delay);
    }
}

export {
    debounce
}