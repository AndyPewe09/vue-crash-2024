<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ date }}</p>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button
          v-for="button in buttons"
          :key="button.action"
          class="btn btn-outline-secondary"
          @click="handleClick(button.action)"
        >
          {{ button.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    title: String,
    date: String,
    buttons: Array
  },
  methods: {
    handleClick(action) {
      console.log(`Button clicked: ${action}`)
    }
  }
}
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
</style>
