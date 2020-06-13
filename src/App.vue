<template>
  <v-app>
    <v-app-bar flat app color="#BBE6D6" dark>
      <v-app-bar-nav-icon
        color="black"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="hidden-md-and-up" black
        >VueJs Ecommerce</v-toolbar-title
      >
      <v-toolbar-title class="hidden-sm-and-down" black
        >VueJs Ecommerce Applications.</v-toolbar-title
      >
      <v-spacer></v-spacer>

      <v-btn  depressed color="#BBE6D6">
        <v-icon color="black">email</v-icon>
      </v-btn>

             <v-badge        
        color="green"
        content="6"
        overlap
      >
      <v-btn icon color="black">
              <v-icon>mdi-cart</v-icon>
            </v-btn>
             </v-badge>
             
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app color="#BBE6D6">
      <v-list-item-content>
        <v-list-item-title class="title">
          Application
        </v-list-item-title>
        <v-list-item-subtitle>
          subtext
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-divider></v-divider>
      <v-list nav dense app>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

          <v-list-item class="hidden-md-and-up">
            <v-list-item-icon>
              <v-icon>mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cart</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-content class="my-5">
      <!-- VISIBILITY ON LARGE SCREENS -->
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
    </v-content>
  </v-app>
</template>

<script>
import ProductList from "./components/products/ProductList";
import Cart from "./components/ShoppingCart/ShoppingCartComponentCoalation";
export default {
  name: "App",

  components: { ProductList, Cart },

  data: () => ({
    drawer: true,
  }),
};
</script>
