<template>
  <main class="projects-page">
    <header class="page-header">
      <h2 class="page-title">Projects</h2>
      <p class="page-sub">A selection of work across digital & print design</p>
    </header>

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
          >
            <div class="card-image">
              <div class="img-placeholder">
                <span>{{ project.category }}</span>
              </div>
              <div class="card-overlay">
                <span class="overlay-text">View Project</span>
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
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const projectsPerView = ref(3)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0)

const projects = [
  { id: 1, title: 'Project Title One',   description: 'Brand identity & visual design',  category: 'Branding',    year: '2025' },
  { id: 2, title: 'Project Title Two',   description: 'UI/UX design & prototyping',       category: 'UI/UX',       year: '2025' },
  { id: 3, title: 'Project Title Three', description: 'Motion graphics & animation',      category: 'Motion',      year: '2024' },
  { id: 4, title: 'Project Title Four',  description: 'Editorial layout & typography',    category: 'Print',       year: '2024' },
  { id: 5, title: 'Project Title Five',  description: 'Web design & development',         category: 'Web',         year: '2024' },
]

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
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 2rem;
}

.page-title {
  font-family: var(--font-script);
  font-size: clamp(3.5rem, 8vw, 6rem);
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
  background: linear-gradient(135deg, #111 0%, #1e1e1e 100%);
}

.img-placeholder span {
  font-family: var(--font-nav);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: rgba(255,255,255,0.2);
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
  font-weight: 300;
  font-size: 1.05rem;
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
}
</style>