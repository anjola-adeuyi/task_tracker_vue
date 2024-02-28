<template>
  <button
    v-bind:style="{ background: color }"
    class="btn"
    v-on:click="onClick()"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: 'Add',
    },
    color: String,
  },
  methods: {
    onClick() {
      console.log('toggle add task clicked');
      this.$emit('btn-click');
    },
  },
};
</script>
