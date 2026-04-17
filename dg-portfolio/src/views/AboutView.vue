<template>
  <main class="about-page">
    <div class="about-layout">

      <div class="about-portrait">
        <div class="portrait-frame">
          <img src="../assets/images/portfolio-dg.svg" alt="Dilshan Gunasekaran" class="portrait-img" />
        </div>
        <div class="portrait-label">
          <span>Dilshan Gunasekaran</span>
          <span>Multimedia Designer</span>
        </div>
      </div>

      <div class="about-text">
        <h2 class="page-title">About Me</h2>

        <div class="about-bio">
          <p>
            I bridge the gap between high-end design and functional code. Originally from Sri Lanka and currently based in Denmark, I specialize in creating digital experiences using the Adobe Creative Suite, Figma, and modern web frameworks like Vue.js.
          </p>
          <p>
            My background is built on real-world execution—freelancing for small businesses, leading community organizations, and managing high-pressure creative festivals. I focus on clean aesthetics, responsive code, and zero filler.
          </p>
        </div>

        <div class="skills-block">
          <h3 class="block-label">Core Skills</h3>
          <ul class="skills-list">
            <li v-for="skill in skills" :key="skill">{{ skill }}</li>
          </ul>
        </div>

        <div class="links-block">
          <a href="/cv.pdf" target="_blank" class="ext-link">View CV ↗</a>
          <a href="https://youtu.be/UHnFqMRC8Sc" target="_blank" class="ext-link">Video CV ↗</a>
        </div>        
      </div>
    </div>
  </main>
</template>

<script setup>
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
  padding: calc(var(--nav-height) + 4rem) 6vw 1.5rem;
}

.about-layout {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 6rem;
  align-items: start;
}

/* ── Portrait ── */
.portrait-frame {
  aspect-ratio: 3/4;
  border: 1px solid rgba(255,255,255,0.12);
  overflow: hidden;
  background: var(--gray-dim);
  margin-bottom: 1rem;
  max-width: 420px;
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
  font-size: 1rem;
  font-style: italic;
}

.portrait-label span:last-child {
  font-family: var(--font-nav);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--gray-text);
  font-style: italic;
}

/* ── Text ── */
.page-title {
  font-family: var(--font-script);
  font-size: clamp(1rem, 3.5vw, 4rem);
  font-weight: 200;
  line-height: 1;
  margin-bottom: 2rem;
}

.about-bio p {
  font-family: var(--font-body);
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(255,255,255,0.75);
  margin-bottom: 1.2rem;
}

/* ── Skills ── */
.skills-block {
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.08);
}

.block-label {
  font-family: var(--font-nav);
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  color: var(--gray-text);
  margin-bottom: 1rem;
}

.skills-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skills-list li {
  font-family: var(--font-body);
  font-size: 0.88rem;
  border: 1px solid rgba(255,255,255,0.15);
  padding: 0.35rem 0.9rem;
  color: rgba(255,255,255,0.7);
  transition: border-color 0.2s, color 0.2s;
}

.skills-list li:hover {
  border-color: rgba(255,255,255,0.6);
  color: var(--white);
}

/* ── Links ── */
.links-block {
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
}

.ext-link {
  font-family: var(--font-nav);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: rgba(255,255,255,0.5);
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.2s;
}

.ext-link:hover {
  color: var(--white);
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .about-page {
    padding: calc(var(--nav-height) + 0.5rem) 6vw 1.5rem;
    padding-bottom: 140px;
  }

  .about-layout {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .portrait-label {
    margin-bottom: 1.5rem;
  }

  .about-text {
    order: 2;
  }

  .links-block {
    position: absolute;
    top: calc(var(--nav-height) + 8rem);
    left: 6vw;
  }

  .portrait-frame {
    max-width: 260px;
  }
}
</style>
