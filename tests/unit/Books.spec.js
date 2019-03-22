import Vuex from 'vuex';
import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Books from '@/components/Books';
import Vuetify from 'vuetify';

Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(Vuex);

describe('Books.vue', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        books: [],
        searchQuery: '',
        isFetching: false,
        apiBaseUrl: 'https://www.googleapis.com/books/v1/volumes',
      },
      getters: {
        books: state => state.books,
      },
    });
  });

  it('should render correctly', () => {
    const wrapper = shallowMount(Books, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  });
});
