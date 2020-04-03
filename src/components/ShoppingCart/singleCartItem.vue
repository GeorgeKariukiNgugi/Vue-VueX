<template>
  <div>
    <hr />
    <p>
      <strong>Product Price</strong>&nbsp;
      <span class="text-right" style="float:right;">
        <i class="fa fa-arrow-circle-down cursor"></i>&nbsp;&nbsp;
        <i class="fa fa-arrow-circle-up cursor" style="color:blue;"></i>&nbsp;&nbsp;
        <i class="fa fa-trash-o cursor" style="color:red;"></i>
      </span>
      <span></span>
    </p>
    <p>
      <strong>TotalCost</strong>
      <span style="float:right;">
        Quantity
        <strong>#no</strong>
      </span>
    </p>
    <hr />
  </div>
</template>

<script>
export default {
  name: "SingleCartItemComponent"
};
</script>

<style scoped>
.cursor{
  cursor: pointer;
}
</style>