<template>
  <div id="app">
    <h2 class="text-center">VueX Ecommerce Platform Consuming Laravel API.</h2>
    <hr />
    <hr />
    <SearchComponent />
    <div class="row">
      <div class="col-md-9">
        <!-- THIS IS THE SECTION THAT THE PRODUCT LIST COMPONENT WILL BE PLACED -->
        <ProductListComponent />
      </div>
      <div class="col-sm-8 col-lg-3">
        <!-- THIS IS THE SECTION THAT THE PRODUCT CART COMPONENT WILL BE PLACED -->
        <ShoppingCartCoallationComponent />
      </div>
    </div>
  </div>
</template>

<script>
import SearchComponent from "./components/SearchComponent/SearchComponent.vue";
import ProductListComponent from "./components/products/ProductList.vue";
import ShoppingCartCoallationComponent from "./components/ShoppingCart/ShoppingCartComponentCoalation.vue";
export default {
  name: "App",
  components: {
    SearchComponent,
    ProductListComponent,
    ShoppingCartCoallationComponent
  }
};
</script>

<style>
</style>
