import axios from "axios";
import Vue from 'vue';
const state = {
  cartItems: [],
  loading: false,
  loadingDeletingItem: true,
  loadingUpItem: true,
  loadingDownItem: true,
  numberOfCartItems: true,
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
  },
  GETTING_THE_NUMBER_OF_CART_ITEMS(state,payload){
    state.numberOfCartItems = payload
  }
};
const actions = {
  getAllCartItems({ commit }) {
    axios.get("https://vuejsapi.georgekprojects.tk/api/cart",{
      headers: {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI3YmU1Mjk2NDk1N2JiZmE4M2QwNWEwODczODZkOWU1YWE5NzhkNDdiNDY2OGY1ODA4YzIxMmQ2YzI3Y2U4MjE5N2VjZmFlMGJiYzlmYmJkIn0.eyJhdWQiOiIzIiwianRpIjoiYjdiZTUyOTY0OTU3YmJmYTgzZDA1YTA4NzM4NmQ5ZTVhYTk3OGQ0N2I0NjY4ZjU4MDhjMjEyZDZjMjdjZTgyMTk3ZWNmYWUwYmJjOWZiYmQiLCJpYXQiOjE1OTQ3MTUxNDcsIm5iZiI6MTU5NDcxNTE0NywiZXhwIjoxNjI2MjUxMTQ3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.E3KatFFiF0mMGqXRM8H8fhIk8Hi8QspCvETozZ5xgISSZXsxz-9dqhl1Un23mzOY_f9UUinDyBme43qAA-DaEdvb4bo_uExUAp3OgQFXK2HVusXNP8UMZ68SIZuHMANtLaYEO2uGTIbMxZAGGAJXg6ws13o6xdIUuEVWnTmAkxA-jvkpFTbFyNB5Yk1W4lomHmzomPp7cs_y564JiUftBKhTRFyEY4UiCfR90DITXd8bYNxBnYBRgJqZfex5PELP-REcfamy26e2g3AzNtmNaMLD7H-18WPCdZhdTlLN7LF12ZwE4GFDPC-UF-9clKPpxxi12xBaFHQ32v4nG1-s9HZrW_jAqt0FnsmOpqXyeqsP9ABeyzsZTcdekdG5xjBDurCojFA7L3jichUsOQHyzA1n2ptlj0HrzDZvwHNv3jr-F6rpL-3TryijaWxBrJ-oAZX2HFxkguzq4jiAPvMtpUbKaKnqoOXSwlcuTu7QWtlkMQuXueKVEgfbdKA3Ncyij-DVzbFd_YRSoOe_5tf21wVeW-vxfRlclt_tKihaDZzkK0lejrLcEiaUbbpplDt9Q9V1DDp_XwIbEO9C1JSQHYkzRvBJIqVw8mTnI01sX4ADKzUXCE-TuXIlHTD_O-9pf7Uv1JWC3Ee6-mSlvnhpnApqaAP8UgUIsRr-T5qPafI`
      }
    })
      .then(response => {
        commit("UPDATE_CART_ITEMS", response.data.data);
        var products = response.data.data
        var numberOfProducts = products.length 
        
        commit("GETTING_THE_NUMBER_OF_CART_ITEMS", numberOfProducts);                
      })
      .catch(error => {
        console.log("The call was unsuccessful to get all cart Items.", error);
      });
  },
  addingProductToCart({ commit }, cartItem) {
    // ! adding the data that will be posted.
    // this.loader = true;
    commit("UPDATING_LOAD_STATE", true);
    var obj = {};
    obj['productId'] = cartItem.id;
    obj['quantity'] = 1;
    axios.post("https://vuejsapi.georgekprojects.tk/api/cart",obj,{
      headers: {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI3YmU1Mjk2NDk1N2JiZmE4M2QwNWEwODczODZkOWU1YWE5NzhkNDdiNDY2OGY1ODA4YzIxMmQ2YzI3Y2U4MjE5N2VjZmFlMGJiYzlmYmJkIn0.eyJhdWQiOiIzIiwianRpIjoiYjdiZTUyOTY0OTU3YmJmYTgzZDA1YTA4NzM4NmQ5ZTVhYTk3OGQ0N2I0NjY4ZjU4MDhjMjEyZDZjMjdjZTgyMTk3ZWNmYWUwYmJjOWZiYmQiLCJpYXQiOjE1OTQ3MTUxNDcsIm5iZiI6MTU5NDcxNTE0NywiZXhwIjoxNjI2MjUxMTQ3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.E3KatFFiF0mMGqXRM8H8fhIk8Hi8QspCvETozZ5xgISSZXsxz-9dqhl1Un23mzOY_f9UUinDyBme43qAA-DaEdvb4bo_uExUAp3OgQFXK2HVusXNP8UMZ68SIZuHMANtLaYEO2uGTIbMxZAGGAJXg6ws13o6xdIUuEVWnTmAkxA-jvkpFTbFyNB5Yk1W4lomHmzomPp7cs_y564JiUftBKhTRFyEY4UiCfR90DITXd8bYNxBnYBRgJqZfex5PELP-REcfamy26e2g3AzNtmNaMLD7H-18WPCdZhdTlLN7LF12ZwE4GFDPC-UF-9clKPpxxi12xBaFHQ32v4nG1-s9HZrW_jAqt0FnsmOpqXyeqsP9ABeyzsZTcdekdG5xjBDurCojFA7L3jichUsOQHyzA1n2ptlj0HrzDZvwHNv3jr-F6rpL-3TryijaWxBrJ-oAZX2HFxkguzq4jiAPvMtpUbKaKnqoOXSwlcuTu7QWtlkMQuXueKVEgfbdKA3Ncyij-DVzbFd_YRSoOe_5tf21wVeW-vxfRlclt_tKihaDZzkK0lejrLcEiaUbbpplDt9Q9V1DDp_XwIbEO9C1JSQHYkzRvBJIqVw8mTnI01sX4ADKzUXCE-TuXIlHTD_O-9pf7Uv1JWC3Ee6-mSlvnhpnApqaAP8UgUIsRr-T5qPafI`
      }
    })
      .then(response => {
        console.log("Adding.");
        console.log(response);
        commit("UPDATE_CART_ITEMS", response.data);
        commit("UPDATING_LOAD_STATE", false);
        commit("GETTING_THE_NUMBER_OF_CART_ITEMS", state.numberOfCartItems+1);
        
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
    
    axios.delete("https://vuejsapi.georgekprojects.tk/api/cart/" + cartItem.id, {
      headers: {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI3YmU1Mjk2NDk1N2JiZmE4M2QwNWEwODczODZkOWU1YWE5NzhkNDdiNDY2OGY1ODA4YzIxMmQ2YzI3Y2U4MjE5N2VjZmFlMGJiYzlmYmJkIn0.eyJhdWQiOiIzIiwianRpIjoiYjdiZTUyOTY0OTU3YmJmYTgzZDA1YTA4NzM4NmQ5ZTVhYTk3OGQ0N2I0NjY4ZjU4MDhjMjEyZDZjMjdjZTgyMTk3ZWNmYWUwYmJjOWZiYmQiLCJpYXQiOjE1OTQ3MTUxNDcsIm5iZiI6MTU5NDcxNTE0NywiZXhwIjoxNjI2MjUxMTQ3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.E3KatFFiF0mMGqXRM8H8fhIk8Hi8QspCvETozZ5xgISSZXsxz-9dqhl1Un23mzOY_f9UUinDyBme43qAA-DaEdvb4bo_uExUAp3OgQFXK2HVusXNP8UMZ68SIZuHMANtLaYEO2uGTIbMxZAGGAJXg6ws13o6xdIUuEVWnTmAkxA-jvkpFTbFyNB5Yk1W4lomHmzomPp7cs_y564JiUftBKhTRFyEY4UiCfR90DITXd8bYNxBnYBRgJqZfex5PELP-REcfamy26e2g3AzNtmNaMLD7H-18WPCdZhdTlLN7LF12ZwE4GFDPC-UF-9clKPpxxi12xBaFHQ32v4nG1-s9HZrW_jAqt0FnsmOpqXyeqsP9ABeyzsZTcdekdG5xjBDurCojFA7L3jichUsOQHyzA1n2ptlj0HrzDZvwHNv3jr-F6rpL-3TryijaWxBrJ-oAZX2HFxkguzq4jiAPvMtpUbKaKnqoOXSwlcuTu7QWtlkMQuXueKVEgfbdKA3Ncyij-DVzbFd_YRSoOe_5tf21wVeW-vxfRlclt_tKihaDZzkK0lejrLcEiaUbbpplDt9Q9V1DDp_XwIbEO9C1JSQHYkzRvBJIqVw8mTnI01sX4ADKzUXCE-TuXIlHTD_O-9pf7Uv1JWC3Ee6-mSlvnhpnApqaAP8UgUIsRr-T5qPafI`
      }
    }).then(
      response => {
        console.log("Deleting the cart Item.");
        if (response.status == 201) {
          commit("UPDATE_CART_ITEMS", response.data);
          commit("GETTING_THE_NUMBER_OF_CART_ITEMS", (state.numberOfCartItems)-1);
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
    axios.put('https://vuejsapi.georgekprojects.tk/api/cart/'+cartItem.id,obj, {
      headers: {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI3YmU1Mjk2NDk1N2JiZmE4M2QwNWEwODczODZkOWU1YWE5NzhkNDdiNDY2OGY1ODA4YzIxMmQ2YzI3Y2U4MjE5N2VjZmFlMGJiYzlmYmJkIn0.eyJhdWQiOiIzIiwianRpIjoiYjdiZTUyOTY0OTU3YmJmYTgzZDA1YTA4NzM4NmQ5ZTVhYTk3OGQ0N2I0NjY4ZjU4MDhjMjEyZDZjMjdjZTgyMTk3ZWNmYWUwYmJjOWZiYmQiLCJpYXQiOjE1OTQ3MTUxNDcsIm5iZiI6MTU5NDcxNTE0NywiZXhwIjoxNjI2MjUxMTQ3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.E3KatFFiF0mMGqXRM8H8fhIk8Hi8QspCvETozZ5xgISSZXsxz-9dqhl1Un23mzOY_f9UUinDyBme43qAA-DaEdvb4bo_uExUAp3OgQFXK2HVusXNP8UMZ68SIZuHMANtLaYEO2uGTIbMxZAGGAJXg6ws13o6xdIUuEVWnTmAkxA-jvkpFTbFyNB5Yk1W4lomHmzomPp7cs_y564JiUftBKhTRFyEY4UiCfR90DITXd8bYNxBnYBRgJqZfex5PELP-REcfamy26e2g3AzNtmNaMLD7H-18WPCdZhdTlLN7LF12ZwE4GFDPC-UF-9clKPpxxi12xBaFHQ32v4nG1-s9HZrW_jAqt0FnsmOpqXyeqsP9ABeyzsZTcdekdG5xjBDurCojFA7L3jichUsOQHyzA1n2ptlj0HrzDZvwHNv3jr-F6rpL-3TryijaWxBrJ-oAZX2HFxkguzq4jiAPvMtpUbKaKnqoOXSwlcuTu7QWtlkMQuXueKVEgfbdKA3Ncyij-DVzbFd_YRSoOe_5tf21wVeW-vxfRlclt_tKihaDZzkK0lejrLcEiaUbbpplDt9Q9V1DDp_XwIbEO9C1JSQHYkzRvBJIqVw8mTnI01sX4ADKzUXCE-TuXIlHTD_O-9pf7Uv1JWC3Ee6-mSlvnhpnApqaAP8UgUIsRr-T5qPafI`
      }
    }).then(
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
    axios.put('https://vuejsapi.georgekprojects.tk/api/cart/'+cartItem.id,obj, {
      headers: {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI3YmU1Mjk2NDk1N2JiZmE4M2QwNWEwODczODZkOWU1YWE5NzhkNDdiNDY2OGY1ODA4YzIxMmQ2YzI3Y2U4MjE5N2VjZmFlMGJiYzlmYmJkIn0.eyJhdWQiOiIzIiwianRpIjoiYjdiZTUyOTY0OTU3YmJmYTgzZDA1YTA4NzM4NmQ5ZTVhYTk3OGQ0N2I0NjY4ZjU4MDhjMjEyZDZjMjdjZTgyMTk3ZWNmYWUwYmJjOWZiYmQiLCJpYXQiOjE1OTQ3MTUxNDcsIm5iZiI6MTU5NDcxNTE0NywiZXhwIjoxNjI2MjUxMTQ3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.E3KatFFiF0mMGqXRM8H8fhIk8Hi8QspCvETozZ5xgISSZXsxz-9dqhl1Un23mzOY_f9UUinDyBme43qAA-DaEdvb4bo_uExUAp3OgQFXK2HVusXNP8UMZ68SIZuHMANtLaYEO2uGTIbMxZAGGAJXg6ws13o6xdIUuEVWnTmAkxA-jvkpFTbFyNB5Yk1W4lomHmzomPp7cs_y564JiUftBKhTRFyEY4UiCfR90DITXd8bYNxBnYBRgJqZfex5PELP-REcfamy26e2g3AzNtmNaMLD7H-18WPCdZhdTlLN7LF12ZwE4GFDPC-UF-9clKPpxxi12xBaFHQ32v4nG1-s9HZrW_jAqt0FnsmOpqXyeqsP9ABeyzsZTcdekdG5xjBDurCojFA7L3jichUsOQHyzA1n2ptlj0HrzDZvwHNv3jr-F6rpL-3TryijaWxBrJ-oAZX2HFxkguzq4jiAPvMtpUbKaKnqoOXSwlcuTu7QWtlkMQuXueKVEgfbdKA3Ncyij-DVzbFd_YRSoOe_5tf21wVeW-vxfRlclt_tKihaDZzkK0lejrLcEiaUbbpplDt9Q9V1DDp_XwIbEO9C1JSQHYkzRvBJIqVw8mTnI01sX4ADKzUXCE-TuXIlHTD_O-9pf7Uv1JWC3Ee6-mSlvnhpnApqaAP8UgUIsRr-T5qPafI`
      }
    }).then(
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
  numberOfCartItems: state => state.numberOfCartItems,
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

