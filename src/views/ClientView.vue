<template>
    <v-container>
      <ClientList />
    </v-container>
  </template>
    
  <script>
  import ClientList from "../components/ClientList";
  export default {
    name: "AbonneView",
    components: {
      ClientList,
    },
  };
  </script>