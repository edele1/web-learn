<template>
   <!-- 往日 -->
   <div class="infinite-list-wrapper" style="overflow:auto">
      <ul 
      v-infinite-scroll="load"
      infinite-scroll-immediate="false"> <!--下滑加载-->
    <li v-for="i in data" :key="i.id">
        <router-link class="list"
       :to="{name:'NewDetail',params:{id:i.id}}">
        <div class="list-text">
       <div class="list-title">{{i.title}}</div>
       <div class="list-hint">{{i.hint}}</div>
       </div>
       <img class="list-img"
        :src="i.images" alt=""/>
        </router-link>
    </li>
       <p v-if="loading">加载中...</p>
     </ul>
   </div>
</template>

<script>
import {getNewBefore} from '@/api'
export default {
    name:'BeforeNews',
    props:['day'],
    data(){
        return{
        data:[],
        date:'',
        num:0,
        count: 10,
        loading: false,
        days:'',
        }
    },
    created(){
    },
    watch:{
        day(newVal){
            this.days=newVal
        },
        },
    methods: {
        load () {
        this.loading = true
        console.log(this.days)
        let timer=setTimeout(async()=>{
            let data=await getNewBefore(this.days)
            this.data=this.data.concat(data.stories)
            this.loading = false
            let {date} = data
            this.days=date
            console.log(this.days)
            clearTimeout(timer)
        }, 2000);
       
    },
    }
}

</script>

<style>

</style>