<template>
  <div
    :key="task.id"
    v-for="task in tasks"
  >
    <Task
      v-on:delete-task="deleteFromTasks(task.id)"
      :task="task"
    />
  </div>
</template>

<script>
import Task from './Task.vue';

export default {
  name: 'Tasks',
  components: {
    Task,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  emits: ['delete-task'],
  methods: {
    deleteFromTasks(id) {
      console.log('delete from task', id);
      this.$emit('delete-task', id);
    },
  },
};
</script>
