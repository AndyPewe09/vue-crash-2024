<template>
  <div class="list-group">
    <label class="list-group-item" @click="selectCategory('All')">
      <input class="form-check-input me-1" type="radio" name="category" value="All" checked />
      All
    </label>
    <label
      class="list-group-item"
      v-for="category in categories"
      :key="category"
      @click="selectCategory(category)"
    >
      <input class="form-check-input me-1" type="radio" name="category" :value="category" />
      {{ category }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => [
        'BPJS KESEHATAN',
        'BPJS KETENAGAKERJAAN',
        'Informasi Klaim Kacamata, Tunjangan Nikah, dan Pen',
        'Informasi Mengenai Gaji',
        'Informasi mengenai i.Saku',
        'Informasi mengenai packlaring dan surat keterangan',
        'Informasi mengenai POINKU',
        'Kontak Layanan Karyawan (ILK)',
        'SEPUTAR ESS (Employee Self Service)'
      ]
    }
  },
  methods: {
    selectCategory(category) {
      this.$emit('filterChanged', category)
    }
  }
}
</script>

<style scoped>
.list-group-item {
  cursor: pointer;
}
</style>
