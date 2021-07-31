<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import {getLatest} from '@/api'

export default {
  name: 'Home',
  //异步获取数据
  async created() {
    let data = await getLatest();
    console.log(data);
  },
  components: {
    
  }
}
</script>
