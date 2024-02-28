<template>
  <footer>
    <p>Copyright &copy; {{ currentYear }}</p>
    <p>Today's Date: {{ currentDate }}</p>
    <p>Current Time: {{ currentTime }}</p>
    <router-link to="/about">About</router-link>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentDate: '',
      currentTime: '',
    };
  },
  mounted() {
    this.getCurrentDateTime();
    // Update current date and time every second
    setInterval(() => {
      this.getCurrentDateTime();
    }, 1000);
  },
  methods: {
    getCurrentDateTime() {
      const now = new Date();
      this.currentDate = this.formatDate(now);
      this.currentTime = this.formatTime(now);
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    },
    formatTime(date) {
      const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
      return date.toLocaleTimeString('en-US', options);
    },
  },
};
</script>

<style scoped>
a {
  color: #333;
}

footer {
  margin-top: 30px;
  text-align: center;
}
</style>
