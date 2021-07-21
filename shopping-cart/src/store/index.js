import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
// import actions from './modules/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: { //=data
    
  },
actions:{},
  getters:{ //computed properties
    },
  mutations:{
      },

  modules:{
    cart,
    products

  }
  
})
