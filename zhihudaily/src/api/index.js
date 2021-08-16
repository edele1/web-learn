import axios from 'axios';
axios.defaults.baseURL ="http://localhost:8080";
axios.interceptors.response.use(
    (res)=>{
    return res.data;
},
(error)=>{
    console.log(error.toJSON())
    return Promise.reject(error);
})

//首页最新数据，轮播图，列表
export const getLatest =()=>{
    return axios.get('/api/3/news/latest')
}
//详情页数据
export const getNewById=(id)=>{
    return axios.get('/api/3/news/'+id);
}
//过往数据
export const getNewBefore = (date)=>{
    return axios.get('/api/3/news/before/'+date);
}