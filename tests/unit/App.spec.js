import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import App from '../../src/App';

Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(Vuex);

describe('App.vue', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        books: [],
        searchQuery: '',
        isFetching: false,
        apiBaseUrl: 'https://www.googleapis.com/books/v1/volumes',
      },
    });
  });

  it('should render correctly', () => {
    const wrapper = mount(App, {
      store,
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
