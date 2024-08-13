import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Notes from '../views/Notes.vue'
import LoginPortal from '../views/LoginPortal.vue'
import Isaku from '../views/ISaku.vue'
import Penilaian from '../views/Penilaian.vue'
import Beasiswa from '../views/Beasiswa.vue'
import Notifikasi from '../views/Notifikasi.vue'
import Pengumuman from '../views/Pengumuman.vue'
import DetailPengumuman from '../views/DetailPengumuman.vue'
import Perusahaan from '../views/PeraturanPerusahaan.vue'
import FAQ from '../views/FAQ.vue'
import Teguran from '../views/TeguranPeringatan.vue'
import Pendidikan from '../views/BantuanPendidikan.vue'
import ProfileView from '../views/Profile.vue'
import pergantianIsaku from '../views/PergantianIsaku.vue'

const routes = [
  { path: '/login', name: 'Login', component: LoginPortal },
  { path: '/', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/notes', name: 'Notes', component: Notes, meta: { requiresAuth: true } },
  { path: '/isaku', name: 'Isaku', component: Isaku, meta: { requiresAuth: true } },
  {
    path: '/isaku/pergantianIsaku',
    name: 'GantiIsaku',
    component: pergantianIsaku,
    meta: { requiresAuth: true }
  },
  { path: '/penilaian', name: 'Penilaian', component: Penilaian, meta: { requiresAuth: true } },
  { path: '/beasiswa', name: 'Beasiswa', component: Beasiswa, meta: { requiresAuth: true } },
  { path: '/notifikasi', name: 'Notifikasi', component: Notifikasi, meta: { requiresAuth: true } },
  { path: '/pengumuman', name: 'Pengumuman', component: Pengumuman, meta: { requiresAuth: true } },
  {
    path: '/pengumuman/detail-pengumuman',
    name: 'DetailPengumuman',
    component: DetailPengumuman,
    meta: { requiresAuth: true }
  },
  { path: '/perusahaan', name: 'Perusahaan', component: Perusahaan, meta: { requiresAuth: true } },
  { path: '/faq', name: 'FAQ', component: FAQ, meta: { requiresAuth: true } },
  { path: '/teguran', name: 'Teguran', component: Teguran, meta: { requiresAuth: true } },
  { path: '/pendidikan', name: 'Pendidikan', component: Pendidikan, meta: { requiresAuth: true } },
  { path: '/profile', name: 'Profile', component: ProfileView, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authToken')

  if (isAuthenticated && to.name === 'Login') {
    // Redirect authenticated users away from the login page
    next({ name: 'Dashboard' })
  } else if (!isAuthenticated && to.meta.requiresAuth) {
    // Redirect unauthenticated users to the login page
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
