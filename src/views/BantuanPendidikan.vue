<script setup>
import { LottieAnimation } from 'lottie-web-vue'
import champJSON from '@/assets/champ.json'
import TitleAndButton from '@/components/TitleAndButton.vue'
import '@/assets/css/bapen-styles.css'
import '@/assets/css/font-styles.css'
</script>

<template>
  <div>
    <div class="row">
      <div class="col bapen">
        <div>
          <TitleAndButton
            title="Bantuan Pendidikan"
            description="Aplikasi yang digunakan untuk pengajuan bantuan pendidikan SD, SMP, SMA/SMK, D3, dan D4/S1 untuk karyawan dan anak karyawan Indomaret Group"
            button1Text="Pengajuan Bantuan"
            button2Text="Status Pengajuan"
          />
        </div>
      </div>
      <div class="col bapen">
        <div class="w-100">
          <LottieAnimation
            :animation-data="champJSON"
            :auto-play="true"
            :loop="true"
            :speed="0.8"
            ref="anim"
          />
        </div>
      </div>
    </div>
  </div>
</template>
