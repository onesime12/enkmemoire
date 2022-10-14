<template>
  <v-container>
    <abonneList />
  </v-container>
</template>
  
<script>
import AbonneList from "../components/AbonneList";
export default {
  name: "AbonneView",
  components: {
    AbonneList,
  },
};
</script>