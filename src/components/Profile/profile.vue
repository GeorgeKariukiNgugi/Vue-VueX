<template>
  <div >
    <v-row no-gutters class="my-8">
      <v-col md="6" offset-md="3" sm="6" offset-sm="3">
        <v-card class="v-card--material pa-3">
          <v-row>
            <v-col>
              <div class="d-flex grow flex-wrap">
                <div
                  style="background-color:#4CAF50;width:100%;color:white"
                  class="rounded-lg pa-4  v-card--material-heading elevation-6"
                >
                  <div class="display-1 font-weight-light ">
                    Edit Profile
                  </div>

                  <div class="subtitle-1 font-weight-light">
                    Complete your profile
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-form ref="form" v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="firstname"
                      :rules="nameRules"
                      :counter="10"
                      prepend-icon="account_box"
                      label="First name"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="lastname"
                      :rules="nameRules"
                      :counter="10"
                      prepend-icon="account_box"
                      label="Last name"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      prepend-icon="email"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-col>
                 <v-col cols="12" md="6">
                  <!-- <v-date-picker v-model="picker"
                    :rules="dateRules"
                    prepend-icon="date_range"
                    label="Date"
                    required
                  ></v-date-picker> -->
                  <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker in menu"
            prepend-icon="event"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-row>
          <v-row>
            <v-col md="6" offset-md="3">
              <v-btn @click="submit" block color="green" class="ma-2 white--text" large dark>
                Update Profile.
                <v-icon right dark>mdi-gavel</v-icon>
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
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (b) => !!b || "Name is required",
      (b) => b.length <= 10 || "Name must be less than 10 characters",
      (b) => b.length >= 3 || "Name must be more than 3 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
  }),
  methods:{
      submit(){
          if(this.$refs.form.validate()){
              console.log("This is the output.");
          }
          
      }
  },
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
