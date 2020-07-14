import axios from "axios";
const state = {
  productItems: [],
  loading2:false,
  singleProduct:[],
  accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJjNTEyMTY4ZmY4OGRmMzRkODBiYTAwYWIzMDIwZjcwNzM5NDkxNGI1NThjZDIwNDNjZWI4ZDVjNWZkZGVjY2U5ZDUyNjM3ODk3ZDIzOTkxIn0.eyJhdWQiOiIzIiwianRpIjoiYmM1MTIxNjhmZjg4ZGYzNGQ4MGJhMDBhYjMwMjBmNzA3Mzk0OTE0YjU1OGNkMjA0M2NlYjhkNWM1ZmRkZWNjZTlkNTI2Mzc4OTdkMjM5OTEiLCJpYXQiOjE1OTQ3MTMxMjgsIm5iZiI6MTU5NDcxMzEyOCwiZXhwIjoxNjI2MjQ5MTI4LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.FJlNbCO8oZXpLwzkjIJP4gwWDGydTaYLG7MIXfwxavOta7xDQ7lKtSvV5VewcAQglikxpeNaJP0uLR9fdttPO-45ud02m09qMD9EIVOHKdN0J-E9pPf4fV022GAFxNfPNh4sRGZ1G-TQPX3t7Y4hpBDzyUNe88Npe_A5zLcDaoQQnOYfwTR-_Y-tHDkviNl4lCR2mGyhk3MF1YLmsIw2a-b-iJN4SLNplMc4D90kxMWq1iB8slqBpNSWyCnuIOnQGV0mb-CSzWnW0iQyKajFXrkKu7_B0upkjeybuH1eO-VHgEOqOwXQR7spWdh0Q2bT8QmLeAoZdgwMsp76bgyZdI9SVKmPwXU8J18lrTcLsCJa5UeAvzAdS5zQLNyZHkGDLS-eBnKEJwTyxGs57j8kzVj5ORHAukgn96uOlnrq74QYq-v7yF3iqu1ZAcnUUH7snfS1X4eYsKhAEcdb0QDgc4uapDQpZQ0qIqykkrVJhHOqzL-eSkWQr86TmGCW56kLwfvrmbjVbiJjFHeQhLJAcJyqNrv8AvO6IoBa0eeFkLWxavYoDk2yskzbOOYAfpF0mz00DjIWOUpSPHTf5E2fcZzGMtdOmHQsBvTnoinpxbFx8xH2MyOjjTT0sHsamF8supUGLdTV3ve5yGdrGLr3YfsIEzMp1vfq1naiT7gl4fI',  
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
      .get("https://vuejsapi.georgekprojects.tk/api/products", {
        headers: {
          'Authorization': `Bearer ${this.state.accessToken}`
        }
      })
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
