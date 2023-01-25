import cryptoApi from "../../api/cryptoApi";
import data from "../response.json";
const state = {
  all: [],
  fav: [],
};

const getters = {
  allCryptos: (state) => state.all,
};

const actions = {
  getAllCryptos({ commit }) {
    if (process.env.NODE_ENV === "development") {
      commit("setCryptos", data.data);
    } else {
      cryptoApi.get().then((response) => {
        commit("setCryptos", response.data.data);
      });
    }
  },
  getFavCryptos({ commit }) {
    const n = Math.floor(Math.random() * (data.data.length - 1));
    const randomFav = data.data.slice(n, n + 2);
    const randomFavs = commit("setFav", randomFav);
    console.log(randomFavs, n);
  },
};

const mutations = {
  setCryptos(state, cryptos) {
    state.all = cryptos;
  },
  setFav(state, fav) {
    state.fav = fav;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
