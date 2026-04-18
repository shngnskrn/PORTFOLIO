<template>
  <main class="projects-page">
    <header class="page-header">
      <h2 class="page-title">Projects</h2>
      <p class="page-sub">A selection of work across digital & print design</p>
    </header>

    <div class="projects-grid">
      <article
        v-for="(project, i) in projects"
        :key="project.id"
        class="project-card"
        :style="{ animationDelay: i * 0.08 + 's' }"
      >
        <div class="card-image">
          <!-- Replace src with your actual project image -->
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
  </main>
</template>

<script setup>
// Replace these with your actual projects
const projects = [
  { id: 1, title: 'Project Title One',   description: 'Brand identity & visual design',  category: 'Branding',    year: '2025' },
  { id: 2, title: 'Project Title Two',   description: 'UI/UX design & prototyping',       category: 'UI/UX',       year: '2025' },
  { id: 3, title: 'Project Title Three', description: 'Motion graphics & animation',      category: 'Motion',      year: '2024' },
  { id: 4, title: 'Project Title Four',  description: 'Editorial layout & typography',    category: 'Print',       year: '2024' },
  { id: 5, title: 'Project Title Five',  description: 'Web design & development',         category: 'Web',         year: '2024' },
]
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

/* ── Grid ── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
  gap: 2px;
}

/* ── Card ── */
.project-card {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255,255,255,0.07);
  overflow: hidden;
  cursor: pointer;
  animation: fadeUp 0.6s ease both;
  transition: border-color 0.3s ease;
}

.project-card:hover {
  border-color: rgba(255,255,255,0.3);
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
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

/* Replace img-placeholder with an actual img tag:
   <img :src="project.image" :alt="project.title" class="card-img" /> */

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

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
