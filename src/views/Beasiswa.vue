<script setup>
import { LottieAnimation } from 'lottie-web-vue'
import isakuJSON from '@/assets/isaku.json'
import TitleAndDesc from '@/components/TitleAndDesc.vue'
import '@/assets/css/beasiswa-styles.css'
import '@/assets/css/font-styles.css'
</script>

<template>
  <div>
    <div class="row">
      <div class="col beasiswa">
        <div>
          <TitleAndDesc
            title="Beasiswa"
            description="Aplikasi yang digunakan untuk mengajukan dan memproses permohonan beasiswa S1 untuk karyawan Indomaret Group"
            button1Text="Daftar Nomor I.Saku"
          />
        </div>
      </div>
      <div class="col beasiswa">
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
