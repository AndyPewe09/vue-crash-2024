<script setup>
import { LottieAnimation } from 'lottie-web-vue'
import isakuJSON from '@/assets/isaku.json'
import TitleAndButton from '@/components/TitleAndButton.vue'
import '@/assets/css/penilaian-styles.css'
import '@/assets/css/font-styles.css'
</script>

<template>
  <div>
    <div class="row">
      <div class="col penilaian">
        <div>
          <TitleAndButton
            title="Penilaian"
            description="Aplikasi yang digunakan untuk menilai kinerja dari karyawan Kontrak menjelang akhir masa kerjanya, sebagai penentuan pembaharuan kontrak atau pengangkatan tetap"
            button1Text="Transaksi Utama"
            button2Text="Report Monitoring"
          />
        </div>
      </div>
      <div class="col penilaian">
        <div class="w-100">
          <LottieAnimation
            :animation-data="isakuJSON"
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
