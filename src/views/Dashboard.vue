<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h3 class="poppins-semibold m-0">Dashboard</h3>
        <p class="poppins-medium">Welcome to the Dashboard</p>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-12">
        <div class="bg-white p-4 rounded-2 shadow-sm p-3">
          <div>
            <h3 class="poppins-semibold mb-1">Selamat Pagi Bapak Christian!</h3>
            <h6 class="poppins-light">Senin, 12 Agustus 2024</h6>
          </div>
          <div class="mt-4 d-flex flex-wrap gap-3">
            <div class="">
              <CustomButton
                text="Late Approval"
                borderRadius="4px"
                :backgroundColor="''"
                :hasBackground="false"
                buttonType="dark"
                @click="handleButtonClick"
              />
            </div>
            <div class="">
              <CustomButton
                text="Waiting Approval"
                borderRadius="4px"
                :backgroundColor="''"
                :hasBackground="false"
                buttonType="dark"
                @click="handleButtonClick"
              />
            </div>
            <div class="">
              <CustomButton
                text="Draft"
                borderRadius="4px"
                :backgroundColor="''"
                :hasBackground="false"
                buttonType="dark"
                @click="handleButtonClick"
              />
            </div>
            <div class="">
              <CustomButton
                text="More"
                borderRadius="4px"
                :backgroundColor="''"
                :hasBackground="false"
                buttonType="primary"
                @click="handleButtonClick"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-md-3 g-4 mb-2">
      <div class="col-md-3">
        <div class="bg-white p-4 rounded-2 shadow-sm p-3">
          <div>
            <h6 class="poppins-semibold mb-1">Quick Links</h6>
          </div>
          <div class="mt-3">
            <a href="#" class="text-decoration-none d-block mb-3">
              <div class="d-flex align-items-center text-black">
                <i class="bi bi-person-circle"></i>
                <h6 class="m-0 poppins-light ms-2">Profile</h6>
              </div>
            </a>
            <a href="#" class="text-decoration-none d-block mb-3">
              <div class="d-flex align-items-center text-black">
                <i class="bi bi-clock"></i>
                <h6 class="m-0 poppins-light ms-2">Attendance Logs</h6>
              </div>
            </a>
            <hr class="mb-3" />
            <a href="#" class="text-decoration-none d-block mb-3">
              <div class="d-flex align-items-center text-black">
                <i class="bi bi-send-plus"></i>
                <h6 class="m-0 poppins-light ms-2">E-Request</h6>
              </div>
            </a>
            <a href="#" class="text-decoration-none d-block">
              <div class="d-flex align-items-center text-black">
                <i class="bi bi-activity"></i>
                <h6 class="m-0 poppins-light ms-2">Report Monitoring</h6>
              </div>
            </a>
            <a href="#" class="text-decoration-none d-block">
              <div class="d-flex align-items-center text-black mt-3">
                <i class="bi bi-envelope"></i>
                <h6 class="m-0 poppins-light ms-2">Management Transaction</h6>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="bg-white p-4 rounded-2 shadow-sm bg-portal text-white">
          <h2 class="poppins-medium mb-0">WEB PORTAL HR</h2>
          <p class="poppins-light fs-6">Beberapa fitur masih dalam tahap development</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="bg-white p-4 rounded-2 shadow-sm p-3">
          <div>
            <h6 class="poppins-semibold mb-1">Leaved Used</h6>
            <h3 class="m-0">12/12 Days</h3>
            <a href="#" class="text-decoration-underline text-black d-block mt-2">request leave</a>
          </div>
          <div class="mt-5">
            <h6 class="poppins-semibold mb-1">In Sick Condition?</h6>
            <a href="#" class="text-decoration-underline text-black d-block mt-2"
              >request sick leave</a
            >
          </div>
          <hr class="mb-2" />
          <div>
            <a href="#" class="text-decoration-underline text-black d-block">View All</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomButton from '@/components/CustomButton.vue'

const handleButtonClick = () => {
  // Handle button click logic
}
</script>

<style scoped>
/* Importing CSS files */
@import '@/assets/css/dashboard-styles.css';
@import '@/assets/css/font-styles.css';

/* Additional custom styles if needed */
</style>
