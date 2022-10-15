import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueMoment from "vue-moment";

// ./src/main.js
import "./main.css";

import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

Vue.use(VueMoment)
new Vue({
  router,
  store,
  vuetify,
  VueMoment,
  render: (h) => h(App)
}).$mount("#app");
