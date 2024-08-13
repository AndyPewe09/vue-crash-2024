<template>
  <div class="input-group mb-4">
    <input
      type="text"
      class="form-control"
      placeholder="Apa yang ingin anda cari?"
      v-model="searchQuery"
    />
    <span class="input-group-text"><i class="bi bi-search"></i></span>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String
  },
  computed: {
    searchQuery: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>
