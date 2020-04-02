<template>
  <div class="container">
    <div class="row">
      <!-- THIS IS THE SECTION THAT THE PRODUCT LIST ITEM WILL BE LOCATED. -->
      <ProductItem />
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "ProductList",
  components: {
    ProductItem
  }
};
</script>

<style>
</style>