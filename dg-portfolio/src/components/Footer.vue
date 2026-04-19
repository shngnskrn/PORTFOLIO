<template>
  <footer class="footer-container" :class="{ active: showFooter }" @mouseenter="showFooter = true" @mouseleave="showFooter = false">
    <div class="arrow-bounce">⌃</div>
    
    <div class="footer-content">
      <div class="left">
        <img src="../assets/images/logo.webp" alt="Logo" class="logo">
      </div>
      
      <div class="center">
        <a href="https://linkedin.com/in/dilshan-gunasekaran" target="_blank">LinkedIn ↗</a>
        <a href="/cv.pdf" target="_blank">View CV ↗</a>
        <a href="https://youtu.be/UHnFqMRC8Sc" target="_blank">Video CV ↗</a>
      </div>
      
      <div class="right">
        <p>© 2026 Your Name. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
const showFooter = ref(false)
</script>

<style scoped>
.footer-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 40px;
  overflow: hidden;
  transition: height 0.4s ease, background 0.4s ease;
  background: transparent;
}

.footer-container.active {
  height: 120px;
  background: rgba(0, 0, 0, 0.005);
  backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.arrow-bounce {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  animation: bounce 2s infinite;
  cursor: pointer;
  transition: opacity 0.4s ease;
}

.arrow-bounce:hover {
  color: rgba(255, 255, 255, 0.9);
}

.footer-container.active .arrow-bounce {
  display: none;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6vw;
  height: 120px;
  gap: 2rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.footer-container.active .footer-content {
  opacity: 1;
}

.left {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.center {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.center a {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s;
}

.center a:hover {
  color: rgba(255, 255, 255, 0.9);
}

.right p {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.logo {
  height: 80px;
  width: auto;
}

@media (max-width: 768px) {
  .footer-container {
    display: none !important;
  }

  .arrow-bounce {
    display: none !important;
  }

  .footer-content {
    opacity: 1 !important;
    transition: none !important;
  }

  .footer-container.active {
    transition: none !important;
  }
}
</style>