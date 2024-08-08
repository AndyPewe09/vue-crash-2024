<template>
  <div class="">
    <h1>Frequently Asked Questions</h1>
    <div class="row mt-3">
      <div class="col-md-4">
        <label for="category-filter" class="form-label">Filter by Category</label>
        <FAQFilter @filterChanged="onFilterChanged" />
      </div>
      <div class="col-md-8">
        <div class="d-flex justify-content-between mt-4">
          <input
            type="text"
            class="form-control"
            placeholder="Cari kata kunci disini"
            v-model="searchQuery"
          />
        </div>
        <FAQList :faqs="filteredFaqs" />
        <FAQPagination
          :totalPages="totalPages"
          :currentPage="currentPage"
          :itemsPerPage="itemsPerPage"
          @pageChanged="onPageChanged"
          @update:itemsPerPage="updateItemsPerPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import FAQFilter from '../components/FAQFilter.vue'
import FAQList from '../components/FAQList.vue'
import FAQPagination from '../components/FAQPagination.vue'
import '@/assets/css/faq-styles.css'
import '@/assets/css/font-styles.css'

const faqs = [
  {
    category: 'BPJS KESEHATAN',
    question: 'SYARAT PENDAFTARAN BPJS KESEHATAN BAYI BARU LAHIR',
    answer: `
      <ul>
        <li>Fotocopy KTP</li>
        <li>Fotocopy KK (harus jelas)</li>
        <li>Fotocopy Kartu BPJS Kesehatan Kepala Keluarga/Karyawan</li>
        <li>Surat Keterangan Lahir dari RS/Puskesmas</li>
        <li>Datang ke Kantor BPJS Kesehatan terdekat dengan membawa berkas tsb</li>
        <li>Maksimal 3 hari kerja setelah bayi lahir, jika terlambat lapor maka harus segera mengurus untuk update KK, KIA, Akte Lahir Anak, dan berkas bisa langsung diserahkan ke HRD di jam kerja</li>
      </ul>
    `
  },
  {
    category: 'BPJS KESEHATAN',
    question: 'SYARAT PENDAFTARAN BPJS KESEHATAN BAYI BARU LAHIR',
    answer: `
      <ul>
        <li>Fotocopy KTP</li>
        <li>Fotocopy KK (harus jelas)</li>
        <li>Fotocopy Kartu BPJS Kesehatan Kepala Keluarga/Karyawan</li>
        <li>Surat Keterangan Lahir dari RS/Puskesmas</li>
        <li>Datang ke Kantor BPJS Kesehatan terdekat dengan membawa berkas tsb</li>
        <li>Maksimal 3 hari kerja setelah bayi lahir, jika terlambat lapor maka harus segera mengurus untuk update KK, KIA, Akte Lahir Anak, dan berkas bisa langsung diserahkan ke HRD di jam kerja</li>
      </ul>
    `
  },
  {
    category: 'BPJS KETENAGAKERJAAN',
    question: 'SYARAT PENDAFTARAN BPJS KETENAGAKERJAAN BAYI BARU LAHIR',
    answer: `
      <ul>
        <li>Fotocopy KTP</li>
        <li>Fotocopy KK (harus jelas)</li>
        <li>Fotocopy Kartu BPJS Kesehatan Kepala Keluarga/Karyawan</li>
        <li>Surat Keterangan Lahir dari RS/Puskesmas</li>
        <li>Datang ke Kantor BPJS Kesehatan terdekat dengan membawa berkas tsb</li>
        <li>Maksimal 3 hari kerja setelah bayi lahir, jika terlambat lapor maka harus segera mengurus untuk update KK, KIA, Akte Lahir Anak, dan berkas bisa langsung diserahkan ke HRD di jam kerja</li>
      </ul>
    `
  },
  {
    category: 'Informasi Klaim Kacamata, Tunjangan Nikah, dan Pen',
    question: 'SYARAT PENDAFTARAN BPJS KESEHATAN BAYI BARU LAHIR',
    answer: `
      <ul>
        <li>Fotocopy KTP</li>
        <li>Fotocopy KK (harus jelas)</li>
        <li>Fotocopy Kartu BPJS Kesehatan Kepala Keluarga/Karyawan</li>
        <li>Surat Keterangan Lahir dari RS/Puskesmas</li>
        <li>Datang ke Kantor BPJS Kesehatan terdekat dengan membawa berkas tsb</li>
        <li>Maksimal 3 hari kerja setelah bayi lahir, jika terlambat lapor maka harus segera mengurus untuk update KK, KIA, Akte Lahir Anak, dan berkas bisa langsung diserahkan ke HRD di jam kerja</li>
      </ul>
    `
  },
  {
    category: 'Informasi Klaim Kacamata, Tunjangan Nikah, dan Pen',
    question: 'SYARAT PENDAFTARAN BPJS KESEHATAN BAYI BARU LAHIR',
    answer: `
      <ul>
        <li>Fotocopy KTP</li>
        <li>Fotocopy KK (harus jelas)</li>
        <li>Fotocopy Kartu BPJS Kesehatan Kepala Keluarga/Karyawan</li>
        <li>Surat Keterangan Lahir dari RS/Puskesmas</li>
        <li>Datang ke Kantor BPJS Kesehatan terdekat dengan membawa berkas tsb</li>
        <li>Maksimal 3 hari kerja setelah bayi lahir, jika terlambat lapor maka harus segera mengurus untuk update KK, KIA, Akte Lahir Anak, dan berkas bisa langsung diserahkan ke HRD di jam kerja</li>
      </ul>
    `
  },
  {
    category: 'Informasi Klaim Kacamata, Tunjangan Nikah, dan Pen',
    question: 'SYARAT PENDAFTARAN BPJS KESEHATAN BAYI BARU LAHIR',
    answer: `
      <ul>
        <li>Fotocopy KTP</li>
        <li>Fotocopy KK (harus jelas)</li>
        <li>Fotocopy Kartu BPJS Kesehatan Kepala Keluarga/Karyawan</li>
        <li>Surat Keterangan Lahir dari RS/Puskesmas</li>
        <li>Datang ke Kantor BPJS Kesehatan terdekat dengan membawa berkas tsb</li>
        <li>Maksimal 3 hari kerja setelah bayi lahir, jika terlambat lapor maka harus segera mengurus untuk update KK, KIA, Akte Lahir Anak, dan berkas bisa langsung diserahkan ke HRD di jam kerja</li>
      </ul>
    `
  },
  {
    category: 'Informasi Klaim Kacamata, Tunjangan Nikah, dan Pen',
    question: 'SYARAT PENDAFTARAN BPJS KESEHATAN BAYI BARU LAHIR',
    answer: `
      <ul>
        <li>Fotocopy KTP</li>
        <li>Fotocopy KK (harus jelas)</li>
        <li>Fotocopy Kartu BPJS Kesehatan Kepala Keluarga/Karyawan</li>
        <li>Surat Keterangan Lahir dari RS/Puskesmas</li>
        <li>Datang ke Kantor BPJS Kesehatan terdekat dengan membawa berkas tsb</li>
        <li>Maksimal 3 hari kerja setelah bayi lahir, jika terlambat lapor maka harus segera mengurus untuk update KK, KIA, Akte Lahir Anak, dan berkas bisa langsung diserahkan ke HRD di jam kerja</li>
      </ul>
    `
  },
  {
    category: 'Informasi Klaim Kacamata, Tunjangan Nikah, dan Pen',
    question: 'SYARAT PENDAFTARAN BPJS KESEHATAN BAYI BARU LAHIR',
    answer: `
      <ul>
        <li>Fotocopy KTP</li>
        <li>Fotocopy KK (harus jelas)</li>
        <li>Fotocopy Kartu BPJS Kesehatan Kepala Keluarga/Karyawan</li>
        <li>Surat Keterangan Lahir dari RS/Puskesmas</li>
        <li>Datang ke Kantor BPJS Kesehatan terdekat dengan membawa berkas tsb</li>
        <li>Maksimal 3 hari kerja setelah bayi lahir, jika terlambat lapor maka harus segera mengurus untuk update KK, KIA, Akte Lahir Anak, dan berkas bisa langsung diserahkan ke HRD di jam kerja</li>
      </ul>
    `
  },
  {
    category: 'Informasi Klaim Kacamata, Tunjangan Nikah, dan Pen',
    question: 'SYARAT PENDAFTARAN BPJS KESEHATAN BAYI BARU LAHIR',
    answer: `
      <ul>
        <li>Fotocopy KTP</li>
        <li>Fotocopy KK (harus jelas)</li>
        <li>Fotocopy Kartu BPJS Kesehatan Kepala Keluarga/Karyawan</li>
        <li>Surat Keterangan Lahir dari RS/Puskesmas</li>
        <li>Datang ke Kantor BPJS Kesehatan terdekat dengan membawa berkas tsb</li>
        <li>Maksimal 3 hari kerja setelah bayi lahir, jika terlambat lapor maka harus segera mengurus untuk update KK, KIA, Akte Lahir Anak, dan berkas bisa langsung diserahkan ke HRD di jam kerja</li>
      </ul>
    `
  },
  {
    category: 'Informasi Klaim Kacamata, Tunjangan Nikah, dan Pen',
    question: 'SYARAT PENDAFTARAN BPJS KESEHATAN BAYI BARU LAHIR',
    answer: `
      <ul>
        <li>Fotocopy KTP</li>
        <li>Fotocopy KK (harus jelas)</li>
        <li>Fotocopy Kartu BPJS Kesehatan Kepala Keluarga/Karyawan</li>
        <li>Surat Keterangan Lahir dari RS/Puskesmas</li>
        <li>Datang ke Kantor BPJS Kesehatan terdekat dengan membawa berkas tsb</li>
        <li>Maksimal 3 hari kerja setelah bayi lahir, jika terlambat lapor maka harus segera mengurus untuk update KK, KIA, Akte Lahir Anak, dan berkas bisa langsung diserahkan ke HRD di jam kerja</li>
      </ul>
    `
  }
  // Add more FAQs here
]

