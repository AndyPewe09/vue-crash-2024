<script setup>
import { LottieAnimation } from 'lottie-web-vue'
import teguranJSON from '@/assets/teguran.json'
import TitleAndButton from '@/components/TitleAndButton.vue'
import '@/assets/css/teguran-styles.css'
import '@/assets/css/font-styles.css'
</script>

<template>
  <div>
    <div class="row">
      <div class="col teguran">
        <div>
          <TitleAndButton
            title="Surat Teguran dan Peringatan"
            description="Aplikasi di WEB Portal HR yang digunakan untuk menyampaikan permohonan usulan surat teguran atau surat peringatan atas tindakan indisipliner atau melanggar peraturan, tata tertib, dan prosedur kerja yang berlaku di Perusahaan yang telah dilakukan karyawan"
            button1Text="Daftar Penerimaan"
            button2Text="Daftar Penerimaan"
          />
        </div>
      </div>
      <div class="col teguran">
        <div class="w-100">
          <LottieAnimation
            :animation-data="teguranJSON"
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
