<template>
  <nav class="navbar bg-light">
    <div class="w-100 px-4 d-flex justify-content-between align-items-center">
      <div>
        <button class="navbar-toggler custom-toggler" type="button" @click="toggleSidebar">
          <span class="navbar-toggler-icon custom-toggler-icon"></span>
        </button>
        <img src="../assets/img/idm-logo.svg" class="ms-4" width="120" height="60" />
      </div>

      <div class="d-flex align-items-center gap-4">
        <div class="d-flex gap-4">
          <a href="#">
            <i class="bi bi-envelope-open"></i>
          </a>
          <a href="#">
            <i class="bi bi-bell-fill"></i>
          </a>
        </div>
        <img
          src="../assets/img/user.jpeg"
          width="40"
          height="40"
          class="object-fit-cover rounded-circle"
        />
      </div>
    </div>
  </nav>
</template>

<script setup>
const emit = defineEmits(['toggleSidebar'])

const toggleSidebar = () => {
  emit('toggleSidebar')
}
</script>

<style scoped>
.navbar {
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 100px -20px rgb(209, 209, 209);
  border-color: transparent;
}
.navbar i {
  font-size: 1.2rem;
  transition: margin-right 0.3s;
  color: #0d1282;
}
.custom-toggler {
  border-color: transparent;
  padding: 8px 0px;
  margin-right: 8px;
}

.custom-toggler:focus,
.custom-toggler:active {
  border-color: transparent;
  box-shadow: none;
}

.custom-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%280,0,0,1%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
</style>
