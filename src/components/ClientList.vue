<template>
    <v-simple-table dark class="rounded-lg" height="500" style="position:relative">
      <template v-slot:default >
        <thead>
          <tr class="">
            <th class="text-left">Client</th>
            <th class="text-left">Compteur</th>
            <th class="text-left">Balance</th>
            <th class="text-left">Date de Creation</th>
            <th class="text-left text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in state.listClient" :key="item.name">
            <td class="text-left">{{ item.userName }}</td>
            <td class="text-left">{{ item.compteurNumber }}</td>
            <td class="text-left">{{ item.balance + " $"}}</td>
            <td class="text-left">{{ Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(new Date(item.createdOn)) }}</td>
            <td class="text-center">
                <v-btn text color="red" class="mx-5 text-center">
                    <v-icon right>{{ icons.mdiDelete }}</v-icon>
                </v-btn>
                <v-btn text color="success" class="mx-5 text-center">
                    <v-icon right>{{ icons.mdiPencil }}</v-icon>
                </v-btn>
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
  import {mdiAccount, mdiPencil, mdiShareVariant,mdiDelete,} from '@mdi/js';
  const icons= { mdiAccount,mdiPencil,mdiShareVariant,mdiDelete};
  
  const state = reactive({
    listClient: [],
  });
  
  onMounted(async () => {
    const resp = await axios.get(
      "https://enkclientserver2.vercel.app/api/user"
    );
  
    console.log(resp.data);
    if (resp.status > 399) {
      console.log(resp.data);
    } else {
      state.listClient = [...resp.data];
    }

  });
  
  
  </script>
  
  <style>
  </style>