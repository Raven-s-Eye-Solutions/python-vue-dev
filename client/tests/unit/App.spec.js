import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('renders the component (shallow snapshot)', () => {
    const wrapper = shallowMount(App, {
      stubs: ['router-link', 'router-view'],
    });
    expect(wrapper).toMatchSnapshot();
  });
});
