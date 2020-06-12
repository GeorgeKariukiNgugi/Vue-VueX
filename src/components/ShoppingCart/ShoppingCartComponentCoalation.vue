<template>
  <div>
    <v-card class="mx-auto px-5 " max-width="400">
      <v-img
        class="black--text align-end"
        src="@/assets/shopping-cart-256.webp"
        max-height="100"
        contain
        color="primary"
      >
      </v-img>
      <v-card-title></v-card-title>
      <h4 class="text-center mt-0">
        Cart Items.
      </h4>
      <v-divider></v-divider>
      <div v-for="cartItem in cartItems" :key="cartItem.id">
        <SingleCartItemComponent :cartItem="cartItem" />
      </div>
      <TotalGoodsComponent />
      <CheckOutButtonComponent />
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SingleCartItemComponent from "./singleCartItem.vue";
import TotalGoodsComponent from "./totalGoods.vue";
import CheckOutButtonComponent from "./checkOutButton.vue";
export default {
  name: "ShoppingCartCoallationComponent",
  components: {
    SingleCartItemComponent,
    TotalGoodsComponent,
    CheckOutButtonComponent,
  },
  computed: {
    ...mapGetters(["cartItems"]),
  },
  created() {
    this.$store.dispatch("getAllCartItems");
  },
};
</script>

<style></style>
