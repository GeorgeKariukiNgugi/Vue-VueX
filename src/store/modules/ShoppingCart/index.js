import axios from "axios";
import Vue from 'vue';
const state = {
    cartItems: []
};
const mutations = {
    UPDATE_CART_ITEMS(state, payload) {
        state.cartItems = payload
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
    addingProductToCart({commit},cartItem){
        // ! adding the data that will be posted.
        var obj = {};        
        obj['productId'] = cartItem.id;
        obj['quantity'] = 1;
        axios.post("https://vuejsapi.georgekprojects.tk/api/cart",obj)
        .then(response => {
          console.log(response);
          commit("UPDATE_CART_ITEMS", response.data);    
          // Vue.swal(cartItem.name+" Added to Cart."); 
          Vue.swal.fire({
            position: 'center',
            icon: 'success',
            title: cartItem.name+' Added To Cart.',
            showConfirmButton: true,
            timer: 4500
          })         
        })
        .catch(error => {
          console.log("The call was unsuccessful to post data to cart.", error);
        });
    }
};
const getters = {
    cartItems: state => state.cartItems,
};

const ShoppingCartModule = {
    state,
    mutations,
    actions,
    getters,
}

export default ShoppingCartModule;

