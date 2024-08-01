<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Navbar from '@/components/NavbarHeader.vue'
import Sidebar from '@/components/SidebarMenu.vue'

const store = useStore()
const isAuthenticated = computed(() => store.state.isAuthenticated)

// const isAuthenticated = computed(() => !!localStorage.getItem('token'));
</script>

<template>
  <div id="app">
    <Navbar v-if="isAuthenticated" />
    <div class="d-flex w-100">
      <Sidebar v-if="isAuthenticated">
        <div class="px-2">
          <router-view></router-view>
        </div>
      </Sidebar>
      <router-view v-else></router-view>
    </div>
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
}

#page-content-wrapper {
  flex: 1;
}

.container-fluid {
  padding: 20px;
}
</style>
