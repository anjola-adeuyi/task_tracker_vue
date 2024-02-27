<template>
  <div v-bind:class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>
      <span>
        {{ task.text }}
        <i class="fa-solid fa-user"></i>
      </span>

      <i
        class="fas fa-solid fa-rectangle-xmark"
        v-if="task.reminder"
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
