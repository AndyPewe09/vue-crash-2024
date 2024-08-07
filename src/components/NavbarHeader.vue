<template>
  <nav class="navbar bg-light">
    <div class="w-100 px-4 d-flex justify-content-between align-items-center">
      <div>
        <button class="navbar-toggler custom-toggler" type="button" @click="toggleSidebar">
          <span class="navbar-toggler-icon custom-toggler-icon"></span>
        </button>
        <img src="../assets/img/idm-logo.svg" class="img-logo" width="120" height="60" />
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
        <div class="profile-dropdown-container" @click.stop="toggleDropdown">
          <img
            src="../assets/img/user.jpeg"
            width="40"
            height="40"
            class="object-fit-cover rounded-circle cursor-pointer"
          />
          <div v-if="dropdownOpen" class="profile-dropdown">
            <div class="profile-header">
              <img src="../assets/img/user.jpeg" class="profile-pic" />
              <div>
                <h4 class="poppins-bold fs-5">Christian Andy</h4>
                <p class="poppins-light fs-6">2015538269</p>
              </div>
            </div>
            <ul class="profile-menu">
              <li>
                <router-link to="/profile"><i class="bi bi-person"></i> My Account</router-link>
              </li>
              <li>
                <a href="#" class="logout poppins-regular fs-6"
                  ><i class="bi bi-box-arrow-right"></i> Log Out</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits(['toggleSidebar'])

const toggleSidebar = () => {
  emit('toggleSidebar')
}

const dropdownOpen = ref(false)
const router = useRouter()

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const closeDropdown = (event) => {
  if (!event.target.closest('.profile-dropdown-container')) {
    dropdownOpen.value = false
  }
}

const navigateTo = (routeName) => {
  dropdownOpen.value = false
  router.push({ name: routeName })
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<style scoped>
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
.img-logo {
  margin-left: 40px !important;
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

.profile-dropdown-container {
  position: relative;
  display: flex;
  align-items: center;
}

.cursor-pointer {
  cursor: pointer;
}

.profile-dropdown {
  position: absolute;
  top: 50px;
  right: 0;
  width: 300px;
  background: linear-gradient(45deg, #ffffff, #ffffff);
  color: #000;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 20px;
  z-index: 1001;
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.profile-header img.profile-pic {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
}

.profile-header h4,
.profile-header p {
  margin: 0;
  color: #000;
}

.profile-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.profile-menu li {
  margin: 10px 0;
}

.profile-menu li a {
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.profile-menu li a i {
  margin-right: 10px;
}

.profile-menu li a.logout {
  color: #f00;
}
</style>
