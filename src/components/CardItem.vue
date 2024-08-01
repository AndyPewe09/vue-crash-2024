<template>
  <div class="card mb-4">
    <div class="card-body">
      <h5 class="card-title">{{ task.title }}</h5>
      <p class="card-text">{{ task.summary }}</p>
      <div v-for="image in task.images" :key="image.id">
        <img :src="image.image_url" class="img-fluid" alt="Task Image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  task: Object
})
</script>
