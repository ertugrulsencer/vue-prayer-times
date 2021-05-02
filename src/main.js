import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";

/* Axios */
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
