import shop from '@/api/shop'
export default{
    state:{
        items:[]
    },
    getters:{
        availableProducts(state){
            return state.items.filter(product => product.inventory>0)
          },
          
    },
    actions:{
        fetchProducts({commit}){
            return new Promise((resolve,reject)=>{
              shop.getProducts(products => {
              commit('setProducts',products)
              resolve()
          })})//make the call
            
          },
        },
    mutations: {
        setProducts(state,products){
            //update products
            state.items = products
          },
          
          
          decreamentProductInventory(state,product){
            product.inventory --;
          },
      
    }
}