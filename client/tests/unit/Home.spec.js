global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ time: new Date().toISOString() })
  })
);

import { mount, shallowMount } from "@vue/test-utils";
import Home from "@/Pages/Home.vue";
import Header from "@/Components/Header.vue";

describe("Home.vue", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component (shallow snapshot)", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.findComponent(Header)).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("should pass fetchTime", () => {
    const wrapper = mount(Home);
    const para = wrapper.find("p");

    expect(para.text()).toEqual("Loading...");
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith("/current-time");
  });

  it("should pass fetchTime (api error)", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        statusText: "error"
      })
    );
    mount(Home);

    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith("/current-time");
  });
});
