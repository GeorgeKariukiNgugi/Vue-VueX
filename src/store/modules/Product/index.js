import axios from "axios";
const state = {
  productItems: [],
  loading:false,
  singleProduct:[]
};
const mutations = {
  UPDATE_PRODUCT_ITEMS(state, payload) {
    state.productItems = payload;
  },
  GETTING_A_SINGLE_PRODUCT(state,payload){
    state.singleProduct = payload
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
    state.loading = true;
    axios
    .get(link)
    .then(response => {
      commit("UPDATE_PRODUCT_ITEMS", response.data);
      console.log(response.data);
      state.loading = false;
    })
    .catch(error => {
      console.log("The call was unsuccessful", error);
    });
  },
  gettingASingleProduct({ commit },link) {    
    
    axios
    .get(link)
    .then(response => {
      commit("GETTING_A_SINGLE_PRODUCT", response.data);
      console.log(response.data);   
      return response.data
         
    })
    .catch(error => {
      console.log("The call was unsuccessful", error);
    });
  },
};
const getters = {
  productItems: state => state.productItems,
  singleProduct: state=> state.singleProduct,
  numberInPagination: state => state.productItems.meta.last_page,
  productItemFromId: (state) => (id) => {
    console.log(state.productItems.find( productItem => productItem.id === id))
  }
};

const ProductModule = {
  state,
  mutations,
  actions,
  getters
};

export default ProductModule;
