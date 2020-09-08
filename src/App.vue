<template>
  <div id="app">
    <task-list />
  </div>
</template>

<script>
import store from "./store";
import TaskList from "./components/TaskList";

export default {
  name: "App",
  store,
  components: {
    TaskList
  }
};
</script>

<style>
@import "./assets/css/index.css";
</style>
