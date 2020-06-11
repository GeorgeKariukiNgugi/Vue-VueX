<template>
  <v-app>
    <v-app-bar flat app color="#BBE6D6" dark>
      <v-app-bar-nav-icon
        color="black"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title black>Vue Js Ecommerce Applictaion</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn depressed color="#BBE6D6">
        <v-icon color="black">email</v-icon>
      </v-btn>
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
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-content color="#C8EBDF" class="my-5">
      <ProductList/>
    </v-content>
  </v-app>
</template>

<script>
import ProductList from './components/products/ProductList'
export default {
  name: "App",

  components: {ProductList},

  data: () => ({
    drawer: true,
  }),
};
</script>
