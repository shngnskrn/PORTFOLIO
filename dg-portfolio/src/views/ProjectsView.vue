<template>
  <main class="projects-page">
    <header class="page-header">
      <h2 class="page-title">Projects</h2>
    </header>

    <p class="page-sub">A selection of work across digital & print design</p>

    <div class="carousel-container">
      <!-- Previous button -->
      <button 
        class="carousel-btn carousel-btn-prev" 
        @click="goToPrev"
        :disabled="currentSlide === 0"
      >
        ← Prev
      </button>

      <!-- Carousel -->
      <div class="projects-carousel">
        <div 
          class="carousel-track"
          :style="{ transform: `translateX(calc(-${currentSlide * (100 / projectsPerView)}%))` }"
        >
          <article
            v-for="(project, i) in projects"
            :key="project.id"
            class="project-card"
            @click="handleProjectClick(project)"
          >
            <div class="card-image">
              <div class="img-placeholder">
                <span>{{ project.category }}</span>
              </div>
              <div class="card-overlay">
                <span class="overlay-text">{{ project.isFolder ? 'Open Folder' : 'View Project' }}</span>
              </div>
            </div>
            <div class="card-info">
              <span class="card-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <div>
                <h3 class="card-title">{{ project.title }}</h3>
                <p class="card-desc">{{ project.description }}</p>
              </div>
              <span class="card-year">{{ project.year }}</span>
            </div>
          </article>
        </div>
      </div>

      <!-- Next button -->
      <button 
        class="carousel-btn carousel-btn-next" 
        @click="goToNext"
        :disabled="currentSlide >= maxSlides"
      >
        Next →
      </button>
    </div>

    <!-- Dot indicators -->
    <div class="carousel-dots">
      <button
        v-for="i in totalDots"
        :key="i"
        class="dot"
        :class="{ active: i - 1 === currentSlide }"
        @click="goToSlide(i - 1)"
      />
    </div>

    <!-- ────── PHOTOGRAPHY MODAL ────── -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        
        <!-- THUMBNAIL VIEW -->
        <div v-if="!selectedImage" class="thumbnail-view">
          <div class="modal-header">
            <h3>Gallery</h3>
            <button class="close-btn" @click="closeModal">✕</button>
          </div>

          <div class="thumbnail-grid">
            <img
              v-for="photo in paginatedThumbnails"
              :key="photo.id"
              :src="photo.thumbnail"
              :alt="photo.name"
              class="thumbnail"
              loading="lazy"
              @click="selectImage(photo)"
            />
          </div>
          
          <div class="thumbnail-pagination">
            <button 
              class="thumb-nav-btn" 
              @click="thumbnailPage--"
              :disabled="thumbnailPage === 0"
            >
              ← Prev
            </button>
            <span class="page-counter">{{ thumbnailPage + 1 }} / {{ totalPages }}</span>
            <button 
              class="thumb-nav-btn" 
              @click="thumbnailPage++"
              :disabled="thumbnailPage >= totalPages - 1"
            >
              Next →
            </button>
          </div>
        </div>

        <!-- FULL-SIZE VIEW -->
        <div v-else class="fullsize-view">
          <button class="back-btn" @click="selectedImage = null">← Back</button>
          <div class="fullsize-container">
            <button 
              class="nav-btn nav-prev" 
              @click="prevPhoto"
              :disabled="selectedImageIndex === 0"
            >
              ←
            </button>
            <img :src="selectedImage.full" :alt="selectedImage.name" class="large-image" />
            <button 
              class="nav-btn nav-next" 
              @click="nextPhoto"
              :disabled="selectedImageIndex === galleryPhotos.length - 1"
            >
              →
            </button>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const projectsPerView = ref(3)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0)

// Modal state
const showModal = ref(false)
const selectedImage = ref(null)
const selectedImageIndex = ref(null)
const thumbnailPage = ref(0)
const thumbnailsPerPage = 12

