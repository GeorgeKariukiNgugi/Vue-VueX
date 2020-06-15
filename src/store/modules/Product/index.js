import axios from "axios";
const state = {
  productItems: []
};
const mutations = {
  UPDATE_PRODUCT_ITEMS(state, payload) {
    state.productItems = payload;
  }
};
const actions = {
  getProductItems({ commit }) {
    axios
      .get("https://vuejsapi.georgekprojects.tk/api/products")
      .then(response => {
        commit("UPDATE_PRODUCT_ITEMS", response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("The call was unsuccessful", error);
      });
  },
  getProductsFromPaginationLinks({ commit },link){
    axios
    .get(link)
    .then(response => {
      commit("UPDATE_PRODUCT_ITEMS", response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log("The call was unsuccessful", error);
    });
  }
};
const getters = {
  productItems: state => state.productItems,
  numberInPagination: state => state.productItems.meta.last_page
};

const ProductModule = {
  state,
  mutations,
  actions,
  getters
};

export default ProductModule;
