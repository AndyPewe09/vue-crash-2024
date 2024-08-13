<script setup>
import { LottieAnimation } from 'lottie-web-vue'
import isakuJSON from '@/assets/isaku.json'
import CustomButton from '@/components/CustomButton.vue'
import '@/assets/css/isaku-styles.css'
import '@/assets/css/font-styles.css'
import TitleAndDesc from '@/components/TitleAndDesc.vue'
</script>

<template>
  <div>
    <div class="row">
      <div class="col isaku">
        <div>
          <TitleAndDesc
            title="I.Saku"
            description="Pastikan nomor di akun i.saku Anda sudah Full Service dan terdaftar di Portal untuk
              menikmati benefit karyawan Indomaret Group"
          />
          <div class="d-flex justify-content-center align-items-center gap-3">
            <CustomButton
              text="Daftar Nomor i.saku"
              borderRadius="4px"
              :backgroundColor="'#000'"
              :hasBackground="false"
              buttonType="primary"
              route="/daftar"
            />
            <CustomButton
              text="Ganti nomor i.saku"
              borderRadius="4px"
              :backgroundColor="''"
              :hasBackground="false"
              buttonType="primary"
              route="/isaku/pergantianIsaku"
            />
          </div>
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
