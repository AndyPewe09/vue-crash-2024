<script setup>
import '@/assets/css/changepass-styles.css'
import '@/assets/css/font-styles.css'
</script>

<template>
  <div class="changepass-card">
    <div class="changepass-header">
      <div class="container">
        <div class="card">
          <div class="card-header">
            <h4>Change Portal Password</h4>
          </div>
          <hr style="margin: 0" />
          <div class="card-body">
            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <label for="oldPassword" class="form-label">Old Password</label>
                <div class="input-group">
                  <input
                    type="password"
                    class="form-control"
                    id="oldPassword"
                    v-model="oldPassword"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="toggleVisibility('oldPassword')"
                  >
                    <i :class="oldPasswordVisible ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                  </button>
                </div>
              </div>

              <div class="mb-3">
                <label for="newPassword" class="form-label">New Password</label>
                <div class="input-group">
                  <input
                    type="password"
                    class="form-control"
                    id="newPassword"
                    v-model="newPassword"
                    @input="validatePassword"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="toggleVisibility('newPassword')"
                  >
                    <i :class="newPasswordVisible ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                  </button>
                </div>
                <div class="password-requirements">
                  <p
                    :class="{
                      'text-danger': !passwordCriteria.uppercase,
                      'text-success': passwordCriteria.uppercase
                    }"
                  >
                    <i
                      :class="{
                        'bi bi-x-circle': !passwordCriteria.uppercase,
                        'bi bi-check-circle': passwordCriteria.uppercase
                      }"
                    ></i>
                    one uppercase character
                  </p>
                  <p
                    :class="{
                      'text-danger': !passwordCriteria.lowercase,
                      'text-success': passwordCriteria.lowercase
                    }"
                  >
                    <i
                      :class="{
                        'bi bi-x-circle': !passwordCriteria.lowercase,
                        'bi bi-check-circle': passwordCriteria.lowercase
                      }"
                    ></i>
                    one lowercase character
                  </p>
                  <p
                    :class="{
                      'text-danger': !passwordCriteria.number,
                      'text-success': passwordCriteria.number
                    }"
                  >
                    <i
                      :class="{
                        'bi bi-x-circle': !passwordCriteria.number,
                        'bi bi-check-circle': passwordCriteria.number
                      }"
                    ></i>
                    one number
                  </p>
                  <p
                    :class="{
                      'text-danger': !passwordCriteria.minLength,
                      'text-success': passwordCriteria.minLength
                    }"
                  >
                    <i
                      :class="{
                        'bi bi-x-circle': !passwordCriteria.minLength,
                        'bi bi-check-circle': passwordCriteria.minLength
                      }"
                    ></i>
                    8 character minimum
                  </p>
                </div>
              </div>

              <div class="mb-3">
                <label for="confirmPassword" class="form-label">Re-input New Password</label>
                <div class="input-group">
                  <input
                    type="password"
                    class="form-control"
                    id="confirmPassword"
                    v-model="confirmPassword"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="toggleVisibility('confirmPassword')"
                  >
                    <i :class="confirmPasswordVisible ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                  </button>
                </div>
              </div>

              <button type="submit" class="btn btn-primary">Change Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      oldPasswordVisible: false,
      newPasswordVisible: false,
      confirmPasswordVisible: false,
      passwordCriteria: {
        uppercase: false,
        lowercase: false,
        number: false,
        minLength: false
      }
    }
  },
  methods: {
    toggleVisibility(field) {
      if (field === 'oldPassword') {
        this.oldPasswordVisible = !this.oldPasswordVisible
        document.getElementById('oldPassword').type = this.oldPasswordVisible ? 'text' : 'password'
      } else if (field === 'newPassword') {
        this.newPasswordVisible = !this.newPasswordVisible
        document.getElementById('newPassword').type = this.newPasswordVisible ? 'text' : 'password'
      } else if (field === 'confirmPassword') {
        this.confirmPasswordVisible = !this.confirmPasswordVisible
        document.getElementById('confirmPassword').type = this.confirmPasswordVisible
          ? 'text'
          : 'password'
      }
    },
    validatePassword() {
      const password = this.newPassword
      this.passwordCriteria.uppercase = /[A-Z]/.test(password)
      this.passwordCriteria.lowercase = /[a-z]/.test(password)
      this.passwordCriteria.number = /[0-9]/.test(password)
      this.passwordCriteria.minLength = password.length >= 8
    },
    handleSubmit() {
      // Handle form submission logic here
      console.log('Form submitted')
    }
  }
}
</script>

<style scoped>
.password-requirements {
  margin-top: 10px;
}

.password-requirements p {
  margin: 0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

.password-requirements i {
  margin-right: 5px;
}
</style>
