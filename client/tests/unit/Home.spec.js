import { shallowMount } from '@vue/test-utils';
import Home from '@/pages/Home.vue';
import Header from '@/components/Header.vue';

describe('Home.vue', () => {
  it('renders the component (shallow snapshot)', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.contains(Header)).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
