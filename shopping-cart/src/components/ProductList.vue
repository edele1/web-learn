<template>
  <div>
      <h1>Product List</h1>
      <ul>
          <li v-for="product in products" :key="product.id">
              {{product.title}}-{{product.price | currency}}-{{product.inventory}}
              <button @click="addProductToCart(product)">Add to Cart</button>
            </li>
      </ul>
  </div>
</template>

<script>
import {mapState, mapGetters,mapActions} from 'vuex'
export default {
    computed: {
        ...mapState({
        products:state => state.products.items,
    }),
    ...mapGetters({
        productsInStock:'productsTnStock'
    })},
    // computed:{
    //     products(){
    //         return this.$store.getters.availableProducts
    //     }
    // },
    methods:{
        ...mapActions({
            fetchProducts:'fetchProducts',
            addProductToCart:'addProductToCart'
        }),
    },
    created() {
        this.fetchProducts()
    }

}
</script>

<style>

</style>