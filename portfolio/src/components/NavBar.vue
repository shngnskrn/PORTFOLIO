<template>
  <nav class="navbar">
    <div class="nav-links">
      <router-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="nav-link"
        :class="{ active: $route.path === link.to }"
      >
        {{ link.label }}
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHome = computed(() => route.path === '/')

const links = [
  { to: '/',         label: 'HOME' },
  { to: '/projects', label: 'PROJECTS' },
  { to: '/about',    label: 'ABOUT' },
  { to: '/contact',  label: 'CONTACT' },
]
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  background: rgba(0, 0, 0, 0.005);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-links {
  display: flex;
  width: 70%;
  justify-content: space-between;
  padding: 0 6vw;
}

.nav-link {
  font-family: var(--font-nav);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  color: rgba(255,255,255,0.55);
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: rgba(255,255,255,0.2);
  transition: color 0.3s ease, text-decoration-color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--white);
  text-decoration-color: var(--white);
}

@media (max-width: 600px) {
  .nav-links {
    gap: 1.5rem;
  }
  .nav-link {
    font-size: 0.65rem;
  }
}
</style>
