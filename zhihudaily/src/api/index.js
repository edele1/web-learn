import axios from 'axios';
axios.defaults.baseUrl ="http://localhost:8080/api";
axios.interceptors.response.use(res=>{
    return res.data;
},error=>{
    console.log(error.toJSON())
    return Promise.reject(error);
})

//首页最新数据，轮播图，列表
export const getLatest =()=>{
    return axios.get('/news/latest')
}
//详情页数据
export const getNewById=(id)=>{
    return axios.get('/news/'+id);
}
//过往数据
export const getNewBefore = (date)=>{
    return axios.get('/news/before/'+date);
}