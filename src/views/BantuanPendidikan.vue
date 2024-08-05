<script setup>
import { LottieAnimation } from 'lottie-web-vue'
import champJSON from '@/assets/champ.json'
import TitleAndButton from '@/components/TitleAndButton.vue'
</script>

<template>
  <div>
    <div class="row">
      <div class="col isaku">
        <div>
          <TitleAndButton
            title="Bantuan Pendidikan"
            description="Aplikasi yang digunakan untuk pengajuan bantuan pendidikan SD, SMP, SMA/SMK, D3, dan D4/S1 untuk karyawan dan anak karyawan Indomaret Group"
            button1Text="Pengajuan Bantuan"
            button2Text="Status Pengajuan"
          />
        </div>
      </div>
      <div class="col isaku">
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

<style>
.isaku {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 0 20px !important;
}
.btn-comp {
  width: 150px !important;
  border-radius: 8px !important;
}
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
</style>
