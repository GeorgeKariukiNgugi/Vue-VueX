<template>
  <div color="grey">
    <v-row  no-gutters class="my-8">
      <v-col md="6" offset-md="3">
        <v-card style="background-color:#ABE6D6" class="v-card--material pa-3">
          <v-row>
            <v-col align="center">
              <div class="d-flex grow flex-wrap">
                <v-avatar
                  size="128"
                  class="mx-auto v-card--material-avatar elevation-6"
                  color="grey"
                >
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
              </div>
              <h2>This is the Name Of The Product.</h2>
              <h3 class="font-weight-regular">Price: 300/=</h3>
              <h3 class="font-weight-regular">Discount: 1%</h3>
              <h2 blue>New Price: 250 /=</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h3 align="center">Description</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident voluptas veniam voluptatibus ipsum, asperiores beatae
                animi, laboriosam voluptatum similique eos enim excepturi
                quaerat vel assumenda unde odio amet inventore officiis!
              </p>
              <h3 align="center">Rating</h3>
              <v-rating align="center" v-model="rating"></v-rating>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h3 align="center">Reviews</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6" offset-md="3">
              <v-btn
                block
                color="green"
                class="ma-2 white--text"
                large
                dark="true"
              >
                Add To Cart
                <v-icon right dark>mdi-cart</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    rating: 3,
  }),
};
</script>

<style>
.v-card--material-avatar {
  position: relative;
  top: -64px;
  margin-bottom: -32px;
}
.v-card--material-heading {
  position: relative;
  top: -40px;
  transition: 0.3s ease;
  z-index: 1;
}
</style>
