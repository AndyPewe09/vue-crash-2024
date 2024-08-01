<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light border-botttom shadow p-2 px-4 bg-body-tertiary rounded d-flex justify-content-between"
  >
    <div class="d-flex align-items-center">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/img/idm-logo.png"
          alt="Logo"
          width="120"
          height="40"
          class="d-inline-block align-top"
        />
        Web Portal
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto d-flex align-items-center">
          <li class="nav-item">
            <a class="nav-link" href="#">Messages</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Notifications</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img
                src="@/assets/img/idm-logo.svg"
                class="object-fit-cover rounded-circle"
                width="42"
                height="42"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarHeader'
}
</script>

<style scoped>
.navbar {
  margin-bottom: 0;
}
</style>
