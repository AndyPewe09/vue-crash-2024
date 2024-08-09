<script setup>
import '@/assets/css/profilecard-styles.css'
import '@/assets/css/font-styles.css'
</script>

<template>
  <div class="container">
    <div class="card shadow-sm">
      <div class="card-header">
        <h4 class="poppins-semibold">Change Email Address</h4>
      </div>
      <hr style="margin: 0" />
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="officeEmail" class="form-label poppins-semibold">Office Mail</label>
            <input
              type="email"
              class="form-control"
              id="officeEmail"
              v-model="officeEmail"
              disabled
            />
          </div>

          <div class="mb-3">
            <label for="newOfficeEmail" class="form-label poppins-semibold">NEW! Office Mail</label>
            <input type="email" class="form-control" id="newOfficeEmail" v-model="newOfficeEmail" />
          </div>

          <div class="mb-3">
            <label for="personalEmail" class="form-label poppins-semibold">Personal Mail</label>
            <input
              type="email"
              class="form-control"
              id="personalEmail"
              v-model="personalEmail"
              disabled
            />
          </div>

          <div class="mb-3">
            <label for="newPersonalEmail" class="form-label">NEW! Personal Mail</label>
            <input
              type="email"
              class="form-control"
              id="newPersonalEmail"
              v-model="newPersonalEmail"
            />
          </div>

          <button type="submit" class="btn btn-primary">Change Email</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      officeEmail: 'office@example.com',
      newOfficeEmail: '',
      personalEmail: 'personal@example.com',
      newPersonalEmail: ''
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
input[disabled] {
  background-color: #e9ecef;
  opacity: 1;
}
</style>
