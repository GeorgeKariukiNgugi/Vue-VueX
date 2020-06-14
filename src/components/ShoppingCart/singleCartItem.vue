<template>
  <div>
    <p>
      <span class="font-weight-black text-capitalize">
        {{ cartItem.name }}
      </span>
      <span class=""> Ksh {{ cartItem.price }} /= each</span>
      <span class="text-right" style="float:right;">
        {{ cartItem.quantity }}
        <v-icon color="blue"   @click="addUpdatingCartItems(cartItem)" class="cursor">arrow_upward</v-icon>
        <v-icon color="green"  @click="downUpdatingCartItems(cartItem)" class="cursor">arrow_downward</v-icon>
        <v-icon color="red" @click="deletingTheCartItems(cartItem)" class="cursor">delete</v-icon>
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
export default {
  name: "SingleCartItemComponent",
  props: ["cartItem"],
  data() {
    return{
          editingQuantity: 1
    }    
  },
  methods: {
    ...mapActions([
      'deletingTheCartItems',
      'addUpdatingCartItems',
      'downUpdatingCartItems'
    ]),
    updatingCartItemsMethod(cartItemObject){

      var obj = {};
      obj['id'] = cartItemObject.id;
      obj['number'] = this.editingQuantity

    }
  }
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
</style>
