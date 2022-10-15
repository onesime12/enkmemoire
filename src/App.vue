<template>
  <v-app>
    <v-toolbar dark tabs flat color="indigo" style="height:0%">    
      <v-tabs v-model="tabs" align-with-title class="">
      <v-toolbar-title><h1 class="pt-5 pl-5">ENK Pour Tous</h1></v-toolbar-title> 
      <v-spacer></v-spacer>
        <v-tab href="#one">
          <router-link to="/abonne">
            <a class="text-capitalize" style="color: #ffffff">Abonnés</a>
          </router-link>
        </v-tab>
        <v-tab href="#two">
          <router-link to="/client">
            <a class="text-capitalize" style="color: #ffffff">Clients</a>
          </router-link>
        </v-tab>
        <v-tab href="#three">
          <router-link to="/">
            <a class="text-capitalize" style="color: #ffffff">A propos</a>
          </router-link>
        </v-tab>
        <v-btn icon class="mt-3 mr-5">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <v-tabs-slider color="pink"></v-tabs-slider>
      </v-tabs>
    </v-toolbar>

    <v-main class="d-flex align-center">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    fab: false,
    hidden: false,
    tabs: null,
  }),

  computed: {
    activeFab () {
      switch (this.tabs) {
        case 'one': return { color: 'success', icon: 'mdi-share-variant' }
        case 'two': return { color: 'red', icon: 'mdi-pencil' }
        case 'three': return { color: 'green', icon: 'mdi-chevron-up' }
        default: return {}
      }
    },
  },
};
</script>
