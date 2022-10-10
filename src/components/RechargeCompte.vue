<template>
  <v-container>
    <v-card max-width="450" class="mx-auto">
      <v-toolbar color="blue" dark>
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        <v-toolbar-title>Clients</v-toolbar-title>
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
              <v-col cols="4" class="">
                <v-btn dark @click="recheachUsers()" icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-toolbar>
      <div
        v-if="vueSelf == false"
        class="h-60 d-flex justify-center align-center"
      >
        <h1 class="text-center text-gray-400 m-auto">
          Faites une recherche et le resultat s'affiche ici
        </h1>
      </div>
      <div v-else class="bg-gray-200 w-200 h-200">
        <v-list v-for="(item, index) in gets" :key="index">
          <v-list-item
            class="d-flex flex-col"
            :key="index"
            v-if="item.compteurNumber == compteur"
          >
            <p class="ma-2">{{ item.userName }}</p>
            <p class="ma-2 font-bold text-7xl">{{ item.balance + " $" }}</p>
            <p class="ma-2">Est Votre Balance actuelle</p>
            <!-- <v-form @submit.prevent="updateUser" class="">
          <v-container>
            <v-row>
              <v-col cols="8" class="">
                <v-text-field class="" v-model="somme" label="Montant en dollars : ">
                </v-text-field>
              </v-col>
              <v-col cols="4" class="">
                <v-btn dark @click="updateUser()" icon>
                  <v-icon color="black">Envoyer</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form> -->
          </v-list-item>
        </v-list>
      </div>

      <div class="d-flex justify-end pa-5">
        <router-link to="/achat">Acheter</router-link>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "RechargeCompte",
  data() {
    return {
      gets: {},
      compteur: "",
      vueSelf: false,
      somme: "",
    };
  },
  methods: {
    recheachUsers() {
      axios
        .get("https://enkclientserver2.vercel.app/api/user")
        .then((response) => {
          this.gets = response.data;
          this.vueSelf = true;
          console.log(this.gets);
          //}
        });
    },
    updateUser() {
      const data = {
        //compteurNumber: this.compteur,
        balance: this.somme,
      };
      axios
        .put(
          "https://enkclientserver2.vercel.app/api/user/" + this.compteur,
          data
        )
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>

