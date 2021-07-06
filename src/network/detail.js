import {request} from './request'

export function getDetail(id){
    return request({
        url : 'http://www.liulongbin.top:3006/api/getbooks',
        get : 'get',
        params : {
            id : id
        }
    });
}