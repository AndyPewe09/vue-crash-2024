<template>
  <div class="d-flex w-100">
    <div class="border-right px-4 py-4" id="sidebar-wrapper">
      <div class="sidebar-heading text-white fs-4 mb-4">HR System</div>
      <div class="list-group list-group-flush">
        <router-link to="/" class="list-group-item list-group-item-action text-white"
          ><i class="fas fa-tachometer-alt"></i> Dashboard</router-link
        >
        <router-link to="/profile" class="list-group-item list-group-item-action text-white"
          ><i class="fas fa-user"></i> Profile</router-link
        >
        <router-link to="/settings" class="list-group-item list-group-item-action text-white"
          ><i class="fas fa-cog"></i> Settings</router-link
        >
        <router-link to="/notes" class="list-group-item list-group-item-action text-white"
          ><i class="fas fa-sticky-note"></i> User Notes</router-link
        >
      </div>
    </div>
    <div id="page-content-wrapper">
      <div class="d-flex align-items-center p-4 pb-0 col-md-12">
        <button class="btn btn-primary w-20 col-md-1" @click="toggleSidebar">Menu</button>
      </div>
      <div class="container-fluid">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      document.getElementById('sidebar-wrapper').classList.toggle('toggled')
    }
  }
}
</script>

<style>
#sidebar-wrapper {
  min-height: 100vh;
  width: 250px;
  margin-left: -250px;
  transition: margin 0.25s ease-out;
  background-color: #102c57;
}

#sidebar-wrapper.toggled {
  margin-left: 0;
}

#page-content-wrapper {
  width: 100%;
}

.container-fluid {
  padding: 20px;
}

.list-group-item {
  background-color: #102c57 !important;
  border: none !important;
  margin-bottom: 8px;
}

.list-group-item:hover {
  background-color: #102c57 !important;
}

.list-group-item i {
  margin-right: 10px;
}

.text-white {
  color: #ecf0f1 !important;
}
</style>
