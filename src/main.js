import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";

/* Axios */
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
