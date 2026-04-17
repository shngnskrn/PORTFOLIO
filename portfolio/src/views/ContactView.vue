<template>
  <main class="contact-page">
    <div class="contact-layout">
      <div class="contact-left">
        <h2 class="page-title">Let's Connect</h2>
        <p class="contact-intro">Open to new opportunities, collaborations, and interesting conversations.</p>
        <div class="contact-qr">
          <img src="../assets/images/qr.png" alt="QR Code" class="qr-code">
        </div>
        <div class="contact-details">
          <div class="detail-row">
            <span class="detail-label">Email</span>
            <a href="mailto:your@email.com" class="detail-value">your@email.com</a>
          </div>
          <div class="detail-row">
            <span class="detail-label">Phone</span>
            <a href="tel:+1234567890" class="detail-value">+45 12 34 56 78</a>
          </div>
        </div>
      </div>
      <div class="contact-logo">
        <img src="../assets/images/4k-logo.webp" alt="Logo" class="logo">
      </div>      
    </div>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)

function handleSubmit() {
  // Connect to your backend or email service here
  console.log('Form submitted:', { ...form })
  submitted.value = true
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  padding: calc(var(--nav-height) + 4rem) 6vw 6rem;
  display: flex;
  flex-direction: column;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 8rem;
  align-items: stretch;
  flex: 1;
}

.page-title {
  font-family: var(--font-script);
  font-size: clamp(1.5rem, 5vw, 4rem);
  font-weight: 400;
  line-height: 1.05;
  margin-bottom: 1.5rem;
  white-space: nowrap;
}

.contact-intro {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.7;
  margin-bottom: 3rem;
}

.contact-left {
  display: flex;
  flex-direction: column;
}

.contact-qr {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.qr-code {
  width: 250px;
  height: 250px;
  object-fit: contain;
}

.contact-logo {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.logo {
  width: 400px;
  height: 400px;
  object-fit: contain;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.contact-details {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 450px;
}

.detail-row {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  padding-bottom: 1rem;
}

.detail-label {
  font-family: var(--font-nav);
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  color: var(--gray-text);
  width: 70px;
  flex-shrink: 0;
}

.detail-value {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: rgba(255,255,255,0.75);
  transition: color 0.2s;
}

a.detail-value:hover {
  color: var(--white);
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-page {
    padding-bottom: 140px;
  }
}
</style>
