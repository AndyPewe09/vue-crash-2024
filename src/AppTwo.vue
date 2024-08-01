<template>
  <div class="container mt-5">
    <h3>Tasks:</h3>
    <div class="row">
      <div class="col-md-4" v-for="task in tasks" :key="task.id">
        <Card :task="task" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Card from '@/components/CardItem.vue'

const tasks = ref([])

onMounted(async () => {
  try {
    const response = await fetch('https://service-catatan.mejakita.com/catatan')
    const body = await response.json()
    if (body.fulfilled != 1) {
      throw Error(body.message)
    }
    const data = body.data
    tasks.value = data.map((task) => task)
  } catch (error) {
    console.log('err', error)
  }
})
</script>

<style scoped>
/* Anda dapat menambahkan styling kustom di sini jika diperlukan */
</style>
