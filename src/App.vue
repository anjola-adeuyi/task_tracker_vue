<script>
import Header from './components/Header.vue';
import Tasks from './components/Tasks.vue';
import AddTask from './components/AddTask.vue';

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    addTask(task) {
      this.tasks = [...this.tasks, task];
    },
    deleteTaskFromApp(id) {
      console.log('delete from app', id);
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleReminder(id) {
      console.log('toggle reminder', id);
      this.tasks = this.tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task));
    },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Doctor Appointment',
        day: 'May 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'May 6th at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'May 7th at 12:30pm',
        reminder: false,
      },
    ];
  },
};
</script>

<template>
  <div class="container">
    <Header
      v-on:toggle-add-task="toggleAddTask"
      v-bind:showAddTask="showAddTask"
      title="Task Tracker"
    />
    <AddTask
      v-show="showAddTask"
      v-on:add-task="addTask"
    />
    <Tasks
      v-on:delete-task="deleteTaskFromApp"
      v-on:toggle-reminder="toggleReminder"
      v-bind:tasks="tasks"
    />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
