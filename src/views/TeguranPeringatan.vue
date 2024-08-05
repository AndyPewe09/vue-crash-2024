<script setup>
import { LottieAnimation } from 'lottie-web-vue'
import teguranJSON from '@/assets/teguran.json'
import TitleAndButton from '@/components/TitleAndButton.vue'
</script>

<template>
  <div>
    <div class="row">
      <div class="col isaku">
        <div>
          <TitleAndButton
            title="Surat Teguran dan Peringatan"
            description="Aplikasi di WEB Portal HR yang digunakan untuk menyampaikan permohonan usulan surat teguran atau surat peringatan atas tindakan indisipliner atau melanggar peraturan, tata tertib, dan prosedur kerja yang berlaku di Perusahaan yang telah dilakukan karyawan"
            button1Text="Daftar Penerimaan"
            button2Text="Daftar Penerimaan"
          />
        </div>
      </div>
      <div class="col isaku">
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
