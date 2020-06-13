import axios from "axios";

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
        axios.post("https://vuejsapi.georgekprojects.tk/api/cart",cartItem)
        .then(response => {
          commit("UPDATE_CART_ITEMS", response.data.data);          
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

