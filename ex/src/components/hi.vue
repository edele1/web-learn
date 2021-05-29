<template>
  <div>
      hi
      <p>{{ message }}</p>
      <input type="button" @click="say_hi('jim')" value="..."/>
      <ul>
        <li v-for="item in items" :key="item.message">
          {{ item.message }}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        
       items: [
          { message:'a' },
          { message:'b' },
          { message:'c' }
        ]
        return {
          message: 'nihao'
        }
    },
    methods: {
        say_hi:function(name){
          alert('hi,'+name)
        },
    }
}

</script>

<style>

</style>