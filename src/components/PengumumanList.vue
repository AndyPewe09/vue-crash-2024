<template>
  <div class="">
    <h2>Pengumuman</h2>
    <div class="input-group mb-4">
      <input
        type="text"
        class="form-control"
        placeholder="Apa yang ingin anda cari?"
        v-model="searchTerm"
        @input="filterAnnouncements"
      />
      <button class="btn btn-outline-secondary" type="button">
        <i class="bi bi-search"></i>
      </button>
    </div>

    <div
      v-for="announcement in filteredAnnouncements"
      :key="announcement.id"
      class="card mb-3 shadow-sm"
    >
      <div class="row g-0">
        <div class="col-md-2 d-flex justify-content-center align-items-center p-2">
          <img
            :src="announcement.image"
            class="img-fluid rounded-start object-fit-cover rounded h-100"
            alt="Image"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body px-2 card-announcement">
            <h5 class="card-title">{{ announcement.title }}</h5>
            <p class="card-text">{{ announcement.description }}</p>
            <button class="btn btn-outline-primary" @click="goToDetail(announcement.id)">
              Read More
            </button>
          </div>
        </div>
        <div class="col-md-2 d-flex justify-content-end align-items-start p-3">
          <span class="badge bg-dark text-white">{{ announcement.date }}</span>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click.prevent="changePage(1)">«</a>
        </li>
        <li
          v-for="page in totalPages"
          :key="page"
          class="page-item"
          :class="{ active: currentPage === page }"
        >
          <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
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
  data() {
    return {
      searchTerm: '',
      announcements: [
        {
          id: 1,
          title: 'PROGRAM KPR SUBSIDI MANDIRI',
          description:
            'AJUKAN KPR ANDA KE CABANG PADANAN MANDIRI ATAU CABANG BANK MANDIRI TERDEKAT LAINNYA',
          date: '30/07/2024',
          image: '/src/assets/img/kpr.jpg'
        },
        {
          id: 2,
          title: 'DANA BANTUAN PENDIDIKAN',
          description:
            'AYO SEGERA AJUKAN DANA BANTUAN PENDIDIKANMU Note : Permohonan Dana Bantuan Pendidikan untuk tingkat Akademi/Universitas dibuka dibulan September.',
          date: '02/08/2024',
          image: '/src/assets/img/beasiswa.jpg'
        },
        {
          id: 3,
          title: 'PROGRAM KPR SUBSIDI MANDIRI',
          description:
            'AJUKAN KPR ANDA KE CABANG PADANAN MANDIRI ATAU CABANG BANK MANDIRI TERDEKAT LAINNYA',
          date: '30/07/2024',
          image: '/src/assets/img/kpr.jpg'
        },
        {
          id: 4,
          title: 'PROGRAM KPR SUBSIDI MANDIRI',
          description:
            'AJUKAN KPR ANDA KE CABANG PADANAN MANDIRI ATAU CABANG BANK MANDIRI TERDEKAT LAINNYA',
          date: '30/07/2024',
          image: '/src/assets/img/kpr.jpg'
        },
        {
          id: 5,
          title: 'PROGRAM KPR SUBSIDI MANDIRI',
          description:
            'AJUKAN KPR ANDA KE CABANG PADANAN MANDIRI ATAU CABANG BANK MANDIRI TERDEKAT LAINNYA',
          date: '30/07/2024',
          image: '/src/assets/img/kpr.jpg'
        },
        {
          id: 6,
          title: 'PROGRAM KPR SUBSIDI MANDIRI',
          description:
            'AJUKAN KPR ANDA KE CABANG PADANAN MANDIRI ATAU CABANG BANK MANDIRI TERDEKAT LAINNYA',
          date: '30/07/2024',
          image: '/src/assets/img/kpr.jpg'
        },
        {
          id: 7,
          title: 'PROGRAM KPR SUBSIDI MANDIRI',
          description:
            'AJUKAN KPR ANDA KE CABANG PADANAN MANDIRI ATAU CABANG BANK MANDIRI TERDEKAT LAINNYA',
          date: '30/07/2024',
          image: '/src/assets/img/kpr.jpg'
        },
        {
          id: 8,
          title: 'PROGRAM KPR SUBSIDI MANDIRI',
          description:
            'AJUKAN KPR ANDA KE CABANG PADANAN MANDIRI ATAU CABANG BANK MANDIRI TERDEKAT LAINNYA',
          date: '30/07/2024',
          image: '/src/assets/img/kpr.jpg'
        }
      ],
      currentPage: 1,
      itemsPerPage: 3
    }
  },
  computed: {
    filteredAnnouncements() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage

      const filtered = this.announcements
        .filter((announcement) =>
          announcement.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
        .sort((a, b) => {
          const dateA = new Date(a.date.split('/').reverse().join('-'))
          const dateB = new Date(b.date.split('/').reverse().join('-'))
          return dateB - dateA
        })

      return filtered.slice(startIndex, endIndex)
    },
    totalPages() {
      return Math.ceil(this.announcements.length / this.itemsPerPage)
    }
  },

  methods: {
    filterAnnouncements() {
      this.currentPage = 1
    },
    changePage(page) {
      this.currentPage = page
    },
    goToDetail(id) {
      this.$router.push({ name: 'DetailPengumuman', params: { id } })
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.img-fluid {
  border-radius: 12px 0 0 12px;
}

.card-body {
  padding: 1.5rem;
}

.badge {
  font-size: 1rem;
  padding: 0.75rem;
}

.pagination {
  margin-top: 20px;
}
</style>
