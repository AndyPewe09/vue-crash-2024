<template>
  <div class="container mt-5">
    <router-link to="/pengumuman" class="btn btn-secondary mb-3">Back to Pengumuman</router-link>
    <div v-if="pengumumanItem">
      <h1>{{ pengumumanItem.title }}</h1>
      <p>{{ pengumumanItem.description }}</p>
      <img :src="pengumumanItem.imageUrl" class="img-fluid" :alt="pengumumanItem.title" />
      <p class="text-muted mt-3">{{ pengumumanItem.date }}</p>
    </div>
    <div v-else>
      <p>Pengumuman not found.</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const pengumumanItem = ref(null)

    // Sample data, should ideally be fetched from an API
    const pengumuman = [
      {
        id: 1,
        title: 'PROGRAM KPR SUBSIDI MANDIRI',
        description: 'Detail description for KPR Subsidy.',
        imageUrl: '/path/to/kpr-image.png',
        date: '30/07/2024'
      },
      {
        id: 2,
        title: 'DANA BANTUAN PENDIDIKAN',
        description: 'Detail description for Dana Bantuan Pendidikan.',
        imageUrl: '/path/to/dana-image.png',
        date: '02/07/2024'
      }
      // Add more pengumuman as needed
    ]

    pengumumanItem.value = pengumuman.find((item) => item.id === parseInt(route.params.id))

    return {
      pengumumanItem
    }
  }
}
</script>
