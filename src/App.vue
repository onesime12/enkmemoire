<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>ENK Pour Tous</h1>
      </div>

      <v-spacer></v-spacer>

      <div>
        <span class="mr-2">ENK-Power</span>
        <v-icon>mdi-white-balance-incandescent</v-icon>
      </div>

      <nav>
        <ul>
          <li>
            <router-link to="/abonne">
              <a style="color: #ffffff">Abonnés</a>
            </router-link>
          </li>
        </ul>
      </nav>
    </v-app-bar>

    <v-main class="d-flex align-center">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({}),
};
</script>
