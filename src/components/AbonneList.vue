<template>
  <v-simple-table dark class="rounded-lg" height="500" style="position:relative">
    <template v-slot:default >
      <thead>
        <tr class="">
          <th class="text-left">Client</th>
          <th class="text-left">cellule</th>
          <th class="text-left">Compteur</th>
          <th class="text-left">Abonnement</th>
          <th class="text-left">Numéro Parcelle</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in state.listAbonne" :key="item.name">
          <td class="text-left">{{ item.aboName }}</td>
          <td class="text-left">{{ item.cellule }}</td>
          <td class="text-left">{{ item.compteurNumber }}</td>
          <td class="text-left">{{ item.typeAbonnement }}</td>
          <td class="text-left">{{ item.numParcelle }}</td>
          <td class="text-left">
            <v-btn></v-btn>
          </td>
        </tr>
      </tbody>
      <v-btn
        color="pink"
        class="mb-8"
        fab
        dark
        small
        absolute
        bottom
        right
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    
  </v-simple-table>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive } from "vue";

const state = reactive({
  listAbonne: [],
});
onMounted(async () => {
  const resp = await axios.get(
    "https://enkclientserver2.vercel.app/api/abonne"
  );

  console.log(resp.data);
  if (resp.status > 399) {
    console.log(resp.data);
  } else {
    state.listAbonne = [...resp.data];
  }
});


</script>

<style>
</style>