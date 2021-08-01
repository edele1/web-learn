<template>
<!-- 轮播图 -->
 <div class="block">
    <el-carousel height="150px">
      <el-carousel-item v-for="item in items" :key="item">
        <a :href="item.href">
          <img :src="item.image"/>
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script>
import {getLatest} from '@/api'

export default {
  name: 'Home',
  data () {
    return {
    items:[],
    }
  },
  //异步获取数据
  async created() {
    let data = await getLatest();
    this.items=data.top_stories;
    // console.log(data);
  },
  components: {
    
  }
}
</script>
<style scoped>
.el-carousel-item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel-item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel-item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
