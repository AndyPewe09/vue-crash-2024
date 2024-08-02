<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { ref } from 'vue'
import Navbar from '@/components/NavbarHeader.vue'
import SidebarNav from './components/SidebarNav.vue'
// import Sidebar from '@/components/SidebarMenu.vue'

const store = useStore()
const isAuthenticated = computed(() => store.state.isAuthenticated)

// const isAuthenticated = computed(() => !!localStorage.getItem('token'));
const isSidebarOpen = ref(true)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div id="app">
    <Navbar @toggleSidebar="toggleSidebar" v-if="isAuthenticated" />
    <SidebarNav :isOpen="isSidebarOpen" v-if="isAuthenticated">
      <div class="d-flex w-100">
        <div class="px-2">
          <div :class="['content', { 'content-expanded': !isSidebarOpen }]">
            <router-view />
          </div>
        </div>
      </div>
    </SidebarNav>
    <router-view v-else />
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
  padding: 20px;
  transition: margin-left 0.3s;
}

.content-expanded {
  margin-left: 80px;
}

#page-content-wrapper {
  flex: 1;
}

.container-fluid {
  padding: 20px;
}
</style>
