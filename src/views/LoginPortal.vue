<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import InputText from '@/components/InputText.vue'
import { onMounted, ref } from 'vue'
import { LottieAnimation } from 'lottie-web-vue'
import loginJSON from '@/assets/login.json'

let anim = ref()

onMounted(() => {
  setTimeout(() => {
    anim.value
  }, 500)
})
</script>

<template>
  <div class="container-fluid divAll mx-auto">
    <div class="row" style="position: relative; top: 50%; transform: translateY(-50%)">
      <div class="col d-flex justify-content-center align-items-center">
        <div>
          <LottieAnimation
            :animation-data="loginJSON"
            :auto-play="true"
            :loop="true"
            :speed="1"
            ref="anim"
          />
        </div>
      </div>
      <div class="col d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center">
          <div class="col-md-6 col-12">
            <div class="text-center mb-4">
              <h1 class="poppins-semibold m-0 fs-1">WEB PORTAL</h1>
              <h3 class="poppins-medium m-0 mb-4 fs-4">Human Resource System</h3>
              <h4 class="poppins-regular lh-base m-0 fs-6">
                Selamat Datang di web aplikasi HR Indomaret Group, Silakan masuk dengan
                username/password ESS sebelumnya
              </h4>
            </div>
            <form @submit.prevent="login">
              <div>
                <div class="relative m-auto mw-[380px] pt-4 pb-4">
                  <InputText
                    id="username"
                    type="text"
                    placeholder="username/nik"
                    name="username"
                    size="lg"
                  />
                </div>
                <div>
                  <InputText
                    id="password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    size="lg"
                  />
                </div>
              </div>
              <div class="text-end my-3 nunito-medium">
                <span>Gagal Login? <a href="#" class="text-decoration-none">Lupa Password</a></span>
              </div>
              <div>
                <ButtonComponent
                  class="mt-4 btn-primary rounded-5"
                  variant="gradient"
                  color="success"
                  fullWidth
                  size="lg"
                  type="submit"
                  >Sign in</ButtonComponent
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
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
          username: 'emilys',
          password: 'emilyspass'
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
.divAll {
  position: absolute;
  height: 100vh;
}
.rowALl {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
