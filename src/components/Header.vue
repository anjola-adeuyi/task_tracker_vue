<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      v-bind:color="showAddTask ? 'red' : 'green'"
      v-bind:text="showAddTask ? 'Close' : 'Add Task'"
      v-on:btn-click="$emit('toggle-add-task')"
    />
  </header>
</template>

<script>
import Button from './Button.vue';
export default {
  name: 'Header',
  components: {
    Button,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    showAddTask: Boolean,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
