<template>
 <!-- VISIBILITY ON LARGE SCREENS -->
 <div>
    <div class="hidden-sm-and-down">
        <v-row no-gutters>
          <v-col sm="5" md="8">
            <ProductList />
          </v-col>
          <v-col sm="5" md="4">
            <Cart />
          </v-col>
        </v-row>
      </div>
      <!-- VISIBILITY ON SMALL SCREENS.  -->
      <div class="hidden-md-and-up">
        <v-row no-gutters>
          <v-col sm="12">
            <ProductList />
          </v-col>
        </v-row>
      </div> 
 </div>
     
</template>

<script>
// @ is an alias to /src
import ProductList from "../components/products/ProductList";
import Cart from "../components/ShoppingCart/ShoppingCartComponentCoalation";

export default {
  name: 'Home',
  components: { ProductList, Cart },
}
</script>
