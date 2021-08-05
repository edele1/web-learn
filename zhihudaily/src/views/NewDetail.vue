<template>
  <div>
      {{text}}
  </div>
</template>

<script>
import {getNewById} from '@/api'
export default {
data(){
  return {
    text:[]
  }
},
async created(){
  let text = await getNewById(3977867);
  this.text=text
  
}

}
</script>

<style>

</style>