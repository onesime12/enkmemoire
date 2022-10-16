<template>
  <v-app>
    <v-toolbar dark tabs flat color="indigo" style="height: ">
      <v-tabs v-model="tabs" align-with-title class="">
        <v-toolbar-title
          ><h1 class="pt-5 pl-5">ENK Pour Tous</h1></v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-tab href="#zero">
          <router-link to="/">
            <a class="text-capitalize" style="color: #ffffff">Accueil</a>
          </router-link>
        </v-tab>
        <v-tab v-if="display == true" href="#one">
          <router-link to="/abonne">
            <a class="text-capitalize" style="color: #ffffff">Abonnés</a>
          </router-link>
        </v-tab>
        <v-tab v-if="display == true" href="#two">
          <router-link to="/client">
            <a class="text-capitalize" style="color: #ffffff">Clients</a>
          </router-link>
        </v-tab>
        <v-tab href="#three">
          <router-link to="/">
            <a class="text-capitalize" style="color: #ffffff">A propos</a>
          </router-link>
        </v-tab>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              @click="connect2()"
              icon
              class="mt-3 mr-5"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <span>Login</span>
        </v-tooltip>

        <v-tabs-slider color="pink"></v-tabs-slider>
      </v-tabs>
    </v-toolbar>

    <v-main class="d-flex align-center">
      <router-view />
    </v-main>
    <v-dialog v-model="dialog" persistent max-width="400">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 text-center">
          Connectez-vous à votre compte Admin
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="connect" class="mt-5">
            <v-container>
              <v-row>
                <v-col cols="12" class="m-0 py-0">
                  <v-text-field
                    v-model="login.name"
                    label="Enter your name... "
                    required
                    outlined
                    clearable
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="12" class="m-0 py-0">
                  <v-text-field
                    name="name"
                    label="Enter your password..."
                    :rules="rules"
                    type="password"
                    v-model="login.password"
                    required
                    outlined
                    clearable
                    filled
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="green darken-1"
            class="text-lowercase"
            text
            @click="connect1"
          >
            Pass as visitor
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            class="text-capitalize"
            text
            @click="connect()"
          >
            connexion
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    fab: false,
    hidden: false,
    tabs: null,
    dialog: true,
    display: false,
    rules: [],
    login: {
      name: "",
      password: "",
    },
  }),

  methods: {
    connect() {
      if (
        this.login.name == "Onesime" &&
        this.login.password == "Onesime@.12"
      ) {
        this.dialog = false;
        this.display = true;
      } else {
        setTimeout(() => {
          this.rules = [() => "The password you entered don't match"];
        }, 10);
        setTimeout(() => {
          this.rules = [];
        });
      }
    },
    connect1() {
      setTimeout(() => {
        this.dialog = false;
        this.display = false;
      }, 10);
    },
    connect2() {
      this.login.name == "";
      this.login.password == "";
      setTimeout(() => {
        this.dialog = true;
      }, 10);
    },
  },

  computed: {
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { color: "success", icon: "mdi-share-variant" };
        case "two":
          return { color: "red", icon: "mdi-pencil" };
        case "three":
          return { color: "green", icon: "mdi-chevron-up" };
        default:
          return {};
      }
    },
  },
};
</script>
