import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header.vue', () => {
  it('renders the component (shallow snapshot)', () => {
    const wrapper = shallowMount(Header);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toMatch('Welcome to Flask + Vue!');
  });
});
