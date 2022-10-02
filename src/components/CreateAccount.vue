<template>
  <v-container class="bg-gray-300 d-flex justify-between">
    <v-card class="ma-auto" width="600" height="500">
      <v-img
        class="bg-gray ma-auto m"
        width="100"
        src="../assets/enk_logo.png"
      ></v-img>

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
              <p color="red" class="font-xs text-gray-500">Si vous voulez avoir la simplicité et la clarté 
              <br/> dans vos achats des unités du courant électriques</p>
              <v-btn
              class="text-capitalize"
              color="blue lighten-"
              dark
              v-bind="attrs"
              v-on="on"
            >
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
                      <v-text-field
                        v-model="users.username"
                        label="Votre nom : "
                        required
                        outlined
                        clearable
                      >
                      </v-text-field>
                    </v-col>

                    <v-col cols="12" class="m-0 py-0">
                      <v-text-field
                        v-model="users.compteur"
                        label="Numéro Compteur :"
                        required
                        outlined
                        clearable
                        filled
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" class="m-0 py-0">
                      <v-text-field
                        v-model="users.password"
                        label="Mot de Passe : "
                        required
                        outlined
                        clearable
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      justify="end"
                      class="d-flex justify-between"
                    
                    ><v-alert
                  class="text-center pa-0 ma-0"
                  v-if="alert != ''"
                  v-bind:style="{ color: color }"
                >
                  {{ alert }}
                </v-alert>
                      <nav class="pa-0 ma-0 ml-auto">
                        <ul class="pa-0 ma-0">
                          Avez-vous dja un compe ?
                          <li>
                            <router-link to="/achat"
                              >Achetez le courant</router-link
                            >
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
              <v-btn
                @click="createPost()"
                text
                color="primary"
                class="pa-2 text-capitalize"
              >
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
              <li>Voir Balance et recharger un compte client
                <router-link to="/recharge" class="mx-2 text-capitalize"
                  >c'est par ici</router-link
                >
              </li>
            </ul>
          </nav>
        </div>
        
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
      dialog: false,
      users: {
        username: "",
        compteur: "",
        password: "",
      },
      color: "",
      posts: {},
      alert: "",
      styleButton: {
        border: "blue solid 2px",
      },
    };
  },
  methods: {
    createPost() {
      axios
        .post("http://localhost:8082/api/user", this.users)
        .then((response) => {
          if (response.data.status == false) {
            this.alert = response.data.message;
            this.color = "red";
          } else if(response.data.status==true){
            this.posts = response.data.newUser;
            console.log(this.posts);
            this.alert = response.data.message;
            this.color = "red";
          }
        })
    },
  },
};
</script>
