<script setup>
import CustomButton from '@/components/CustomButton.vue'
</script>

<template>
  <div>
    <h3 class="poppins-semibold m-0">Dashboard</h3>
    <p class="poppins-medium">Welcome to the Dashboard</p>
    <div class="bg-white p-4 rounded-2 shadow-sm p-3 mb-4">
      <div>
        <h3 class="poppins-semibold mb-1">Selamat Pagi Bapak Christian!</h3>
        <h6 class="poppins-light">Kamis, 06 Agustus 2024</h6>
      </div>
      <div class="mt-4">
        <h6 class="poppins-regular">Shortcut</h6>
        <div class="d-flex gap-3 mt-2">
          <CustomButton
            text="Late Approval"
            borderRadius="4px"
            :backgroundColor="''"
            :hasBackground="false"
            buttonType="dark"
            @click="handleButtonClick"
          />
          <CustomButton
            text="Waiting Approval"
            borderRadius="4px"
            :backgroundColor="''"
            :hasBackground="false"
            buttonType="dark"
            @click="handleButtonClick"
          />
          <CustomButton
            text="Draft"
            borderRadius="4px"
            :backgroundColor="''"
            :hasBackground="false"
            buttonType="dark"
            @click="handleButtonClick"
          />
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
  <div>
    <div class="row row-cols-3">
      <div class="col-3">
        <div class="bg-white p-4 rounded-2 shadow-sm p-3 mb-4">
          <div>
            <h6 class="poppins-semibold mb-1">Quick Links</h6>
          </div>
          <div class="mt-3">
            <a href="#" class="text-decoration-none">
              <div class="d-flex gap-2 align-items-center text-black">
                <i class="bi bi-person-circle"></i>
                <h6 class="m-0 poppins-light">Profile</h6>
              </div>
            </a>
            <a href="#" class="text-decoration-none">
              <div class="d-flex gap-2 align-items-center text-black mt-3">
                <i class="bi bi-clock"></i>
                <h6 class="m-0 poppins-light">Attendance Logs</h6>
              </div>
            </a>
            <hr />
            <a href="#" class="text-decoration-none">
              <div class="d-flex gap-2 align-items-center text-black mt-3">
                <i class="bi bi-send-plus"></i>
                <h6 class="m-0 poppins-light">E-Request</h6>
              </div>
            </a>
            <a href="#" class="text-decoration-none">
              <div class="d-flex gap-2 align-items-center text-black mt-3">
                <i class="bi bi-activity"></i>
                <h6 class="m-0 poppins-light">Report Monitoring</h6>
              </div>
            </a>
            <a href="#" class="text-decoration-none">
              <div class="d-flex gap-2 align-items-center text-black mt-3">
                <i class="bi bi-envelope"></i>
                <h6 class="m-0 poppins-light">Management Transaction</h6>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div>
          <div class="bg-white p-4 rounded-2 shadow-sm mb-4 bg-portal text-white">
            <h2 class="poppins-medium mb-0">WEB PORTAL HR</h2>
            <p class="poppins-light fs-6">Beberapa fitur masih dalam tahap development</p>
          </div>
        </div>

        <div></div>
      </div>
      <div class="col-3">
        <div class="bg-white p-4 rounded-2 shadow-sm p-3 mb-4">
          <div>
            <h6 class="poppins-semibold mb-1">Leaved Used</h6>
            <h3 class="m-0">12/12 Days</h3>
            <a href="#" class="text-decoration-underline text-black">request leave</a>
          </div>
          <div class="mt-5">
            <h6 class="poppins-semibold mb-1">In Sick Condition?</h6>
            <a href="#" class="text-decoration-underline text-black">request sick leave</a>
          </div>
          <hr />
          <div class="">
            <a href="#" class="text-decoration-underline text-black">View All</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CardComponent from '@/components/CardComponent.vue'

// export default {
//   name: 'DashboardView',
//   components: {
//     CardComponent
//   }
// }
</script>

<style>
.bg-portal {
  background-image: url('https://portal.hrindomaret.com/portal/img/dashboard4.svg');
}
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
</style>
