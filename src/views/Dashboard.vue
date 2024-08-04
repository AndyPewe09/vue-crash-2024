<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome to the Dashboard</p>
    <card-component
      title="Selamat Siang Bapak Christian!"
      date="Kamis, 01 Agustus 2024"
      :buttons="[
        { label: 'Late Approval', action: 'lateApproval' },
        { label: 'Waiting Approval', action: 'waitingApproval' },
        { label: 'Draft', action: 'draft' },
        { label: 'More', action: 'more' }
      ]"
    ></card-component>
  </div>
  <div>
    <div class="row row-cols-3">
      <div class="col">
        <card-component title="Quick Links" date="Kamis, 01 Agustus 2024"> </card-component>
      </div>
      <div class="col">
        <card-component
          title="WEB PORTAL HR"
          date="Beberapa Fitur Masih Dalam Perbaikan"
        ></card-component>
      </div>
      <div class="col">
        <card-component title="Leave Used" date="Kamis, 01 Agustus 2024"></card-component>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue'

export default {
  name: 'DashboardView',
  components: {
    CardComponent
  }
}
</script>
