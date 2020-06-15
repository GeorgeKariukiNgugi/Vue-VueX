<template>
  <div>
    <v-row center class="mb-12">
      <v-col md="12">
        <v-btn block color="success">Check Out {{allProductsCost}}</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CheckOutButtonComponent",
  props:['allProductsCost']
};
</script>

<style></style>
