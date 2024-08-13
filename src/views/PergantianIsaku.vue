<script setup>
import '@/assets/css/profilecard-styles.css'
import '@/assets/css/font-styles.css'
</script>

<template>
  <div class="container">
    <div class="card shadow-sm">
      <div class="card-header">
        <h4 class="poppins-semibold">Pergantian No. HP i.saku</h4>
      </div>
      <hr style="margin: 0" />
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="jenisIdentitas" class="form-label poppins-semibold">Jenis Identitas </label>
            <input
              type="text"
              class="form-control"
              id="jenisIdentitas"
              v-model="jenisIdentitas"
              disabled
            />
          </div>

          <div class="mb-3">
            <label for="nomorIdentitas" class="form-label poppins-semibold">Nomor Identitas </label>
            <input
              type="text"
              class="form-control"
              id="nomorIdentitas"
              v-model="nomorIdentitas"
              disabled
            />
          </div>

          <div class="mb-3">
            <label for="mainNumber" class="form-label poppins-semibold">Nomor HP</label>
            <input type="text" class="form-control" id="mainNumber" v-model="mainNumber" disabled />
          </div>

          <div class="mb-3">
            <label for="newMainNumber" class="form-label poppins-semibold">Nomor HP Baru</label>
            <input type="text" class="form-control" id="newMainNumber" v-model="newMainNumber" />
          </div>

          <div class="mb-3">
            <label for="newSecondNumber" class="form-label poppins-semibold"
              >Input Ulang Nomor HP Baru
            </label>
            <input
              type="text"
              class="form-control"
              id="newSecondNumber"
              v-model="newSecondNumber"
            />
          </div>

          <button type="submit" class="btn btn-primary poppins-semibold">Change Number</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jenisIdentitas: 'KTP',
      nomorIdentitas: '3573042907020007',
      mainNumber: '082350636720',
      mainNumberAsWA: false,
      newMainNumber: '',
      newMainNumberAsWA: false,
      newSecondNumber: '',
      officePhone: '',
      officePhoneExt: '',
      newOfficePhone: '',
      newOfficePhoneExt: '',
      newOfficePhoneExtInput: ''
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      console.log('Form submitted')
    }
  }
}
</script>

<style scoped>
input[disabled],
select[disabled] {
  background-color: #e9ecef;
  opacity: 1;
}

@media (max-width: 576px) {
  .card-body {
    padding: 1rem;
  }
}
</style>
