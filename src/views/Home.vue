<template>
  <AddTask
    v-show="showAddTask"
    v-on:add-task="addTask"
  />
  <Tasks
    v-on:delete-task="deleteTaskFromApp"
    v-on:toggle-reminder="toggleReminder"
    v-bind:tasks="tasks"
  />
</template>

<script>
import AddTask from '../components/AddTask.vue';
import Tasks from '../components/Tasks.vue';
import { tasks } from '../../data';

export default {
  name: 'Home',
  props: {
    showAddTask: Boolean,
  },
  components: {
    AddTask,
    Tasks,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async addTask(task) {
      // const res = await fetch('http://localhost:5000/tasks', {
      //   method: 'POST',
      //   headers: {
      //     'Content-type': 'application/json',
      //   },
      //   body: JSON.stringify(task),
      // });
      // const data = await res.json();

      this.tasks = [...this.tasks, task];
    },
    async deleteTaskFromApp(id) {
      if (!confirm('Are you sure?')) return;

      this.tasks = this.tasks.filter((task) => task.id !== id);

      // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      //   method: 'DELETE',
      // });
      // res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error Deleting Task');

      console.log('delete from app', id);
    },
    async toggleReminder(id) {
      this.tasks = this.tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task));

      // const taskToToggle = await this.fetchTask(id);
      // const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      //   method: 'PUT',
      //   headers: {
      //     'Content-type': 'application/json',
      //   },
      //   body: JSON.stringify(updTask),
      // });

      // const data = await res.json();

      // this.tasks = this.tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task));

      console.log('toggle reminder', id);
    },
    async fetchTasks() {
      console.log('fetch tasks');
      const res = await fetch('http://localhost:5000/tasks');
      const data = await res.json();
      return data;
    },
    async fetchTask(id) {
      console.log('fetch task', id);
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.tasks = tasks;
  },
};
</script>
