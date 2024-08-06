<template>
  <div class="d-flex justify-content-between align-items-center mt-3">
    <div>
      <label for="itemsPerPage" class="form-label">Show</label>
      <select
        id="itemsPerPage"
        class="form-select"
        :value="itemsPerPage"
        @change="onItemsPerPageChanged"
      >
        <option v-for="option in [5, 10, 15, 20]" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <nav aria-label="FAQ pagination">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click.prevent="changePage(1)">«</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">‹</a>
        </li>
        <li
          class="page-item"
          v-for="page in totalPages"
          :key="page"
          :class="{ active: currentPage === page }"
        >
          <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">›</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click.prevent="changePage(totalPages)">»</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 5
    }
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit('pageChanged', page)
      }
    },
    onItemsPerPageChanged(event) {
      this.$emit('update:itemsPerPage', Number(event.target.value))
    }
  }
}
</script>
