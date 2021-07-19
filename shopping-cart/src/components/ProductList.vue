<template>
  <div>
      <h1>Product List</h1>
      <ul>
          <li v-for="product in products" :key="product.id">
              {{product.title}}-{{product.price}}-{{product.inventory}}
              <button @click="addProductToCart(product)">Add to Cart</button>
            </li>
      </ul>
  </div>
</template>

<script>
export default {
    computed:{
        products(){
            return this.$store.getters.availableProducts
        }
    },
    methods:{
        addProductToCart(product){
            this.$store.dispatch('addProductToCart',product)
        }
    },
    created() {
        this.$store.dispatch('fetchProducts')
    }

}
</script>

<style>

</style>