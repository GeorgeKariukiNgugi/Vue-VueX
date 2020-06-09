<template>
  <div class="col-md-4">
    <div class="product-inner">
      <div class="product-wrap" data-lightbox="photos">
        <img src="../../../public/design/assets/img/photo-1525257831700-183b9b8bf5c4.jpg" />
        <!-- C:\wamp64\www\vue-vuex\public\design\assets\img\cake-in-chocolate-decorated-with-berries-picture-id866213450.jpg -->
        <div class="actions">
          <a href="#"  class="add-to-cart" ></a>
          <a href="#" class="quickview" ></a>
          <a href="#" class="wishlist" ></a>
        </div>
      </div>
      <div class="product-info">
        <h3 class="product-title">
          <a href>{{product.name}}</a>
        </h3>
        <span class="price">Ksh {{product.totalPrice}} /=</span>
        <br />
        <small>{{product.star}}</small>
      </div>
    </div>
  </div>
  
  <!-- THIS COMMENTED CODE IS THE ALTERNETIVE SETTING AND STYLEING OF THE ITEM LISTS.  -->

  <!-- <div class="col-md-4">
      <div class="border">
        <div class="wrap">
          <div class="product-wrap">
            <a href>
              <img src="https://html5book.ru/wp-content/uploads/2015/10/black-dress.jpg" />
            </a>
          </div>
          <div class="loop-action">
            <a class="add-to-cart" href>Быстрый просмотр</a>
            <a class="loop-add-to-cart" href>В корзину</a>
          </div>
        </div>
        <div class="product-info">
          <div class="stars"></div>
          <h3 class="product-title">Маленькое черное платье</h3>
          <div class="price">&#8381; 1999</div>
        </div>
      </div>
  </div>-->
</template>

<script>
// import  from ''
export default {
  name: "ProductItem",
  props: ["product"]
  //   component:{

  //   }
};
</script>

<style scoped>
.add-to-cart:hover {
  background-color: green;
}
.wishlist:hover {
  background-color: red;
}

.quickview:hover {
  background-color: blueviolet;
}
</style>