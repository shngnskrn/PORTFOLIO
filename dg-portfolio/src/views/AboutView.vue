<template>
  <main class="about-page">
    <div class="about-layout">

      <!-- Sticky Portrait Column -->
      <div class="about-portrait">
        <div class="portrait-frame">
          <img src="../assets/images/portfolio-dg.svg" alt="Dilshan Gunasekaran" class="portrait-img" />
        </div>
        <div class="portrait-label">
          <span>Dilshan Gunasekaran</span>
          <span>Multimedia Designer</span>
        </div>
      </div>

      <!-- Scrollable Content Column -->
      <div class="about-text">
        
        <h2 class="page-title">About Me</h2>

        <div class="about-bio">
          <p>
            I bridge the gap between high-end design and functional code. Originally from Sri Lanka and currently based in Denmark, I specialize in creating digital experiences using the Adobe Creative Suite, Figma, and modern web frameworks like Vue.js.
          </p>
        </div>

        <!-- Experience Timeline -->
        <div class="timeline-block">
          <h3 class="block-label">Experience</h3>
          <div class="experience-timeline">
            <div class="timeline-item-enhanced" v-for="(exp, index) in experience" :key="exp.year">
              <div class="exp-card">
                <div class="exp-header">
                  <span class="exp-year">{{ exp.year }}</span>
                  <span class="exp-separator">·</span>
                  <span class="exp-role">{{ exp.role }}</span>
                </div>
                <div class="exp-org">{{ exp.organization }}</div>
              </div>
              <div v-if="index < experience.length - 1" class="timeline-connector"></div>
            </div>
          </div>
        </div>

        <!-- Education Timeline -->
        <div class="timeline-block">
          <h3 class="block-label">Education</h3>
          <div class="education-timeline">
            <div class="timeline-item-enhanced" v-for="(edu, index) in education" :key="edu.year">
              <div class="edu-card">
                <div class="edu-header">
                  <span class="edu-year">{{ edu.year }}</span>
                  <span class="edu-separator">·</span>
                  <span class="edu-school">{{ edu.institution }}</span>
                </div>
                <div class="edu-program">{{ edu.program }}</div>
              </div>
              <div v-if="index < education.length - 1" class="timeline-connector"></div>
            </div>
          </div>
        </div>

        <!-- Languages -->
        <div class="timeline-block">
          <h3 class="block-label">Languages</h3>
          <div class="languages-horizontal">
            <div class="language-item" v-for="lang in languages" :key="lang.name">
              <span class="language-name">{{ lang.name }}</span>
              <span class="language-level">{{ lang.level }}</span>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="skills-block">
          <h3 class="block-label">Core Skills</h3>
          <ul class="skills-list">
            <li v-for="skill in skills" :key="skill">{{ skill }}</li>
          </ul>
        </div>

        <!-- Links -->
        <div class="links-block">
          <a href="/cv.pdf" target="_blank" class="ext-link">View CV ↗</a>
          <a href="https://youtu.be/UHnFqMRC8Sc" target="_blank" class="ext-link">Video CV ↗</a>
          <a href="https://linkedin.com/in/dilshan-gunasekaran" target="_blank" class="ext-link">LinkedIn ↗</a>
        </div>
      </div>
    </div>

    <div class="mobile-nav-buttons">
      <router-link to="/projects" class="nav-button">View Projects</router-link>
      <router-link to="/contact" class="nav-button">Contact me!</router-link>
    </div>    
  </main>
</template>

<script setup>
const education = [
  {
    year: '2024-2025',
    institution: 'Academy of Design',
    program: 'BTEC Level 3 Diploma in Art & Design',
  },
  {
    year: '2025-Present',
    institution: 'Syddansk Erhvervsakademi',
    program: 'Multi Media Design',
  },
]

const experience = [
  {
    year: '2022-2023',
    role: 'Editor',
    organization: 'Interact Club of GCK',
  },
  {
    year: '2023-2024',
    role: 'PR Team',
    organization: 'Rotaract Club of Matale',
  },
  {
    year: '2024-2025',
    role: 'PR Director',
    organization: 'Rotaract Club of Matale',
  },
]

const languages = [
  { name: 'English', level: 'C1' },
  { name: 'Danish', level: 'Beginner [Learning]' },
]

const skills = [
  'Brand Identity & Visual Design',
  'UI/UX Design & Prototyping',
  'Editorial & Print Design',
  'Web Design (HTML, CSS, Vue JS)',
  'Adobe Creative Suite',
  'Figma',
]
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  padding: calc(var(--nav-height) + 4rem) 6vw 4rem;
}

.about-layout {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 4rem;
  align-items: flex-start;
}

