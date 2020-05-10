<template>
  <div class="container">
    <div class="row">
      <!-- THIS IS THE SECTION THAT THE PRODUCT LIST ITEM WILL BE LOCATED. -->
      <div v-for="(product,index) in productItems.data" :key="index">
        <ProductItem :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "ProductList",
  computed: {
    ...mapGetters(["productItems"])
  },
  created() {
    this.$store.dispatch("getProductItems");
  },
  components: {
    ProductItem
  }
};
</script>

<style>
</style>