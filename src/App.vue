<template>
  <v-app>
    <v-app-bar      
      app
      class="black--text"
      color="#BBE6D6"
      dark
      style="margin:0%"
    >
      <v-app-bar-nav-icon
        color="black"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-row v-show="searchInput">
        <v-col cols="12" sm="12">
          <v-text-field
            v-model="message1"
            label="Regular"
            clearable
            color="black"
            class="black--text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-toolbar-title v-show="show" class="hidden-md-and-up" black
        >VueJs Ecommerce</v-toolbar-title
      >
      <v-toolbar-title v-show="show" class="hidden-sm-and-down" black
        >VueJs Ecommerce Applications.</v-toolbar-title
      >

      <v-spacer></v-spacer>
      <v-btn icon depressed color="#BBE6D6">
        <v-icon @click="searchItem()" color="black">search</v-icon>
      </v-btn>
      <v-btn v-show="show" depressed color="#BBE6D6">
        <v-icon color="black">email</v-icon>
      </v-btn>
      <router-link to="/products">
        <v-badge v-show="show" color="green" content="6" overlap>
          <v-btn icon color="#BBE6D6">
            <v-icon color="black">mdi-cart</v-icon>
          </v-btn>
        </v-badge>
      </router-link>
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
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/products">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
          </router-link>
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
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    searchItem() {
      this.show = !this.show;
      this.searchInput = !this.searchInput;
    },
  },
  // components: { ProductList, Cart },
  data: () => ({
    drawer: true,
    show: true,
    searchInput: false,
  }),
};
</script>