/* ── Portrait (Sticky) ── */
.about-portrait {
  position: sticky;
  top: calc(var(--nav-height) + 4rem);
  height: fit-content;
}

.portrait-frame {
  aspect-ratio: 3/4;
  border: 1px solid rgba(255,255,255,0.12);
  overflow: hidden;
  background: var(--gray-dim);
  margin-bottom: 1rem;
  max-width: 400px;
}

.portrait-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.portrait-label {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.portrait-label span:first-child {
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-style: italic;
}

.portrait-label span:last-child {
  font-family: var(--font-nav);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  color: var(--gray-text);
  font-style: italic;
}

/* ── Scrollable Content ── */
.about-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* ── Title ── */
.page-title {
  font-family: var(--font-script);
  font-size: clamp(1.5rem, 3vw, 3rem);
  font-weight: 200;
  line-height: 1;
  margin: 0;
}

/* ── Bio ── */
.about-bio p {
  font-family: var(--font-body);
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.75);
  margin: 0;
}

/* ── Timeline Block ── */
.timeline-block {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.block-label {
  font-family: var(--font-nav);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--gray-text);
  margin: 0;
  text-transform: uppercase;
}

/* ── Experience & Education Timeline ── */
.experience-timeline,
.education-timeline {
  display: flex;
  gap: 0;
  align-items: center;
}

.timeline-item-enhanced {
  display: flex;
  align-items: center;
  gap: 0;
  flex: 1;
  min-width: 0;
}

.exp-card,
.edu-card {
  flex: 1;
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  transition: all 0.3s ease;
  min-width: 0;
}

.exp-card:hover,
.edu-card:hover {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-color: rgba(255, 255, 255, 0.15);
}

.exp-header,
.edu-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  min-width: 0;
}

.exp-year,
.edu-year {
  font-family: var(--font-nav);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.55);
  font-weight: 600;
  white-space: nowrap;
}

.exp-separator,
.edu-separator {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.75rem;
}

.exp-role,
.edu-school {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.exp-org,
.edu-program {
  font-family: var(--font-body);
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.3;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.timeline-connector {
  width: 1.5rem;
  height: 1px;
  background: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, transparent 100%);
  flex-shrink: 0;
}

/* ── Languages ── */
.languages-horizontal {
  display: flex;
  gap: 3rem;
  padding: 0.4rem 0;
}

.language-item {
  display: flex;
  gap: 1rem;
  align-items: baseline;
}

.language-name {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: rgba(255,255,255,0.85);
  font-weight: 500;
}

.language-level {
  font-family: var(--font-nav);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.55);
}

/* ── Skills ── */
.skills-block {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.skills-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
}

.skills-list li {
  font-family: var(--font-body);
  font-size: 0.75rem;
  border: 1px solid rgba(255,255,255,0.15);
  padding: 0.35rem 0.75rem;
  color: rgba(255,255,255,0.7);
  transition: border-color 0.2s, color 0.2s;
  white-space: nowrap;
}

.skills-list li:hover {
  border-color: rgba(255,255,255,0.6);
  color: var(--white);
}

/* ── Links ── */
.links-block {
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
}

.ext-link {
  font-family: var(--font-nav);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: rgba(255,255,255,0.5);
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.2s;
}

.ext-link:hover {
  color: var(--white);
}

.mobile-nav-buttons {
  display: none;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .about-page {
    padding: calc(var(--nav-height) + 2rem) 6vw 2rem;
  }

  .about-layout {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .about-portrait {
    position: static;
    margin-bottom: 1rem;
  }

  .about-text {
    gap: 1.5rem;
  }

  .page-title {
    font-size: clamp(1.25rem, 5vw, 2.5rem);
    margin-bottom: 0.5rem;
  }

  .experience-timeline,
  .education-timeline {
    flex-direction: column;
    align-items: flex-start;
  }

  .timeline-item-enhanced {
    width: 100%;
    flex-direction: column;
  }

  .exp-card,
  .edu-card {
    width: 100%;
    padding: 1rem;
  }

  .timeline-connector {
    display: none;
  }

  .portrait-label {
    margin-bottom: 0;
  }

  .portrait-frame {
    max-width: 100%;
    aspect-ratio: 3/4;
  }

  .mobile-nav-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.08);
  }

  .nav-button {
    flex: 1;
    padding: 1rem;
    text-align: center;
    border: 1px solid rgba(255,255,255,0.3);
    color: var(--white);
    font-family: var(--font-nav);
    font-size: 0.9rem;
    letter-spacing: 0.1em;
    transition: all 0.3s ease;
  }

  .nav-button:hover {
    background: var(--white);
    color: var(--black);
  }
}
</style>