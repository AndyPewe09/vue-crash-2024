<script setup>
import { LottieAnimation } from 'lottie-web-vue'
import isakuJSON from '@/assets/isaku.json'
import TitleAndButton from '@/components/TitleAndButton.vue'
import '@/assets/css/isaku-styles.css'
import '@/assets/css/font-styles.css'
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