const projects = [
  { id: 1, title: 'Photography',        description: 'Picture collection',          category: 'Photography', year: '2022 - 2026', isFolder: true },
  { id: 2, title: 'Project Title Two',   description: 'UI/UX design & prototyping',       category: 'UI/UX',       year: '2025' },
  { id: 3, title: 'Project Title Three', description: 'Motion graphics & animation',      category: 'Motion',      year: '2024' },
  { id: 4, title: 'Project Title Four',  description: 'Editorial layout & typography',    category: 'Print',       year: '2024' },
  { id: 5, title: 'Project Title Five',  description: 'Web design & development',         category: 'Web',         year: '2024' },
]

// Gallery photos from public folder
const galleryPhotos = [
  { id: 1, name: 'Bridge', thumbnail: '/photographs/bridge.webp', full: '/photographs/bridge.webp' },
  { id: 2, name: 'Building', thumbnail: '/photographs/building.webp', full: '/photographs/building.webp' },
  { id: 3, name: 'Horses', thumbnail: '/photographs/horses.webp', full: '/photographs/horses.webp' },
  { id: 4, name: 'Lighting 2', thumbnail: '/photographs/lighting2.webp', full: '/photographs/lighting2.webp' },
  { id: 5, name: 'Lights 1', thumbnail: '/photographs/lights1.webp', full: '/photographs/lights1.webp' },
  { id: 6, name: 'Lights 2', thumbnail: '/photographs/lights2.webp', full: '/photographs/lights2.webp' },
  { id: 7, name: 'Scenery 1', thumbnail: '/photographs/scenery1.webp', full: '/photographs/scenery1.webp' },
  { id: 8, name: 'Scenery 2', thumbnail: '/photographs/scenery2.webp', full: '/photographs/scenery2.webp' },
  { id: 9, name: 'Scenery 3', thumbnail: '/photographs/scenery3.webp', full: '/photographs/scenery3.webp' },
  { id: 10, name: 'Sky 3', thumbnail: '/photographs/sky3.webp', full: '/photographs/sky3.webp' },
  { id: 11, name: 'Sky 5', thumbnail: '/photographs/sky5.webp', full: '/photographs/sky5.webp' },
  { id: 12, name: 'Sky 8', thumbnail: '/photographs/sky8.webp', full: '/photographs/sky8.webp' },
  { id: 13, name: 'Sky 9', thumbnail: '/photographs/sky9.webp', full: '/photographs/sky9.webp' },
  { id: 14, name: 'Sky 10', thumbnail: '/photographs/sky10.webp', full: '/photographs/sky10.webp' },
  { id: 15, name: 'Sky 11', thumbnail: '/photographs/sky11.webp', full: '/photographs/sky11.webp' },
  { id: 16, name: 'Sky 13', thumbnail: '/photographs/sky13.webp', full: '/photographs/sky13.webp' },
  { id: 17, name: 'Sky 14', thumbnail: '/photographs/sky14.webp', full: '/photographs/sky14.webp' },
  { id: 18, name: 'Sky 15', thumbnail: '/photographs/sky15.webp', full: '/photographs/sky15.webp' },
  { id: 19, name: 'Sky 19', thumbnail: '/photographs/sky19.webp', full: '/photographs/sky19.webp' },
  { id: 20, name: 'Statue 1', thumbnail: '/photographs/statue1.webp', full: '/photographs/statue1.webp' },
  { id: 21, name: 'Statue 2', thumbnail: '/photographs/statue2.webp', full: '/photographs/statue2.webp' },
  { id: 22, name: 'Statue 4', thumbnail: '/photographs/statue4.webp', full: '/photographs/statue4.webp' },
  { id: 23, name: 'Swan 1', thumbnail: '/photographs/swan1.webp', full: '/photographs/swan1.webp' },
  { id: 24, name: 'Sword', thumbnail: '/photographs/sword.webp', full: '/photographs/sword.webp' },
  { id: 25, name: 'Temple 1', thumbnail: '/photographs/temple1.webp', full: '/photographs/temple1.webp' },
  { id: 26, name: 'Temple 2', thumbnail: '/photographs/temple2.webp', full: '/photographs/temple2.webp' },
  { id: 27, name: 'Tower 1', thumbnail: '/photographs/tower1.webp', full: '/photographs/tower1.webp' },
  { id: 28, name: 'Tower 3', thumbnail: '/photographs/tower3.webp', full: '/photographs/tower3.webp' },
  { id: 29, name: 'Tower 6', thumbnail: '/photographs/tower6.webp', full: '/photographs/tower6.webp' },
  { id: 30, name: 'Waterfall', thumbnail: '/photographs/waterfall.webp', full: '/photographs/waterfall.webp' },
]

