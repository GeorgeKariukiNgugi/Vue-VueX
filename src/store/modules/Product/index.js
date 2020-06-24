import axios from "axios";
const state = {
  productItems: [],
  loading2:false,
  singleProduct:[]
};
const mutations = {
  UPDATE_PRODUCT_ITEMS(state, payload) {
    state.productItems = payload;
  },
  GETTING_A_SINGLE_PRODUCT(state,payload){
    state.singleProduct = payload
  },
  UPDATE_LOADING(state,payload){

    state.loading2 = payload

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
    state.loading2 = true;
    axios
    .get(link)
    .then(response => {
      commit("UPDATE_PRODUCT_ITEMS", response.data);
      console.log(response.data);
      state.loading2 = false;
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
  loading2: state=> state.loading2,
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
