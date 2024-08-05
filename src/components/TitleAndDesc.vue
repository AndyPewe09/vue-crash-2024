<template>
  <div class="custom-card">
    <h1 class="poppins-semibold fs-1">{{ title }}</h1>
    <p class="poppins-ligth">{{ description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.custom-card {
  text-align: center;
  padding: 20px;
}

.custom-card h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.custom-card p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.button-container .btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.button-container .btn:hover {
  background-color: #0056b3;
}

.nunito-medium {
  font-family: 'Nunito ', sans-serif !important;
  font-weight: 400;
}
.poppins-light {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: normal;
}

.poppins-regular {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
}
.poppins-medium {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 500;
  font-style: normal;
}
.poppins-semibold {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 600;
  font-style: normal;
}
.poppins-bold {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700;
  font-style: normal;
}
.poppins-black {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 900;
  font-style: normal;
}
</style>
