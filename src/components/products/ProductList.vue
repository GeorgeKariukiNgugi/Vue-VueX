<template>
  <div>
    <v-container>
      <v-row class="mb-12">
        <v-col
          v-for="(product, index) in productItems.data"
          :key="index"
          sm="5"
          md="4"
        >
          <ProductItem :product="product" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
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
    ProductItem,
  },
  data: () => ({
    show: false,
    rating: this,
  }),
};
</script>

<style></style>
