import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    prayerTimes: [],
    city: "İstanbul",
  },
  getters: {
    times(state) {
      return state.prayerTimes;
    },
    city(state) {
      return state.city;
    },
  },
  mutations: {
    updateTimes(state, data) {
      state.prayerTimes = data;
    },
    updateCity(state, data) {
      state.city = data;
    },
  },
  actions: {
    prayerTimes(context, payload) {
      let url =
        "https://api.collectapi.com/pray/all?data.city=" +
        payload.toString().toLocaleLowerCase("en-EN");
      axios
        .get(url, {
          headers: {
            authorization:
              "apikey 44xvqEJYLheQH1HTCTm9ZV:4WX5U0SFGvcM0SBxvqGkhZ",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data.result);
          context.commit("updateTimes", res.data.result);
          context.commit("updateCity", payload);
        })
        .catch((error) => {
          console.log(error);
          context.commit("updateTimes", []);
          context.commit("updateCity", "Hata");
        });
    },
  },
});
