<template>
  <v-container class="bg-gray-300 d-flex">
    <v-card class="ma-auto" width="600" height="500">
      <v-img class="bg-gray ma-auto m" width="100" src="../assets/enk_logo.png"></v-img>

      <v-card-text class="ma-auto">
        <h1 class="font-sans font-bold text-center text-xl">
          Enérgie du Nord Kivu, l'électricité pour tous
        </h1>
        <h1 class="text-center">
          Créer un compte <br />
          procurez-vous des unités Electiques en distance
        </h1>
      </v-card-text>
      <v-divider class="my-5"></v-divider>
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <div>
              <p color="red" class="font-xs text-gray-500">
                Si vous voulez avoir la simplicité et la clarté <br />
                dans vos achats des unités du courant électriques
              </p>
              <v-btn class="text-capitalize" color="blue lighten-" dark v-bind="attrs" v-on="on">
                Commencer par ici
              </v-btn>
            </div>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Creat an account
            </v-card-title>

            <v-card-text>
              <v-form @submit.prevent="achatPost" class="mt-5">
                <v-container>
                  <v-row>
                    <v-col cols="12" class="m-0 py-0">
                      <v-text-field v-model="users.userName" label="Votre nom : " required outlined clearable>
                      </v-text-field>
                    </v-col>

                    <v-col cols="12" class="m-0 py-0">
                      <v-text-field v-model="users.compteur" label="Numéro Compteur :" required outlined clearable
                        filled></v-text-field>
                    </v-col>

                    <v-col cols="12" class="m-0 py-0">
                      <v-text-field v-model="users.password" label="Mot de Passe : " required outlined clearable>
                      </v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-alert class="text-center pa-0 ma-0" v-if="alertMessage != ''" v-bind:style="{ color: color }">
                        {{ alertMessage }}
                      </v-alert>
                      <nav class="pa-0 ma-0 w-96">
                        <ul class="pa-0 ma-0 d-flex justify-around">
                          <li>
                            <v-progress-circular
                              v-if="log.isLoading == true"
                              :size="30"
                              :width="4"
                              color="purple"
                              indeterminate
                            ></v-progress-circular>
                          </li>
                          <li>
                            Avez-vous dja un compe ?
                            <router-link to="/achat">Achetez le courant</router-link>
                          </li>
                        </ul>
                      </nav>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>

            <v-divider></v-divider>
            <v-spacer></v-spacer>
            <v-card-actions class="d-flex justify-between">
              <v-btn @click="createPost()" text color="primary" class="pa-2 text-capitalize">
                Créer Compte
              </v-btn>
              <v-btn color="primary" text @click="dialog = false">
                Fermer
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <div class="ma-5 py-5">
          <nav class="pa-0 ma-0 ml-auto">
            <ul class="pa-0 ma-0">
              <li>
                Voir Balance et recharger un compte client
                <router-link to="/recharge" class="mx-2 text-capitalize">c'est par ici</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <v-alert v-if="color=='green'" class="font-bold font-sans" color="success" dismissible :value="alert">
          Un utilisateur a été crée avec success
        </v-alert>
        <v-alert v-else-if="color=='red'" class="font-bold font-sans" dark color="red" dismissible :value="alert">
          Aucun abonné ne correspond à ce Compteur
        </v-alert>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "CreateAccount",
  data() {
    return {
      log:{
        isLoading:false
      },
      dialog: false,
      alert:false,
      alertMessage:"",
      users: {
        userName: "",
        compteur: "",
        password: "",
      },
      color: "",
      posts: {},
      styleButton: {
        border: "blue solid 2px",
      },
    };
  },
  methods: {
    createPost() {
      this.log.isLoading=true;
      axios
        .post("https://enkclientserver2.vercel.app/api/user", this.users)
        .then((response) => {
          console.log(response);
          if (response.status <= 399) {
            this.posts = response.data;
            console.log(this.posts);
            this.alertMessage = "Client creer avec succes";
            this.alert=true;
            this.color = "green";
            setTimeout(()=>{
              this.alertMessage="";
              this.dialog = false
            }, 5000);
            setTimeout(() => {
              this.log.isLoading=false;
            }, 10);
          } 
        }).catch((error)=>{
          console.log(error);
          this.alertMessage = "Erreur de creation de compte";
          this.alert=true
          this.color = "red";
          setTimeout(() => {
            this.log.isLoading=false;
          }, 10);
          setTimeout(()=>{
              this.alertMessage="";
            this.dialog = false
          }, 5000);
        });
    },
  },
};
</script>
