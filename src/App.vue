<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { ref } from 'vue'
import Navbar from '@/components/NavbarHeader.vue'
import SidebarNav from '@/components/SidebarNav.vue'

const store = useStore()
const isAuthenticated = computed(() => store.state.isAuthenticated)
const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div id="app">
    <Navbar @toggleSidebar="toggleSidebar" v-if="isAuthenticated" />
    <div class="main-content">
      <SidebarNav :isOpen="isSidebarOpen" v-if="isAuthenticated" />
      <div :class="['content', { '': isSidebarOpen && isAuthenticated }]">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
}

.main-content {
  display: flex;
  flex-grow: 1;
}

.content {
  flex-grow: 1;
  padding: 20px;
  transition: margin-left 0.3s;
}

.content-expanded {
  margin-left: 200px; /* Adjust this value as needed */
}

#page-content-wrapper {
  flex: 1;
}

.container-fluid {
  padding: 20px;
}
</style>
