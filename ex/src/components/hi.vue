<template>
  <div>
      hi
      <p>{{ message }}</p>
      <input type="button" @click="say_hi('jim')" value="..."/>
      <!-- <ul>
        <li v-for="item in items" :key="item.message">
          {{ item.message }}
        </li>
      </ul> -->
      <div>{{ fullName }}</div>
  </div>
</template>

<script>
export default {
    data(){
        firstName:'Foo',
        lastName :'Bar'
      //  items: [
      //     { message:'a' },
      //     { message:'b' },
      //     { message:'c' }
      //   ]
        return{
          message: 'nihao'
        }
    },
    computed: {
      fullName:function(){
        return this.firstName + '' + this.lastName
      }},
    methods:{
        say_hi:function(name){
          alert('hi,'+name)
        },
    }
}

</script>

<style>

</style>