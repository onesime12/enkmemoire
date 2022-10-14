<template>
  <v-simple-table height="300px" class="rounded-lg" dark>
    <template v-slot:default>
      <thead>
        <tr class="bg-blue-600 rounded-lg">
          <th class="text-left">Client</th>
          <th class="text-left">cellule</th>
          <th class="text-left">Compteur</th>
          <th class="text-left">Abonnement</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in state.listAbonne" :key="item.name">
          <td>{{ item.aboName }}</td>
          <td>{{ item.cellule }}</td>
          <td>{{ item.compteurNumber }}</td>
          <td>{{ item.typeAbonnement }}</td>
        </tr>
      </tbody>
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