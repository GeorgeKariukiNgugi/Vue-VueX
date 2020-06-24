<template>
  <div>
    <v-card class="mx-auto" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <router-link :to="'/products/' + product.id">
          <v-card-title>{{ product.name }}</v-card-title>
        </router-link>
      </v-img>

      <v-card-subtitle class="pb-0">{{ product.name }}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ product.totalPrice }}</div>

        <div>
          <v-rating half-increments v-model="product.star"></v-rating>
        </div>
        <div>Whitsunday Island, Whitsunday Islands {{loading}}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn class="mx-2" fab dark small color="primary">
          <v-icon dark>mdi-heart</v-icon>
        </v-btn>

        <v-btn
          :loading="loading2"
          @click="addingProductToCartMehod($event,product)"
          ref="product.name"
          class="mx-2"
          fab
          dark
          small
          color="secondary"
        >
          <v-icon dark>mdi-cart</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark small color="accent">
          <v-icon dark>mdi-message</v-icon>
          <v-badge color="green" content="6"> </v-badge>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he
            could deliver. You won't have time for sleeping, soldier, not with
            all the bed making you'll be doing. Then we'll go with that data
            file! Hey, you add a one and two zeros to that or we walk! You're
            going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
import {mapGetters} from "vuex";

export default {
  name: "ProductItem",
  props: ["product"],
  data: () => ({    
    show: false,
    loading2: null     
  }),
  computed:{

    ...mapGetters(["loading"]),
  },
  methods: {
    // ...mapActions(["addingProductToCart"]),
    addingProductToCartMehod(event,object){
        this.loading2 = true             
        this.$store.dispatch("addingProductToCart",object);
    }
  },
  watch:{
    loading : function(){
      if (this.loading == false) {
        this.loading2 = false
      } 
      console.log("This is the Value Of Loading2" + this.loading);
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
v-card-title {
  color: white;
}
</style>
