//import axios from 'axios';
function request(url, type, data = {}, config = {}) {
    //return axiosRequest(url,type,data,config)
    return fetchRequest(url, type, data)
}
// function axiosRequest(url,type="get",data={},config={}){
//     let params=null,result,stype=type;
//     if(type==='file'){
//         stype="post";
//         if(data instanceof Object){
//             params=new FormData();
//             for(let key in data){
//                 params.append(key,data[key]);
//             }
//         }
//     }else if(type==='post') {
//         if (data instanceof Object) {
//             params = new URLSearchParams()
//             for (var key in data) {
//                 params.append(key, data[key]);
//             }
//         }
//         stype=type;
//     }
//     let ajaxConfig= {
//         method:stype,
//         url:url,
//         data: params,
//         proxy:true//支持代理解决跨域
//     }
//     if(type==="file"){
//         if(config instanceof Object){
//             for(let key in config){
//                 ajaxConfig[key]=config[key];
//             }
//         }
//     }
//     result=axios(ajaxConfig).then(res=>res.data);
//     return result;
// }

function fetchRequest(url, type = "get", data = {}) {
    let params = "", headers = {}, config = {};
    if (type === 'file') {
        type = "post";
        // if (data instanceof Object) {
        //     params = new FormData();
        //     for (let key in data) {
        //         params.append(key, data[key]);
        //     }
        // }
        config = {
            method: type,
            body: data
        }
    } else if (type === 'get') {
        config = {
            method: type,
            headers
        }
    } else {
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        if (data instanceof Object) {
            for (var key in data) {
                params += "&" + key + "=" + encodeURIComponent(data[key]);
            }
            params = params.slice(1);
        }
        config = {
            method: type,
            headers,
            body: params
        }
    }
    let result = fetch(url, config).then(res => res.json());
    return result;
}
export {
    request
}
