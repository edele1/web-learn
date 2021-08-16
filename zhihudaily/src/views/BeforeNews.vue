<template>
   <!-- 往日 -->
   <div class="infinite-list-wrapper" style="overflow:auto">
      <ul> 
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
     </ul>
     <button @click="load">加载更多...</button>
   </div>
</template>

<script>
import _ from 'lodash'
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
    mounted(){
        },
    watch:{
        day(newVal){
            this.days=newVal
        },
        },
    methods: {           
         async load () {
            this.loading=true
             if(this.loading){
            console.log(this.days)
            this.loading=false
            try{
                let data=await getNewBefore(this.days)
                this.data=this.data.concat(data.stories)
                let {date} = data
                this.days=date
            }catch(e){
                this.$message.error('error')
            }}
            this.loading=false
             
              },
    }
}
</script>

<style>

</style>