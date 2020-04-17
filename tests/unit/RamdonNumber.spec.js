import RamdonNumber from "@/components/RamdonNumber.vue";
import { mount } from "@vue/test-utils";

describe("RamdonNumber", () => {
  test("By default, randomNumber data value should be 0", () => {
    const wrapper = mount(RamdonNumber);
    expect(wrapper.html()).toContain("<span>0</span>");
  });

  test("If button is clicked, ramdonNumber should be between 1 and 10", async () => {
    const wrapper = mount(RamdonNumber);
    wrapper.find("button").trigger("click");
    await wrapper.vm.$nextTick;
    const ramdonNumber = parseInt(wrapper.find("span").element.textContent);
    expect(ramdonNumber).toBeGreaterThanOrEqual(1);
    expect(ramdonNumber).toBeLessThanOrEqual(10);
  });

  test("If button is clicked, ramdonNumber should be between 200 and 300", async () => {
    const wrapper = mount(RamdonNumber, {
      propsData: {
        min: 200,
        max: 300
      }
    });
    wrapper.find("button").trigger("click");
    await wrapper.vm.$nextTick;
    const ramdonNumber = parseInt(wrapper.find("span").element.textContent);
    expect(ramdonNumber).toBeGreaterThanOrEqual(200);
    expect(ramdonNumber).toBeLessThanOrEqual(300);
  });
});
