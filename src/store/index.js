import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

var filterTurkish = (str) => {
  return str
    .toString()
    .toLowerCase()
    .replace("i̇", "i")
    .replace("ü", "u")
    .replace("ş", "s")
    .replace("ö", "o")
    .replace("ğ", "g")
    .replace("ç", "c");
};

export default new Vuex.Store({
  state: {
    prayerTimes: null,
    city: "İstanbul",
  },
  getters: {
    times(state) {
      return state.prayerTimes;
    },
    city(state) {
      return filterTurkish(state.city);
    },
    times_text(state) {
      var text = `${state.city}+için+namaz+vakitleri:+`;
      state.prayerTimes.forEach((data) => {
        text += data.vakit + ":";
        text += data.saat + " / ";
      });
      return text;
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
      let url = null;
      url =
        "https://api.collectapi.com/pray/all?data.city=" +
        filterTurkish(payload);
      axios
        .get(url == "i%CC%87stanbul" ? "istanbul" : url, {
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
