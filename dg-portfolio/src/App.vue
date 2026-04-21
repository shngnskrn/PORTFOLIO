<template>
  <video autoplay muted loop class="page-video">
    <source src="./assets/videos/hero-video.webm" type="video/webm">
  </video>
  <NavBar />
  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.page-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  opacity: 0.4;
  pointer-events: none;
}
</style>