<template>
  <div class="container-fluid p-0">
    <div class="row g-0 bg-white rounded-4">
      <div class="col-md-3 col-lg-2 border-end">
        <div class="d-flex flex-column p-3">
          <ul class="nav nav-pills flex-column mb-auto">
            <li v-for="item in menuItems" :key="item.name" class="nav-item">
              <a
                href="#"
                class="nav-link"
                :class="{ active: item.name === activeMenuItem }"
                @click="setActiveMenuItem(item.name)"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-9 col-lg-10 p-4">
        <component :is="activeMenuItemComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import MyProfile from '@/views/ProfileUser.vue'
import ChangePass from '@/views/ChangePassword.vue'
import ChangeEmail from '@/views/ChangeEmail.vue'
import ChangeNumber from '@/views/ChangeNumber.vue'

export default {
  components: {
    MyProfile,
    ChangePass,
    ChangeEmail,
    ChangeNumber
  },
  data() {
    return {
      menuItems: [
        { name: 'MyProfile', label: 'My Profile' },
        { name: 'ChangePass', label: 'Change Password' },
        { name: 'ChangeEmail', label: 'Change Email' },
        { name: 'ChangeNumber', label: 'Change Number' }
      ],
      activeMenuItem: 'MyProfile'
    }
  },
  computed: {
    activeMenuItemComponent() {
      return this.activeMenuItem
    }
  },
  methods: {
    setActiveMenuItem(menuItem) {
      this.activeMenuItem = menuItem
    }
  }
}
</script>

<style scoped>
.nav-link {
  color: #333;
  padding: 10px 15px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.nav-link:hover {
  background-color: #e9ecef;
  color: #007bff;
}

.nav-link.active {
  background-color: #007bff;
  color: #fff;
}

.container-fluid {
  height: 100vh;
  background: #f5f7fa;
}

.bg-light {
  background-color: #f8f9fa !important;
}

.border-end {
  border-right: 1px solid #e0e0e0 !important;
}

.p-4 {
  padding: 20px !important;
}
</style>
