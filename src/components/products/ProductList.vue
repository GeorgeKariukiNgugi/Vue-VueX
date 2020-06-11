<template>
  <v-app>
    <!-- <v-layout row wrap>
      
     <div v-for="(product, index) in productItems.data" :key="index">
<v-flex xs6 sm6 md4 lg4>
        <ProductItem :product="product" />
</v-flex>
      </div>
     </v-layout> -->
    <v-container>
      <!-- <ProductItem :product="product" /> -->
      <v-row class="mb-12">
        <v-col
          v-for="(product, index) in productItems.data"
          :key="index"
          sm="5"
          md="4"
        >
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title class="text-uppercase">{{
                product.name
              }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">{{ product.name }}</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                <p class="font-weight-black">Ksh {{ product.totalPrice }} /=</p>
              </div>
              <div>
                <v-rating half-increments v-model="product.star"></v-rating>
              </div>
              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn class="mx-2" fab dark small color="primary">
                <v-icon dark>mdi-heart</v-icon>
              </v-btn>

              <v-btn class="mx-2" fab dark small color="secondary">
                <v-icon dark>mdi-cart</v-icon>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="accent">
                <v-icon dark>mdi-message</v-icon>
                <v-badge color="green" content="6"> </v-badge>
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn  icon @click="product.name = !product.name">
                <v-icon>{{
                  product.name ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="product.name">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than
                  he could deliver. You won't have time for sleeping, soldier,
                  not with all the bed making you'll be doing. Then we'll go
                  with that data file! Hey, you add a one and two zeros to that
                  or we walk! You're going to do his laundry? I've got to find a
                  way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// import ProductItem from "./ProductItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "ProductList",
  computed: {
    ...mapGetters(["productItems"]),
  },
  created() {
    this.$store.dispatch("getProductItems");
  },
  components: {
    // ProductItem,
  },
  data: () => ({
    this: false,
    rating: this,
  }),
};
</script>

<style></style>
