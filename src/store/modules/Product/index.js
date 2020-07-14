import axios from "axios";
const state = {
  productItems: [],
  loading2:false,
  singleProduct:[],
  accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI3YmU1Mjk2NDk1N2JiZmE4M2QwNWEwODczODZkOWU1YWE5NzhkNDdiNDY2OGY1ODA4YzIxMmQ2YzI3Y2U4MjE5N2VjZmFlMGJiYzlmYmJkIn0.eyJhdWQiOiIzIiwianRpIjoiYjdiZTUyOTY0OTU3YmJmYTgzZDA1YTA4NzM4NmQ5ZTVhYTk3OGQ0N2I0NjY4ZjU4MDhjMjEyZDZjMjdjZTgyMTk3ZWNmYWUwYmJjOWZiYmQiLCJpYXQiOjE1OTQ3MTUxNDcsIm5iZiI6MTU5NDcxNTE0NywiZXhwIjoxNjI2MjUxMTQ3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.E3KatFFiF0mMGqXRM8H8fhIk8Hi8QspCvETozZ5xgISSZXsxz-9dqhl1Un23mzOY_f9UUinDyBme43qAA-DaEdvb4bo_uExUAp3OgQFXK2HVusXNP8UMZ68SIZuHMANtLaYEO2uGTIbMxZAGGAJXg6ws13o6xdIUuEVWnTmAkxA-jvkpFTbFyNB5Yk1W4lomHmzomPp7cs_y564JiUftBKhTRFyEY4UiCfR90DITXd8bYNxBnYBRgJqZfex5PELP-REcfamy26e2g3AzNtmNaMLD7H-18WPCdZhdTlLN7LF12ZwE4GFDPC-UF-9clKPpxxi12xBaFHQ32v4nG1-s9HZrW_jAqt0FnsmOpqXyeqsP9ABeyzsZTcdekdG5xjBDurCojFA7L3jichUsOQHyzA1n2ptlj0HrzDZvwHNv3jr-F6rpL-3TryijaWxBrJ-oAZX2HFxkguzq4jiAPvMtpUbKaKnqoOXSwlcuTu7QWtlkMQuXueKVEgfbdKA3Ncyij-DVzbFd_YRSoOe_5tf21wVeW-vxfRlclt_tKihaDZzkK0lejrLcEiaUbbpplDt9Q9V1DDp_XwIbEO9C1JSQHYkzRvBJIqVw8mTnI01sX4ADKzUXCE-TuXIlHTD_O-9pf7Uv1JWC3Ee6-mSlvnhpnApqaAP8UgUIsRr-T5qPafI"
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
          'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI3YmU1Mjk2NDk1N2JiZmE4M2QwNWEwODczODZkOWU1YWE5NzhkNDdiNDY2OGY1ODA4YzIxMmQ2YzI3Y2U4MjE5N2VjZmFlMGJiYzlmYmJkIn0.eyJhdWQiOiIzIiwianRpIjoiYjdiZTUyOTY0OTU3YmJmYTgzZDA1YTA4NzM4NmQ5ZTVhYTk3OGQ0N2I0NjY4ZjU4MDhjMjEyZDZjMjdjZTgyMTk3ZWNmYWUwYmJjOWZiYmQiLCJpYXQiOjE1OTQ3MTUxNDcsIm5iZiI6MTU5NDcxNTE0NywiZXhwIjoxNjI2MjUxMTQ3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.E3KatFFiF0mMGqXRM8H8fhIk8Hi8QspCvETozZ5xgISSZXsxz-9dqhl1Un23mzOY_f9UUinDyBme43qAA-DaEdvb4bo_uExUAp3OgQFXK2HVusXNP8UMZ68SIZuHMANtLaYEO2uGTIbMxZAGGAJXg6ws13o6xdIUuEVWnTmAkxA-jvkpFTbFyNB5Yk1W4lomHmzomPp7cs_y564JiUftBKhTRFyEY4UiCfR90DITXd8bYNxBnYBRgJqZfex5PELP-REcfamy26e2g3AzNtmNaMLD7H-18WPCdZhdTlLN7LF12ZwE4GFDPC-UF-9clKPpxxi12xBaFHQ32v4nG1-s9HZrW_jAqt0FnsmOpqXyeqsP9ABeyzsZTcdekdG5xjBDurCojFA7L3jichUsOQHyzA1n2ptlj0HrzDZvwHNv3jr-F6rpL-3TryijaWxBrJ-oAZX2HFxkguzq4jiAPvMtpUbKaKnqoOXSwlcuTu7QWtlkMQuXueKVEgfbdKA3Ncyij-DVzbFd_YRSoOe_5tf21wVeW-vxfRlclt_tKihaDZzkK0lejrLcEiaUbbpplDt9Q9V1DDp_XwIbEO9C1JSQHYkzRvBJIqVw8mTnI01sX4ADKzUXCE-TuXIlHTD_O-9pf7Uv1JWC3Ee6-mSlvnhpnApqaAP8UgUIsRr-T5qPafI`
        }
      })
      .then(response => {
        console.log("The call to the Products id fine.");
        commit("UPDATE_PRODUCT_ITEMS", response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("The call to the Products was unsuccessful", error);
      });
  },

  getProductsFromPaginationLinks({ commit },link){
    state.loading2 = true;
    axios
    .get(link, {
      headers: {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI3YmU1Mjk2NDk1N2JiZmE4M2QwNWEwODczODZkOWU1YWE5NzhkNDdiNDY2OGY1ODA4YzIxMmQ2YzI3Y2U4MjE5N2VjZmFlMGJiYzlmYmJkIn0.eyJhdWQiOiIzIiwianRpIjoiYjdiZTUyOTY0OTU3YmJmYTgzZDA1YTA4NzM4NmQ5ZTVhYTk3OGQ0N2I0NjY4ZjU4MDhjMjEyZDZjMjdjZTgyMTk3ZWNmYWUwYmJjOWZiYmQiLCJpYXQiOjE1OTQ3MTUxNDcsIm5iZiI6MTU5NDcxNTE0NywiZXhwIjoxNjI2MjUxMTQ3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.E3KatFFiF0mMGqXRM8H8fhIk8Hi8QspCvETozZ5xgISSZXsxz-9dqhl1Un23mzOY_f9UUinDyBme43qAA-DaEdvb4bo_uExUAp3OgQFXK2HVusXNP8UMZ68SIZuHMANtLaYEO2uGTIbMxZAGGAJXg6ws13o6xdIUuEVWnTmAkxA-jvkpFTbFyNB5Yk1W4lomHmzomPp7cs_y564JiUftBKhTRFyEY4UiCfR90DITXd8bYNxBnYBRgJqZfex5PELP-REcfamy26e2g3AzNtmNaMLD7H-18WPCdZhdTlLN7LF12ZwE4GFDPC-UF-9clKPpxxi12xBaFHQ32v4nG1-s9HZrW_jAqt0FnsmOpqXyeqsP9ABeyzsZTcdekdG5xjBDurCojFA7L3jichUsOQHyzA1n2ptlj0HrzDZvwHNv3jr-F6rpL-3TryijaWxBrJ-oAZX2HFxkguzq4jiAPvMtpUbKaKnqoOXSwlcuTu7QWtlkMQuXueKVEgfbdKA3Ncyij-DVzbFd_YRSoOe_5tf21wVeW-vxfRlclt_tKihaDZzkK0lejrLcEiaUbbpplDt9Q9V1DDp_XwIbEO9C1JSQHYkzRvBJIqVw8mTnI01sX4ADKzUXCE-TuXIlHTD_O-9pf7Uv1JWC3Ee6-mSlvnhpnApqaAP8UgUIsRr-T5qPafI`
      }
    })
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
    .get(link, {
      headers: {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI3YmU1Mjk2NDk1N2JiZmE4M2QwNWEwODczODZkOWU1YWE5NzhkNDdiNDY2OGY1ODA4YzIxMmQ2YzI3Y2U4MjE5N2VjZmFlMGJiYzlmYmJkIn0.eyJhdWQiOiIzIiwianRpIjoiYjdiZTUyOTY0OTU3YmJmYTgzZDA1YTA4NzM4NmQ5ZTVhYTk3OGQ0N2I0NjY4ZjU4MDhjMjEyZDZjMjdjZTgyMTk3ZWNmYWUwYmJjOWZiYmQiLCJpYXQiOjE1OTQ3MTUxNDcsIm5iZiI6MTU5NDcxNTE0NywiZXhwIjoxNjI2MjUxMTQ3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.E3KatFFiF0mMGqXRM8H8fhIk8Hi8QspCvETozZ5xgISSZXsxz-9dqhl1Un23mzOY_f9UUinDyBme43qAA-DaEdvb4bo_uExUAp3OgQFXK2HVusXNP8UMZ68SIZuHMANtLaYEO2uGTIbMxZAGGAJXg6ws13o6xdIUuEVWnTmAkxA-jvkpFTbFyNB5Yk1W4lomHmzomPp7cs_y564JiUftBKhTRFyEY4UiCfR90DITXd8bYNxBnYBRgJqZfex5PELP-REcfamy26e2g3AzNtmNaMLD7H-18WPCdZhdTlLN7LF12ZwE4GFDPC-UF-9clKPpxxi12xBaFHQ32v4nG1-s9HZrW_jAqt0FnsmOpqXyeqsP9ABeyzsZTcdekdG5xjBDurCojFA7L3jichUsOQHyzA1n2ptlj0HrzDZvwHNv3jr-F6rpL-3TryijaWxBrJ-oAZX2HFxkguzq4jiAPvMtpUbKaKnqoOXSwlcuTu7QWtlkMQuXueKVEgfbdKA3Ncyij-DVzbFd_YRSoOe_5tf21wVeW-vxfRlclt_tKihaDZzkK0lejrLcEiaUbbpplDt9Q9V1DDp_XwIbEO9C1JSQHYkzRvBJIqVw8mTnI01sX4ADKzUXCE-TuXIlHTD_O-9pf7Uv1JWC3Ee6-mSlvnhpnApqaAP8UgUIsRr-T5qPafI`
      }
    })
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
