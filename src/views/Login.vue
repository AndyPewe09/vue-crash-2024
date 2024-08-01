<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username:</label>
        <input
          type="text"
          v-model="username"
          class="form-control"
          id="username"
          placeholder="emilys"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          v-model="password"
          class="form-control"
          id="password"
          placeholder="emilyspass"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['isAuthenticated'])
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('https://dummyjson.com/auth/login', {
          username: this.username,
          password: this.password
        })
        const token = response.data.token

        // Save the token to localStorage or Vuex store
        localStorage.setItem('token', token)

        // Redirect to the dashboard
        window.location.href = '/dashboard'
      } catch (error) {
        console.error('Login failed:', error)
        alert('Login failed. Please check your credentials.')
      }
    }
  }
}
</script>

<style>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
}

.btn {
  width: 100%;
}
</style>
