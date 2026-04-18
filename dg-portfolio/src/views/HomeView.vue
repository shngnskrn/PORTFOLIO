<template>
  <section class="hero">
    <!-- Hero content -->
    <div class="hero-content">
      <h1 class="hero-name">
        <span class="line1" :class="{ visible: visible }">Dilshan</span>
        <span class="line2" :class="{ visible: visible }">Gunasekaran</span>
        <p class="hero-tagline" :class="{ visible: visible }">Multi-Media Design Student @ Syddansk Erhvervsakademi</p>
      </h1>
    </div>

    <!-- Bottom bar -->
    <div class="hero-bottom">
      <span class="quote" :class="{ visible: visible }">I design digital experiences that make sense, look beautiful,<br> and tell a compelling story.</span>
      <router-link to="/contact" class="cta-btn" :class="{ visible: visible }">
        Let's Connect!
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)

onMounted(() => {
  setTimeout(() => { visible.value = true }, 100)
})
</script>

<style scoped>
.hero {
  position: static;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: visible;
  background: transparent;
}

.hero-content {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  align-items: flex-start;
  padding: calc(var(--nav-height) + 4rem) 6vw 4rem;
}

.hero-name {
  display: flex;
  flex-direction: column;
  font-family: var(--font-script);
  font-weight: 200;
  line-height: 1;
  color: var(--white);
  user-select: none;
  padding-top: 4rem;
}

.line1 {
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s;
}

.line2 {
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.9s ease 0.35s, transform 0.9s ease 0.35s;
}

.line1.visible,
.line2.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-tagline {
  font-family: var(--font-body);
  font-style: italic;
  font-size: clamp(1rem, 2vw, 1.4rem);
  color: rgba(255, 255, 255, 0.65);
  letter-spacing: 0.03em;
  margin-top: 5rem;
  margin-bottom: 0;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s;
}

.hero-tagline.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-bottom {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 6vw 4rem;
  gap: 2rem;
}

@keyframes shimmerSweep {
  0% {
    background-position: -1000px 0;
  }
  50% {
    background-position: 1000px 0;
  }
  100% {
    background-position: -1000px 0;
  }
}

.quote {
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-style: italic;
  font-size: clamp(0.9rem, 1.2vw, 1.1rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
  max-width: 550px;
  padding: 0.5rem 1rem;
  border-left: 2px solid rgba(255, 255, 255, 0.3);
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.9s ease 0.6s, transform 0.9s ease 0.6s;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0) 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmerSweep 10s linear infinite;
}

.quote.visible {
  opacity: 1;
  transform: translateY(0);
}

.cta-btn {
  font-family: var(--font-nav);
  font-size: 0.95rem;
  letter-spacing: 0.12em;
  color: var(--white);
  border: 1.5px solid var(--white);
  padding: 1rem 2rem;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.8s ease 0.85s, transform 0.8s ease 0.85s, background 0.3s ease, color 0.3s ease;
}

.cta-btn.visible {
  opacity: 1;
  transform: translateY(0);
}

.cta-btn:hover {
  background: var(--white);
  color: var(--black);
}

@media (max-width: 768px) {
  .hero-content {
    padding: calc(var(--nav-height) + 4rem) 6vw 4rem;
  }

  .line1,
  .line2 {
    font-size: clamp(1.8rem, 5vw, 3.5rem);
  }

  .hero-bottom {
    padding: 2.5rem 6vw 4rem;
    flex-direction: column;
    gap: 1.5rem;
  }

  .hero-tagline {
    font-size: clamp(0.9rem, 1.8vw, 1.1rem);
    margin-top: 2rem;
  }

  .quote {
    font-size: clamp(0.8rem, 1vw, 0.95rem);
    max-width: 100%;
  }
}
</style>