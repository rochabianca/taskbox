import Vue from "vue";
import TaskList from "@/components/TaskList.vue";
import { withPinnedTasksData } from "@/components/TaskList.stories.js";

it("renders pinned tasks at the start of the list", () => {
  const Constructor = Vue.extend(TaskList);
  const vm = new Constructor({
    propsData: { tasks: withPinnedTasksData }
  }).$mount();
  const firstTaskPinned = vm.$el.querySelector(
    ".list-item:nth-child(1).TASK_PINNED"
  );

  // we expect the pinned task to be rendered first, not at the end
  expect(firstTaskPinned).not.toBe(null);
});