// Handle card click
const handleProjectClick = (project) => {
  if (project.isFolder) {
    showModal.value = true
  }
}

// Close modal
const closeModal = () => {
  showModal.value = false
  selectedImage.value = null
  selectedImageIndex.value = null
  thumbnailPage.value = 0
}

// Select image to view full size
const selectImage = (photo) => {
  selectedImage.value = photo
  selectedImageIndex.value = galleryPhotos.findIndex(p => p.id === photo.id)
  // Update thumbnail page to show page containing this image
  updateThumbnailPage()
}

// Paginated thumbnails
const paginatedThumbnails = computed(() => {
  const start = thumbnailPage.value * thumbnailsPerPage
  return galleryPhotos.slice(start, start + thumbnailsPerPage)
})

const totalPages = computed(() => Math.ceil(galleryPhotos.length / thumbnailsPerPage))
const hasMorePhotos = computed(() => thumbnailPage.value < totalPages.value - 1)

const loadMorePhotos = () => {
  if (hasMorePhotos.value) thumbnailPage.value++
}

// Navigate to next photo in full-size view
const nextPhoto = () => {
  if (selectedImageIndex.value !== null && selectedImageIndex.value < galleryPhotos.length - 1) {
    selectedImageIndex.value++
    selectedImage.value = galleryPhotos[selectedImageIndex.value]
    updateThumbnailPage()
  }
}

// Navigate to previous photo in full-size view
const prevPhoto = () => {
  if (selectedImageIndex.value !== null && selectedImageIndex.value > 0) {
    selectedImageIndex.value--
    selectedImage.value = galleryPhotos[selectedImageIndex.value]
    updateThumbnailPage()
  }
}

// Update thumbnail page to show the page containing the current image
const updateThumbnailPage = () => {
  if (selectedImageIndex.value !== null) {
    thumbnailPage.value = Math.floor(selectedImageIndex.value / thumbnailsPerPage)
  }
}

// Update projectsPerView based on window width
const updateProjectsPerView = () => {
  if (window.innerWidth <= 600) {
    projectsPerView.value = 1
  } else if (window.innerWidth <= 768) {
    projectsPerView.value = 2
  } else {
    projectsPerView.value = 3
  }
}

onMounted(() => {
  updateProjectsPerView()
  window.addEventListener('resize', updateProjectsPerView)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateProjectsPerView)
})

const maxSlides = computed(() => Math.max(0, projects.length - projectsPerView.value))
const totalDots = computed(() => maxSlides.value + 1)

const goToPrev = () => {
  if (currentSlide.value > 0) currentSlide.value--
}

const goToNext = () => {
  if (currentSlide.value < maxSlides.value) currentSlide.value++
}

const goToSlide = (index) => {
  currentSlide.value = index
}
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
  padding: calc(var(--nav-height) + 4rem) 6vw 4rem;
}

/* ── Header ── */
.page-header {
  margin-bottom: 4rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 2rem;
  padding-bottom: 3rem;
}

