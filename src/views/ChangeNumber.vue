<script setup>
import '@/assets/css/profilecard-styles.css'
import '@/assets/css/font-styles.css'
</script>

<template>
  <div class="container">
    <div class="card shadow-sm">
      <div class="card-header">
        <h4 class="poppins-semibold">Change Number</h4>
      </div>
      <hr style="margin: 0" />
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="isakuNumber" class="form-label poppins-semibold">No. HP iSaku</label>
            <input
              type="text"
              class="form-control"
              id="isakuNumber"
              v-model="isakuNumber"
              disabled
            />
          </div>

          <div class="mb-3">
            <label for="mainNumber" class="form-label poppins-semibold">No. HP Utama</label>
            <input type="text" class="form-control" id="mainNumber" v-model="mainNumber" disabled />
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="mainNumberAsWA"
                v-model="mainNumberAsWA"
              />
              <label class="form-check-label poppins-regular" for="mainNumberAsWA">
                Tambahkan No. HP Utama Sebagai No. WA
              </label>
            </div>
          </div>

          <div class="mb-3">
            <label for="newMainNumber" class="form-label poppins-semibold">No. HP Utama Baru</label>
            <input type="text" class="form-control" id="newMainNumber" v-model="newMainNumber" />
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="newMainNumberAsWA"
                v-model="newMainNumberAsWA"
              />
              <label class="form-check-label poppins-regular" for="newMainNumberAsWA">
                Tambahkan No. HP 2 Sebagai No. WA
              </label>
            </div>
          </div>

          <div class="mb-3">
            <label for="newSecondNumber" class="form-label poppins-semibold">No. HP 2 Baru</label>
            <input
              type="text"
              class="form-control"
              id="newSecondNumber"
              v-model="newSecondNumber"
            />
          </div>

          <div class="mb-3">
            <label for="officePhone" class="form-label poppins-semibold">No. Telp. Kantor</label>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                id="officePhone"
                v-model="officePhone"
                disabled
              />
              <span class="input-group-text poppins-semibold">Ext.</span>
              <input type="text" class="form-control" v-model="officePhoneExt" disabled />
            </div>
          </div>

          <div class="mb-3">
            <label for="newOfficePhone" class="form-label poppins-semibold"
              >No. Telp. Kantor Baru</label
            >
            <select
              class="form-select poppins-semibold"
              id="newOfficePhone"
              v-model="newOfficePhone"
            >
              <option>PT INDOMARCO PRISMATAMA</option>
            </select>
            <div class="form-text text-danger poppins-semibold">
              *Tidak semua unit memiliki no. telp. kantor
            </div>
          </div>

          <div class="mb-3">
            <label for="newOfficePhoneExt" class="form-label poppins-semibold"
              >Pilih No. Kantor</label
            >
            <div class="input-group">
              <select
                class="form-select poppins-semibold"
                id="newOfficePhoneExt"
                v-model="newOfficePhoneExt"
              >
                <option>PT INDOMARCO PRISMATAMA</option>
              </select>
              <span class="input-group-text poppins-semibold">Ext.</span>
              <input type="number" class="form-control" v-model="newOfficePhoneExtInput" />
            </div>
            <div class="form-text text-danger poppins-semibold">
              *Silakan dapat dirubah sesuai kondisi lokasi kerja Anda saat ini dan dapat dikosongkan
              apabila Anda tidak memiliki No. Ext
            </div>
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
      isakuNumber: '082350636720',
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
