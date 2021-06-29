import {request} from './request'




export function getCarousel(){
    return request({
        url : 'http://www.liulongbin.top:3006/api/getbooks',
        method : 'get',
    });
}

export function getCarouselTwo(){
    return request({
        url : 'http://www.liulongbin.top:3006/api/getbooks',
        method : 'get',
    });
}

export function getCarouselThree(){
    return request({
        url : 'http://www.liulongbin.top:3006/api/getbooks',
        method : 'get',
    });
}

export function getRecommend(){
    return request({
        url : 'http://www.liulongbin.top:3006/api/getbooks',
        method : 'get'
    });
}

export function getWeek(){
    return request({
        url : 'http://www.liulongbin.top:3006/api/getbooks',
        method : 'get'
    });
}




export function getHomeGoods(type,page){
    return request({
        url : 'http://www.liulongbin.top:3006/api/getbooks',
        method : 'get',
        params : {
            type : type,
            page : page
        }
    })
}

