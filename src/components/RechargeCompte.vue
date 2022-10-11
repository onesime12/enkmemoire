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

      <div v-if="vueSelf == false && updateOneUser == false" class="h-60 d-flex justify-around align-center flex-col" >
        
        <div class="mx-6">
          <v-dialog  v-model="dialog" width="500">
            <template  v-slot:activator="{ on, attrs }">
              <div class="d-flex justify-center flex-col">
                <h1 class="text-center text-gray-400 m-auto">
                  Faites une recherche et le resultat s'affiche ici
                </h1>
                <v-btn v-bind="attrs" v-on="on" @click="dialog=true" class="text-white text-capitalize text-center mt-6" color="blue">Recharger un compte client</v-btn>
              </div>
            </template>
            
            <v-card v-if="dialog==true" class="ma-auto" width="auto">
              <v-card-title class="d-fle  justify-center">
                <h1 class="text-center pa-4 font-sans font-extrabold ">Login</h1>
                <p class="font-sans text-center text-sm text-gray-400">Avant de recharger un compte Client le systeme veut s'assurer  <br> vous avez l'autorisation</p>
              </v-card-title>
              <v-card-text>
                <v-form @submit.prevent="achatPost" class="mt-5">
                  <v-container>
                    <v-row>
                      <v-col cols="12" class="m-0 py-0">
                        <v-text-field
                          v-model="log.userName"
                          label="Your name : "
                          required
                          outlined
                          clearable
                        >
                        </v-text-field>
                      </v-col>

                      <v-col cols="12" class="m-0 py-0">
                        <v-text-field
                          name="name"
                          label="Enter your password"
                          :rules="rules"
                          type="password"
                          v-model="log.password"
                          required
                          outlined
                          clearable
                          filled
                        ></v-text-field>
                      </v-col>

                      <v-col
                        cols="12"
                        justify="end"
                        class="d-flex justify-between"
                        >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </v-card-text>
              <v-card-actions >
                <v-progress-circular v-if="isLoading==true" :size="30" :width="4" color="purple" indeterminate></v-progress-circular>
                <v-btn v-else @click="login()" text color="blue" class="mr-6">Connecter</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <div class="d-flex justify-end pa-5">
          <router-link to="/achat">Acheter</router-link>
        </div>
      </div>

      <div v-else-if="vueSelf == true && updateOneUser == false" class="bg-gray-200 w-200 d-flex justify-around align-center flex-col">
        
        <v-list v-for="(item, index) in gets" :key="index">
          <v-list-item
            class="d-flex flex-col"
            :key="index"
            v-if="item.compteurNumber == compteur"
          >
            <p class="ma-2">{{ item.userName }}</p>
            <p class="ma-2 font-bold text-7xl">{{ item.balance + " $" }}</p>
            <p class="ma-2">Est Votre Balance actuelle</p>
          </v-list-item>
        </v-list>
        <div class="d-flex justify-end pa-5">
          <router-link to="/achat">Acheter</router-link>
        </div>
      </div>

      <div v-else class="bg-gray-200 w-200 d-flex justify-around align-center flex-col">
        <h1 class="text-gray-5000 text-center"> salut</h1>
        <div class="d-flex justify-end pa-5">
          <router-link to="/achat">Acheter</router-link>
        </div>
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
      rules:[],
      dialog: false,
      updateOneUser:false,
      isLoading:false,
      error:false,
      log:{
        userName:"Onesime",
        password:"Onesime@.12"
      },
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
          "https://enkclientserver2.vercel.app/api/user/" + this.compteur,data)
        .then((response) => {
          console.log(response);
        });
    },
    login(){
      if (this.log.userName=="Onesime" && this.log.password=="Onesime@.12") {
        setTimeout(() => {
          this.isLoading=true
        }, 10)
         setTimeout(() => {
          this.isLoading=false
          this.dialog=false
          this.updateOneUser=true
        }, 4000);
      } else{
        setTimeout(() => {
          this.rules=[() => ('The email and password you entered don\'t match')]
        }, 10);
        setTimeout(() => {
          this.rules=[]
        }, 4000);
        
      }
    }
  }
};
</script>

