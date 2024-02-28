<template>
  <div>
    <h1>About</h1>
    <p>This is a simple task tracker app to learn Vue.js</p>
    <router-link to="/">Go Back</router-link>
  </div>
</template>

<script>
export default {
  name: 'About',
  inheritAttrs: false, // disable 'non-props' warning
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>
