<script setup>
import { LottieAnimation } from 'lottie-web-vue'
import isakuJSON from '@/assets/isaku.json'
import ButtonComponent from '@/components/ButtonComponent.vue'
import TitleAndButton from '@/components/TitleAndButton.vue'
</script>

<template>
  <div>
    <div class="row">
      <div class="col isaku">
        <div>
          <TitleAndButton
            title="I.Saku"
            description="Pastikan nomor di akun i.saku Anda sudah Full Service dan terdaftar di Portal untuk
              menikmati benefit karyawan Indomaret Group"
            button1Text="Daftar Nomor I.Saku"
            button2Text="Ganti Nomor I.Saku"
          />
        </div>
      </div>
      <div class="col isaku">
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