export default {
  components: {
    FAQFilter,
    FAQList,
    FAQPagination
  },
  setup() {
    const searchQuery = ref('')
    const selectedCategory = ref('All')
    const currentPage = ref(1)
    const itemsPerPage = ref(5)

    const filteredFaqs = computed(() => {
      let filtered = faqs.filter((faq) => {
        const matchesCategory =
          selectedCategory.value === 'All' || faq.category === selectedCategory.value
        const matchesQuery = faq.question.toLowerCase().includes(searchQuery.value.toLowerCase())
        return matchesCategory && matchesQuery
      })
      const startIndex = (currentPage.value - 1) * itemsPerPage.value
      return filtered.slice(startIndex, startIndex + itemsPerPage.value)
    })

    const totalPages = computed(() => Math.ceil(faqs.length / itemsPerPage.value))

    const onFilterChanged = (newCategory) => {
      selectedCategory.value = newCategory
      currentPage.value = 1
    }

    const onPageChanged = (newPage) => {
      currentPage.value = newPage
    }

    const updateItemsPerPage = (newItemsPerPage) => {
      itemsPerPage.value = newItemsPerPage
      currentPage.value = 1
    }

    return {
      searchQuery,
      filteredFaqs,
      totalPages,
      currentPage,
      itemsPerPage,
      onFilterChanged,
      onPageChanged,
      updateItemsPerPage
    }
  }
}
</script>
