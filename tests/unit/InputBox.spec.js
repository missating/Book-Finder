import Vuex from 'vuex';
import Vue from 'vue';
import { mount, createLocalVue } from '@vue/test-utils';
import InputBox from '@/components/InputBox';
import Vuetify from 'vuetify';

Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(Vuex);

describe('InputBox.vue', () => {
  let store;
  let actions;

  beforeEach(() => {
    actions = {
      validate: jest.fn(),
    };

    store = new Vuex.Store({
      state: {
        books: [],
        searchQuery: '',
        isFetching: false,
        apiBaseUrl: 'https://www.googleapis.com/books/v1/volumes',
      },
      actions,
    });
  });

  it('should render correctly', () => {
    const wrapper = mount(InputBox, {
      store,
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should update the component state when input is changed', () => {
    const wrapper = mount(InputBox, {
      store,
      localVue,
    });

    wrapper.find('#input-box').setValue('alice');
    wrapper.find('form').trigger('change');
    expect(wrapper.vm.searchQuery).toBe('alice');
  });
});
