<template>
  <div :loading="true">
    <p>
      <span class="font-weight-black text-capitalize">
        {{ cartItem.name }}
      </span>
      <span class=""> Ksh {{ cartItem.price }} /= each</span>
      <span class="text-right" style="float:right;">
        {{ cartItem.quantity }}
        <v-icon
          v-show="!addProgres"
          color="blue"
          @click="addingCartItem(cartItem)"
          class="cursor"
          >arrow_upward</v-icon
        >
        <v-progress-circular
          v-show="addProgres"
          :width="2"
          :size="20"
          color="blue"
          indeterminate
        ></v-progress-circular>
        <v-icon
          color="green"
          v-show="!subtrackProgres"
          @click="removeCartItem(cartItem)"
          class="cursor"
          >arrow_downward</v-icon
        >
        <v-progress-circular
          v-show="subtrackProgres"
          :width="2"
          :size="20"
          color="green"
          indeterminate
        ></v-progress-circular>
        <v-icon
          v-show="!deleteProgres"
          color="red"
          loading
          @click="deleteCartItem(cartItem)"
          class="cursor"
          >delete</v-icon
        >
        <v-progress-circular
          v-show="deleteProgres"
          :width="2"
          :size="20"
          color="red"
          indeterminate
        ></v-progress-circular>
      </span>
    </p>
    <p>
      <strong>TotalCost</strong>
      <span style="float:right;">
        <strong>${{ cartItem.quantity * cartItem.price }}/=</strong>
      </span>
    </p>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {mapGetters} from "vuex";
export default {
  name: "SingleCartItemComponent",
  props: ["cartItem"],
  data() {
    return {
      editingQuantity: 1,
      deleteProgres: false,
      subtrackProgres: false,
      addProgres: false,
    };
  },
  computed:{
      ...mapGetters(["loadingUpItem","loadingDownItem"])
  },
  watch:{
    loadingUpItem: function () {
      console.log(this.loadingUpItem + "This is False LoadingItem.");
      if (this.loadingUpItem == false) {
        console.log("This is False LoadingItem.");
        this.addProgres = false;
      }         
    },
     loadingDownItem: function () {
      
      if (this.loadingDownItem == false) {
        console.log("This is False LoadingItem.");
        this.subtrackProgres = false;
      }
     }
  },
  methods: {
    ...mapActions([
      "deletingTheCartItems",
      "addUpdatingCartItems",
      "downUpdatingCartItems",
    ]),
    updatingCartItemsMethod(cartItemObject) {
      var obj = {};
      obj["id"] = cartItemObject.id;
      obj["number"] = this.editingQuantity;
    },

    // ! this is the method to delete the item from the list.
    deleteCartItem(object) {
      this.deleteProgres = true;
      this.$store.dispatch("deletingTheCartItems", object);
    },
    addingCartItem(object) {
      console.log(this.loadingUpItem + "This is the state on clicking.");
      this.addProgres = true;
      this.$store.dispatch("addUpdatingCartItems", object);
    },
    removeCartItem(object) {
      this.subtrackProgres = true;
      this.$store.dispatch("downUpdatingCartItems", object);
    },
  },
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
</style>
