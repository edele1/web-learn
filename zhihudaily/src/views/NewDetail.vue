<template>
  <div v-html="text.body" :style="text.css" :script="text.js">
  </div>
</template>

<script >
import {getNewById} from '@/api'
export default {
data(){
  return {
    text:[],
    id:''
  }
},

async created(){
  this.id = this.$route.params.id
  let text = await getNewById(this.id);
  this.text=text
  
}

}
</script>

<style >

</style>