<template>
  <div class="row">
    <div class="col-sm-10 col-md-8 col-lg-8 offset-sm-1 offset-md-2 offset-lg-2">
      <form class="search-form">
        <div class="input-group">
          <div class="input-group-prepend"></div>
          <input class="form-control" placeholder="I am looking for.." type="text" />
          <div class="input-group-append">
            <button class="btn btn-success" type="button">Search</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchComponenent",
};
</script>

<style>
</style>