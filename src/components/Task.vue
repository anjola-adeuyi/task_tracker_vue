<template>
  <div
    v-on:dblclick="$emit('toggle-reminder', task.id)"
    v-bind:class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      <span>
        {{ task.text }}
        <i class="fa-solid fa-user"></i>
      </span>

      <i
        class="fas fa-solid fa-rectangle-xmark"
        v-if="task.reminder"
        @click="deleteTask(task.id)"
      ></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteTask(id) {
      this.$emit('delete-task', id);
      console.log(id);
    },
  },
};
</script>

<style scoped>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
