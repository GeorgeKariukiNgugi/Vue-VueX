<template>
  <div>
    <v-container>
      <v-row class="mb-12">
        <v-col
          v-for="(product, index) in productItems.data"
          :key="index"
          sm="5"
          md="4"
        >
          <ProductItem :product="product" />
        </v-col>
      </v-row>
      <v-row class="mb-12">        
        <v-pagination
          v-model="page"
          :circle="circle"
          :disabled="disabled"
          :length="length"
          :next-icon="nextIcon"
          :prev-icon="prevIcon"
          :page="page"
          :total-visible="totalVisible"
          @input="methodonClickPagination"
        ></v-pagination>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import { mapGetters } from "vuex";
export default {
  methods:{
      methodonClickPagination(page){
          console.log(page);
      }
  },
  name: "ProductList",
  computed: {
    ...mapGetters(["productItems"]),
  },
  created() {
    this.$store.dispatch("getProductItems");       
  },
  components: {
    ProductItem,
  },
  data: () => ({
    
    show: false,
    rating: this,
    circle: true,
    disabled: false,
    length: null,
    nextIcon: "navigate_next",
    nextIcons: ["mdi-chevron-right", "mdi-arrow-right", "mdi-menu-right"],
    prevIcon: "navigate_before",
    prevIcons: ["mdi-chevron-left", "mdi-arrow-left", "mdi-menu-left"],
    page: 1,
    totalVisible: null,
  
  }),
  mounted(){
    this.totalVisible = this.productItems.meta.last_page
    this.length = this.productItems.meta.last_page
}
};
</script>

<style></style>
