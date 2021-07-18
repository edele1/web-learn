import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //=data
    products:[]
  },
  getters:{ //computed properties
    productsCount(){

    }
  },
  mutations: {
    setProducts(state,products){
      //update products
      state.products = products
    }
  },
  actions: {
    fetchProducts(){//make the call

    }
  },
  modules: {
  }
})
