import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    searchQuery: '',
    currentlySearching: false,
    apiBaseUrl: 'https://www.googleapis.com/books/v1/volumes',
  },
  mutations: {
    setBooksVolumes(state, books) {
      state.books = books; // eslint-disable-line
    },

    setSearchQuery(state, query) {
      state.searchQuery = query; // eslint-disable-line
    },

    startSearch(state) {
      state.currentlySearching = true; // eslint-disable-line
    },

    endSearch(state) {
      state.currentlySearching = false; // eslint-disable-line
    },
  },
  actions: {
    async getBooks({ state, commit }, query) {
      commit('setSearchQuery', query);
      const url = `${state.apiBaseUrl}?q='${state.searchQuery}`;
      commit('startSearch');
      try {
        const response = await axios.get(url);
        commit('setBooksVolumes', response.data.items);
        commit('endSearch');
      } catch (error) {
        commit('setBooksVolumes', []);
        commit('endSearch');
      }
    },
  },

  getters: {
    getBooks: (state) => {
      if (state.books === []) {
        return [];
      }
      return state.books;
    },
  },
});