.page-title {
  font-family: var(--font-script);
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 400;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.page-sub {
  font-family: var(--font-body);
  font-style: italic;
  color: var(--gray-text);
  font-size: 1rem;
  letter-spacing: 0.03em;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
}

/* ── Carousel Container ── */
.carousel-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

/* ── Carousel ── */
.projects-carousel {
  flex: 1;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  gap: 2px;
  transition: transform 0.4s ease-out;
}

.project-card {
  flex: 0 0 calc(33.333% - 2px);
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255,255,255,0.07);
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.project-card:hover {
  border-color: rgba(255,255,255,0.3);
}

/* ── Carousel Buttons ── */
.carousel-btn {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border: none;
  background: transparent;
  color: rgba(255,255,255,0.6);
  font-family: var(--font-nav);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-btn:hover:not(:disabled) {
  color: rgba(255,255,255,1);
}

.carousel-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* ── Card Image ── */
.card-image {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
  background: var(--gray-dim);
}

.img-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a0a0a;
  background: url('../assets/images/folder.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.7;
}

.img-placeholder span {
  font-family: var(--font-script);
  font-size: 1.3rem;
  color: rgba(255, 255, 255);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.overlay-text {
  font-family: var(--font-nav);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  border: 1px solid rgba(255,255,255,0.6);
  padding: 0.5rem 1.2rem;
}

/* ── Card Info ── */
.card-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  border-top: 1px solid rgba(255,255,255,0.07);
}

.card-num {
  font-family: var(--font-nav);
  font-size: 0.65rem;
  color: rgba(255,255,255,0.2);
  flex-shrink: 0;
}

.card-title {
  font-family: var(--font-body);
  font-weight: 390;
  font-size: 0.95rem;
  letter-spacing: 0.10em;
  margin-bottom: 0.15rem;
}

.card-desc {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 0.8rem;
  color: var(--gray-text);
}

.card-year {
  margin-left: auto;
  font-family: var(--font-nav);
  font-size: 0.65rem;
  color: rgba(255,255,255,0.25);
  flex-shrink: 0;
}

/* ── Dot Indicators ── */
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.dot {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: rgba(255,255,255,0.6);
  width: 1.5rem;
  border-radius: 0.3rem;
}

.dot:hover {
  background: rgba(255,255,255,0.4);
}

/* ────── MODAL STYLES ────── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  width: 90vw;
  height: 90vh;
  max-width: 1200px;
  background: #0a0a0a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

/* THUMBNAIL VIEW */
.thumbnail-view {
  padding: 2rem;
  overflow-y: auto;
  max-height: 90vh;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-header h3 {
  font-family: var(--font-script);
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0;
}

.close-btn {
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: rgba(255, 255, 255, 1);
}

.thumbnail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}

.thumbnail {
  width: 100%;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  transition: all 0.3s ease;
}

.thumbnail:hover {
  border-color: rgba(255, 255, 255, 0.3);
  transform: scale(1.02);
  will-change: transform;
}

.thumbnail-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.thumb-nav-btn {
  padding: 0.7rem 1.2rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.8);
  font-family: var(--font-nav);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.thumb-nav-btn:hover:not(:disabled) {
  border-color: rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 1);
}

.thumb-nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.page-counter {
  font-family: var(--font-nav);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.5);
  min-width: 50px;
  text-align: center;
}

/* FULL-SIZE VIEW */
.fullsize-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow: hidden;
  min-height: 0;
}

.back-btn {
  align-self: flex-start;
  margin: 2rem 2rem 1rem 2rem;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-family: var(--font-nav);
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: color 0.3s ease;
  flex-shrink: 0;
}

.back-btn:hover {
  color: rgba(255, 255, 255, 1);
}

.fullsize-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex: 1;
  width: 100%;
  min-height: 0;
  padding: 0 2rem 2rem 2rem;
}

.nav-btn {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.nav-btn:hover:not(:disabled) {
  border-color: rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 1);
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.large-image {
  width: auto;
  height: auto;
  max-width: 90%;
  max-height: calc(100% - 1rem);
  object-fit: contain;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .carousel-container {
    gap: 1rem;
  }

  .project-card {
    flex: 0 0 calc(50% - 2px);
  }

  .carousel-btn {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 0.6rem;
  }

  .thumbnail-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
}

@media (max-width: 600px) {
  .carousel-container {
    gap: 0.5rem;
  }

  .project-card {
    flex: 0 0 100%;
  }

  .carousel-btn {
    width: 2rem;
    height: 2rem;
    font-size: 0.5rem;
  }

  .modal-content {
    width: 95%;
    max-height: 95vh;
  }

  .thumbnail-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 0.75rem;
  }

  .modal-header h3 {
    font-size: 1.4rem;
  }

  .modal-content {
    width: 95vw;
    height: 95vh;
  }
}
</style>