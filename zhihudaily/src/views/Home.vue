<template>
<!-- 头部 -->
<div class="block">
  <header>
    <div class="head-left">
      <span id="day">{{day}}</span>
      <span id="month">{{}}</span>
    </div>
    <div class="head-middle"></div>
    <div class="head-right"></div>
  </header>

 <!-- 轮播图 -->
    <el-carousel>
      <el-carousel-item v-for="item in items" :key="item.id">
        <a :href="item.url">
          <img :src="item.image"/>
        </a>
      </el-carousel-item>
    </el-carousel>
  
<!-- 列表 -->
   <div>
     <!-- 今日 -->
     <ul>
       <li 
       v-for="list in lists" :key="list.id">
       <span>{{list.title}}</span>
       <img :src="list.images" alt=""/>
       </li>
      </ul>

      <!-- 往日 -->
      <ul v-infinite-scroll="load">
       <li 
       v-for="beforelist in beforelists" :key="beforelist.id">
       <span>{{beforelist.title}}</span>
       <img :src="beforelist.images" alt=""/>
       </li>
       <p v-if="loading">加载中...</p>
     </ul>
   </div> 
</div>
</template>

<script>
import {getLatest,getNewById,getNewBefore} from '@/api'


export default {
  name: 'Home',
  
  data () {
    return {
    items:[],
    lists:[],
    beforelists:[],
    dateStr:'',
    count: 10,
    loading: false
    }
  },

 computed: {

    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.lists = this.lists
          this.loading = false
        }, 1000)
        // return new Promise(
        //   (res)=>{
        //     getNewBefore()
        //   }
        // )
      },
      
  // 格式化时间
  getDate(){
    let date = new Date();
    console.log(date);
    let year = date.getFullYear();
    let month = date.getMonth() +1;
    let day = date.getDate();
    month = month<10? "0"+month: month;
    day = day<10? "0"+day: day;
    return this.dateStr = year + month + day;
  },
    },

  
  //异步获取数据
  async created() {
    let items = await getLatest();
    this.items=items.top_stories;
    // console.log(this.items);
    let lists = await getLatest();
    this.lists=lists.stories;
    // console.log(this.lists)
    this.getDate();
    console.log(this.dateStr);
    console.log(date);
    let beforelists = await getNewBefore(this.dateStr);
    this.beforelists=beforelists.stories;
    
    //console.log(this.beforelists);
  },
  

  components: {
    
  }
}
</script>
<style scoped >
.block{
  width: 800px;
  margin:0 auto;
}
img{
  width:100%;
  height:90%
}
.carousel-item{
  float: left;
}

</style>
