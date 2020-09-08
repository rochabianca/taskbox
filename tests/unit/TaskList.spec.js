import Vue from "vue";
import PureTaskList from "@/components/PureTaskList.vue";
import { withPinnedTasksData } from "@/components/PureTaskList.stories.js";

it("renders pinned tasks at the start of the list", () => {
  const Constructor = Vue.extend(PureTaskList);
  const vm = new Constructor({
    propsData: { tasks: withPinnedTasksData }
  }).$mount();
  const firstTaskPinned = vm.$el.querySelector(
    ".list-item:nth-child(1).TASK_PINNED"
  );

  // we expect the pinned task to be rendered first, not at the end
  expect(firstTaskPinned).not.toBe(null);
});
