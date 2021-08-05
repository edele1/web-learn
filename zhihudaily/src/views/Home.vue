<template>
<!-- 头部 -->
<div class="clock">
  <header class="head">
    <div class="head-left">
      <div id="day">5</div>
      <div id="month">8月</div>
    </div>
    <div id="vert"></div> 
    <div class="head-mid">知乎日报</div>
    <div class="head-right"></div>
  </header>

 <!-- 轮播图 -->
    <el-carousel class="nav">
      <el-carousel-item v-for="item in items" :key="item.id">
        <router-link :to="{name:'NewDetail',params:{id:20210805}}">
          <img :src="item.image"/>
        </router-link>
      </el-carousel-item>
    </el-carousel>
  
<!-- 列表 -->
   <div >
     <!-- 今日 -->
     <ul>
       <li class="list"
       v-for="list in lists" :key="list.id">
       <div class="list-text">
       <div class="list-title">{{list.title}}</div>
       <div class="list-hint">{{list.hint}}</div>
       </div>
       <img class="list-img"
        :src="list.images" alt=""/>
       </li>
      </ul>
   </div>

   <before-news></before-news>
</div>
</template>

<script>
import {getLatest} from '@/api'
import BeforeNews from './BeforeNews.vue'

export default {
  name: 'Home',
  components: {
    BeforeNews
  },
  data () {
    return {
      // test:[1,2],
    items:[],
    lists:[],
    day:[],
    }
  },

 computed: {

    },
    methods: {
      
    },

  //异步获取数据
  async created() {
    let items = await getLatest();
    this.items=items.top_stories;
    // console.log(this.items);
    let lists = await getLatest();
    this.lists=lists.stories;
    let {date}=lists;
    this.day=date;
    // console.log(this.lists)
 
    // console.log(this.beforelists);
  },

}
</script>
<style>
.block{
  width: 800px;
  margin:0 auto;
}
.head{
  background-color: #fff;
  height:50px;
  display: flex;
  flex-direction:row;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 99;
}
.head-left{
flex-grow:1;
}
#day{
  font-weight: bolder;
  font-size:20px;
  text-align: center;
}
#month{
  text-align: center;
  font-weight: normal;
}
#vert{
  margin-top: 5px;
  width: 1px;
  height: 40px;
   background: darkgray;
}
.head-mid{
  flex-grow:8;
  padding-left:20px;
  font-weight:bolder;
  font-size:20px;
  line-height: 50px;
}
.nav img{
  width:100%;
  height:90%
}
ul{
  list-style-type:none;
  padding:0 10px;
}
.list{
  display: flex;
  margin-top:10px;
}
.list-text{
  
}
.list-title{
  font-weight: bold;
  font-size:18px;
  padding-right:2px;
}
.list-hint{
  color:rgb(207, 207, 207);
  font-size:9px;
  margin-top:5px;

}
.list-img{
  margin-left: auto;
  width:20%;
  height:20%;
}

</style>
