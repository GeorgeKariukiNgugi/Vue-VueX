import axios from "axios";
import Vue from 'vue';
const state = {
  cartItems: [],
  loading: false,
  loadingDeletingItem: true,
  loadingUpItem: true,
  loadingDownItem: true,
};
const mutations = {
  UPDATE_CART_ITEMS(state, payload) {
    state.cartItems = payload
  },
  UPDATING_LOAD_STATE(state, payload){
    state.loading = payload
  },
  UPDATING_LOAD_UP_STATE(state, payload){
    state.loadingUpItem = payload
  },
  UPDATING_LOAD_DOWN_STATE(state, payload){
    state.loadingDownItem = payload
  },
  UPDATING_LOAD_DELETE_STATE(state,payload){
    state.loadingDeletingItem = payload
  }
};
const actions = {
  getAllCartItems({ commit }) {
    axios.get("https://vuejsapi.georgekprojects.tk/api/cart")
      .then(response => {
        commit("UPDATE_CART_ITEMS", response.data.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("The call was unsuccessful to get all products.", error);
      });
  },
  addingProductToCart({ commit }, cartItem) {
    // ! adding the data that will be posted.
    // this.loader = true;
    commit("UPDATING_LOAD_STATE", true);
    var obj = {};
    obj['productId'] = cartItem.id;
    obj['quantity'] = 1;
    axios.post("https://vuejsapi.georgekprojects.tk/api/cart", obj)
      .then(response => {
        console.log("Adding.");
        console.log(response);
        commit("UPDATE_CART_ITEMS", response.data);
        commit("UPDATING_LOAD_STATE", false);
        
        // ! adding the notification.
        Vue.swal.fire({
          position: 'center',
          icon: 'success',
          title: cartItem.name + ' Added To Cart.',
          showConfirmButton: true,
          timer: 4500
        })
      })
      .catch(error => {
        console.log("The call was unsuccessful to post data to cart.", error);
      });
  },
  deletingTheCartItems({ commit }, cartItem) {
    console.log(cartItem);
    
    axios.delete("https://vuejsapi.georgekprojects.tk/api/cart/" + cartItem.id).then(
      response => {
        console.log("Deleting the cart Item.");
        if (response.status == 201) {
          commit("UPDATE_CART_ITEMS", response.data);
          // ! adding the notification.
          Vue.swal.fire({
            position: 'center',
            icon: 'question',
            title: cartItem.name + ' Deleted From Cart.',
            showConfirmButton: true,
            timer: 4500
          })
        } else {
          console.log("Error.");
        }


        console.log(response);

      })
      .catch(error => {
        console.log("The call was unsuccessful to delete data from cart.", error);
      });
  },
  downUpdatingCartItems({commit}, cartItem,number) {
    commit("UPDATING_LOAD_DOWN_STATE", true);      
    console.log(number);
    var obj = {};   
    obj['quantity'] = cartItem.quantity - 1; 
    axios.put('https://vuejsapi.georgekprojects.tk/api/cart/'+cartItem.id,obj).then(
      response => {
        console.log("Updating the cart Item.");
        if (response.status == 201) {
          commit("UPDATE_CART_ITEMS", response.data);
          // ! adding the notification.
          commit("UPDATING_LOAD_DOWN_STATE", false);  
          Vue.swal.fire({
            position: 'center',
            icon: 'question',
            title: cartItem.name + ' Updated From Cart.',
            showConfirmButton: true,
            timer: 4500
          })
        } else {
          console.log("Error.");
        }


        console.log(response);

      })
      .catch(error => {
        console.log("The call was unsuccessful to update data from cart.", error);
      });
  },
  addUpdatingCartItems({commit}, cartItem,number) {  
    commit("UPDATING_LOAD_UP_STATE", true);    
    console.log(number);
    var obj = {};   
    obj['quantity'] = cartItem.quantity + 1;
    axios.put('https://vuejsapi.georgekprojects.tk/api/cart/'+cartItem.id,obj).then(
      response => {
        console.log("Updating the cart Item.");
        if (response.status == 201) {
          commit("UPDATE_CART_ITEMS", response.data);
          commit("UPDATING_LOAD_UP_STATE", false);          
          // ! adding the notification.
          Vue.swal.fire({
            position: 'center',
            icon: 'question',
            title: cartItem.name + ' Updated From Cart.',
            showConfirmButton: true,
            timer: 4500
          })
        } else {
          console.log("Error.");
        }


        console.log(response);

      })
      .catch(error => {
        console.log("The call was unsuccessful to update data from cart.", error);
      });
  },
};
const getters = {
  loadingDownItem: state=>state.loadingDownItem,
  loadingUpItem: state => state.loadingUpItem,
  cartItems: state => state.cartItems,
  loading: state => state.loading,
  allProductsCost: state =>{
    return state.cartItems.reduce((acc,cartItem)=>{
      return (cartItem.quantity*cartItem.price)+acc;
    },0).toFixed(2);
  },
};

const ShoppingCartModule = {
  state,
  mutations,
  actions,
  getters,
}

export default ShoppingCartModule;

