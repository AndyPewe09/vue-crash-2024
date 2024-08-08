<script setup>
import { LottieAnimation } from 'lottie-web-vue'
import notifJSON from '@/assets/notif.json'
import TitleAndButton from '@/components/TitleAndButton.vue'
import '@/assets/css/notifikasi-styles.css'
import '@/assets/css/font-styles.css'
</script>

<template>
  <div>
    <div class="row">
      <div class="col notif">
        <div>
          <TitleAndButton
            title="Notification"
            description="Aplikasi yang digunakan untuk menerima notifikasi dari web HRPortal"
            button1Text="Notification Details"
            button2Text="Token Notification"
          />
        </div>
      </div>
      <div class="col notif">
        <div class="w-100">
          <LottieAnimation
            :animation-data="notifJSON"
            :auto-play="true"
            :loop="true"
            :speed="1"
            ref="anim"
          />
        </div>
      </div>
    </div>
  </div>
</template>
