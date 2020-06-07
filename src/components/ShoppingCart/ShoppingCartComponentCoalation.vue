<template>
  <!-- <div class="col-sm-8 col-lg-3"> -->
  <div class="card">
    <div class="card-header">
      <!-- <h2 class="text-center mb-0"></h2> -->
      <h2 class="text-center mb-0"><i class="fa fa-shopping-cart"></i></h2>
      <h5 class="text-center mb-0">
        <strong>Shopping Cart.</strong>
      </h5>
    </div>
    <div class="card-body" >
      <!-- THIS IS THE SECTION THAT THE CARD COMPONENTS GO. -->
      <div v-for="cartItem in cartItems" :key="cartItem.id">
        <SingleCartItemComponent :cartItem= "cartItem"/>
      </div>
      
      <TotalGoodsComponent/>
      <CheckOutButtonComponent/>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import {mapGetters} from 'vuex';
import SingleCartItemComponent from "./singleCartItem.vue";
import TotalGoodsComponent from "./totalGoods.vue";
import CheckOutButtonComponent from "./checkOutButton.vue";
export default {
  name: "ShoppingCartCoallationComponent",
  components: {
    SingleCartItemComponent,
    TotalGoodsComponent,
    CheckOutButtonComponent
  },
  computed:{
     ...mapGetters([
       'cartItems'
     ])
  },
  created(){
    this.$store.dispatch('getAllCartItems');
  }
};
</script>

<style>
</style>