<!--./src/components/NavBar.vue -->

<template>
  <v-container class="bg-gray-300 d-flex align-center justify-center mb-6">
    <v-card class="mx-10" max-width="400">
      <v-card-title>{{ title }}</v-card-title>
      <v-form @submit.prevent="achatPost" class="mt-5">
        <v-container>
          <v-row>
            <v-col cols="12" class="m-0 py-0">
              <v-text-field
                v-model="operations.compteur"
                label="Votre nom : "
                required
                outlined
                clearable
              >
              </v-text-field>
            </v-col>

            <v-col cols="12" class="m-0 py-0">
              <v-text-field
                v-model="operations.prix"
                label="Numéro Compteur :"
                required
                outlined
                clearable
                filled
              ></v-text-field>
            </v-col>

            <v-col cols="12" justify="center" class="">
              <nav class="ma-0 pa-0">
                <ul class="ma-0 pa-0 d-flex">
                  <li>
                    <v-alert
                      class="ma-0 pa-0 w-100"
                      v-if="alert != ''"
                      v-bind:style="{ color: color }"
                      >{{ alert }}
                    </v-alert>
                  </li>

                  <li class="ml-auto">
                    <p class="text-sm">
                      N'avez-vous pas un Compte <br />
                      <router-link to="/" class="ma-0 pa-0"
                        >Créer un Compte</router-link
                      >
                    </p>
                  </li>
                </ul>
              </nav>
              <v-divider class="my-5"></v-divider>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                @click="achatPost()"
                class="pa-2 text-capitalize"
              >
                Acheter maintenant
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
    <v-card
      v-if="posts.operateur"
      class="mx-10 overflow-auto"
      min-width="400"
      max-height="700"
    >
      <v-chip class="float-right mt-4 flat mr-5">{{
        currentDateTime()
      }}</v-chip>
      <v-card-title class="text-green-900">Detail d'achat</v-card-title>
      <p class="text-h6 text--primary text-center border-blue-800 border-b-2">
        ENK Cash-POWER
      </p>
      <v-card-text>
        <p class="pa-1 ma-1 border-gray-200 border-dashed border-2">
          - Numéro Reçu :
          <b class="text-uppercase text-right"> {{ 467364 + " / " + 98473 }}</b>
          <br />
          - Numéro Compteur :
          <b class="text-uppercase text-right">{{ posts.compteurNumber }}</b>
          <br />
          - Abonné ENK :
          <b class="text-uppercase font-weight-regular text-right">{{
            posts.operateur
          }}</b>
        </p>
        <div class="d-flex justify-center">
          <p
            class="
              text-black
              font-mono
              text-center
              w-38
              border-b-2 border-dotted border-gray-300
            "
          >
            Crédit d'électricité
          </p>
        </div>

        <div
          class="
            text-center text-lg text--primary
            border-double border-gray-200 border-4
            mx-10
            p-2
            py-10
          "
        >
          {{ "74938402473-58" }}
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="text-center pb-2 mb-0">
        <div
          class="
            border-2 border-blue-400 border-dashed
            pa-5
            font-mono font-semibold
          "
        >
          <div class="d-flex justify-between">
            <p class="py-0 my-0">Tendu</p>
            <p class="py-0 my-0">
              {{ posts.prix + " $" }}
            </p>
          </div>
          <div class="d-flex justify-between">
            <p class="py-0 my-0">Unités</p>
            <p class="py-0 my-0">{{ posts.prix * 2.6 }}</p>
          </div>
          <div class="d-flex justify-between">
            <p class="py-0 my-0">Valeur</p>
            <p class="py-0 my-0">
              {{ posts.prix + " $" }}
            </p>
          </div>
        </div>
        <div class="pt-3 mt-3">
          <p class="font-mono">Opérateur {{ posts.operateur }}</p>
          <p class="font-extrabold font-sans py-0">ENK CASH-POWER</p>
        </div>
      </v-card-text>
      <v-card-actions class="d-flex justify-end">
        <v-dialog transition="dialog-bottom-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              class="text-capitalize"
              color="deep-purple accent-4"
              v-bind="attrs"
              v-on="on"
              >Find More</v-btn
            >
          </template>
          <template v-slot:default="dialog">
            <v-card max-width="450" class="mx-auto">
              <v-toolbar color="cyan" dark>
                <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
                <v-toolbar-title>Vos Achats</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-form @submit.prevent="recheachOperation" class="">
                  <v-container>
                    <v-row>
                      <v-col cols="8" class="">
                        <v-text-field
                          class=""
                          v-model="compteur"
                          label="Numéro Compteur : "
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="4" class=""
                        ><v-btn @click="recheachOperation()" icon>
                          <v-icon>mdi-magnify</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </v-toolbar>

              <v-list three-line>
                <template v-for="(item, index) in gets">
                  <v-list-item
                    class="d-block bg-blue-200 ma-2 rounded-md"
                    v-if="item.numCompteur == compteur"
                    :key="index"
                  >
                    <v-subheader
                      :key="index"
                      v-text="item.createdOn"
                    ></v-subheader>
                    <div class="d-flex justify-start">
                      <v-list-item-avatar class="ma-0 pa-0">
                        <v-icon>mdi-lightning-bolt</v-icon>
                      </v-list-item-avatar>
                      <div class="pa-0 ma-0">
                        <p class="pa-0 ma-0">
                          {{ "Montant Tendu : " + item.prix + " $" }}
                        </p>
                        <p class="pa-0 ma-0">
                          {{ "Code du Courant : " + item.code }}
                        </p>
                      </div>
                    </div>

                    <v-divider class="ma-0 pa-0" inset></v-divider>
                  </v-list-item>
                </template>
              </v-list>

              <div class="d-flex justify-end">
                <v-btn text @click="dialog.value = false">Fermer</v-btn>
              </div>
            </v-card>
          </template>
        </v-dialog>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "AchatCourant",
  data() {
    return {
      operations: {
        compteur: "",
        prix: "",
      },
      compteur: "",
      title: "Achat du courant",
      alert: "",
      color: "",
      styleButton: {
        border: "blue solid 2px",
      },
      posts: {},
      post: false,
      codes: {},
      foundOperation: false,
      gets: {},
    };
  },
  methods: {
    displayMethode() {
      this.foundOperation = true;
    },
    achatPost() {
      axios
        .post(
          "https://enkclientserver2.vercel.app/api/operation",
          this.operations
        )
        .then((response) => {
          if (response.data.status == false) {
            this.alert = response.data.message;
            this.color = "red";
          } else if (response.data.status == true) {
            this.posts = response.data.newOperation;
            console.log(this.posts);
            this.post = true;
            this.alert = response.data.message;
            this.color = "green";
          }
        });
    },
    recheachOperation() {
      axios.get("https://enkserver.vercel.app/api/code").then((response) => {
        if (response.data.status == true) {
          this.gets = response.data.codeFound;
          console.log(this.gets);
        }
      });
    },
    currentDateTime() {
      const current = new Date();
      const date =
        current.getDate() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getFullYear();
      const time = current.getHours() + ":" + current.getMinutes();
      const dateTime = date + " " + time;

      return dateTime;
    },
  },
};
</script>
