<template>
  <div :class="['sidebar', { 'sidebar-collapsed': !isOpen }]">
    <div class="sidebar-header">
      <h2 v-if="isOpen">Web Portal</h2>
    </div>
    <ul class="nav flex-column">
      <li class="nav-item" v-for="item in menuItems" :key="item.name">
        <a class="nav-link" href="#">
          <div class="nav-link-content">
            <i :class="item.icon"></i>
            <span v-if="isOpen">{{ item.name }}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['isOpen'])

const menuItems = ref([
  { name: 'Dashboard', icon: 'bi bi-columns-gap' },
  { name: 'i.saku', icon: 'bi bi-phone' },
  { name: 'Penilaian', icon: 'bi bi-patch-check' },
  { name: 'Beasiswa', icon: 'bi bi-buildings' },
  { name: 'Notifikasi', icon: 'bi bi-bell' },
  { name: 'Pengumuman', icon: 'bi bi-newspaper' },
  { name: 'Peraturan Perusahaan', icon: 'bi bi-newspaper' },
  { name: 'FAQ', icon: 'bi bi-question-circle' },
  { name: 'Teguran dan Peringatan', icon: 'bi bi-exclamation-square' },
  { name: 'Bantuan Pendidikan', icon: 'bi bi-vector-pen' }
])
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #fff;
  transition: width 0.3s;
}

.sidebar-collapsed {
  width: 80px;
}

.sidebar-header {
  display: flex;
  align-items: center;
  padding: 20px;
  margin-top: 16px;
  padding-bottom: 10px;
}

.sidebar-header h2 {
  font-size: 24px;
}

.nav-link {
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-start;
  transition:
    padding 0.3s,
    justify-content 0.3s;
}

.nav-link-content {
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 16px;
}

.nav-link-content span {
  color: #0d1282;
  margin-left: 16px;
}

.nav-link i {
  font-size: 1.5rem;
  transition: margin-right 0.3s;
  color: #0d1282;
}

.sidebar-collapsed .nav-link span {
  display: none;
}

.sidebar-collapsed .nav-link {
  padding: 10px;
  justify-content: center;
}

.sidebar-collapsed .nav-link i {
  margin-right: 0;
}
</style>
