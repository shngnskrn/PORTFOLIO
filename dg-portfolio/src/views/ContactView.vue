<template>
  <main class="contact-page">
    <div class="contact-layout">
      <div class="contact-left">
        <h2 class="page-title">Let's Connect</h2>
        <p class="contact-intro">Open to new opportunities, collaborations, and interesting conversations.</p>
        <div class="contact-details">
          <div class="detail-row">
            <span class="detail-label">Email</span>
            <a href="mailto:your@email.com" class="detail-value">senthoorandilshan@gmail.com</a>
          </div>
          <div class="detail-row">
            <span class="detail-label">Phone</span>
            <a href="tel:+1234567890" class="detail-value">+45 55 60 29 01</a>
          </div>
          <div class="social-links">
            <a href="https://linkedin.com/in/dilshan-gunasekaran" target="_blank" class="social-icon" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
            <a href="https://instagram.com/shngnskrn" target="_blank" class="social-icon" title="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.217.63c-.688.297-1.272.702-1.855 1.285-.583.583-.988 1.167-1.285 1.855-.297.688-.498 1.558-.56 2.837C.008 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.56 2.837.297.711.703 1.275 1.285 1.855.583.583 1.167.99 1.855 1.287.688.297 1.559.499 2.837.559C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.837-.559.711-.297 1.275-.704 1.855-1.287.583-.58.99-1.165 1.287-1.855.297-.689.499-1.559.559-2.837.063-1.28.08-1.687.08-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.559-2.837-.297-.711-.704-1.275-1.287-1.855-.58-.583-1.165-.99-1.855-1.287-.689-.297-1.559-.499-2.837-.559C15.667.008 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07l0 0z" />
                <circle cx="12" cy="12" r="3.846" />
                <circle cx="18.406" cy="5.594" r=".9" />
              </svg>
            </a>
            <a href="https://facebook.com/aintnoshan" target="_blank" class="social-icon" title="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="contact-right">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <input v-model="form.name" type="text" placeholder="Your Name" class="form-input" required />
          </div>

          <div class="form-group">
            <input v-model="form.email" type="email" placeholder="Your Email" class="form-input" required />
          </div>

          <div class="form-group">
            <textarea v-model="form.message" placeholder="Your Message" class="form-textarea" rows="6"
              required></textarea>
          </div>

          <button type="submit" class="form-submit" :disabled="loading">
            {{ loading ? 'Sending...' : 'Send Message' }}
          </button>

          <p v-if="submitted" class="success-message">Thank you! Your message has been sent.</p>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import emailjs from '@emailjs/browser'

onMounted(() => {
  emailjs.init('NbNO3rLg8dvFpuv8h')
})

const form = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)
const loading = ref(false)

async function handleSubmit() {
  loading.value = true
  try {
    await emailjs.send(
      'service_dg_portfolio',      // From EmailJS dashboard
      'template_8wdi6pq',     // From EmailJS dashboard
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: 'senthoorandilshan@gmail.com'
      }
    )
    submitted.value = true
    form.name = ''
    form.email = ''
    form.message = ''
    setTimeout(() => { submitted.value = false }, 5000)
  } catch (error) {
    console.error('Failed to send email:', error)
  } finally {
    loading.value = false
  }
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
  grid-template-columns: minmax(350px, 1.2fr) 1fr;
  gap: 8rem;
  align-items: stretch;
  flex: 1;
}

.page-title {
  font-family: var(--font-script);
  font-size: clamp(1.8rem, 5.5vw, 4.5rem);
  font-weight: 400;
  line-height: 1.05;
  margin-bottom: 1.5rem;
  white-space: nowrap;
}

.contact-intro {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.7;
  margin-bottom: 3rem;
}

.contact-left {
  display: flex;
  flex-direction: column;
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
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

.social-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.social-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.2s;
}

.social-icon:hover {
  color: var(--white);
}

.social-icon svg {
  width: 100%;
  height: 100%;
}

.detail-value {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
  transition: color 0.2s;
}

a.detail-value:hover {
  color: var(--white);
}

.contact-right {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  min-width: 450px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-input,
.form-textarea {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.9);
  padding: 0.75rem 1rem;
  font-family: var(--font-body);
  font-size: 0.95rem;
  transition: border-color 0.2s, background 0.2s;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.08);
}

.form-submit {
  background: var(--white);
  color: var(--black);
  border: 1px solid var(--white);
  padding: 0.9rem 2rem;
  font-family: var(--font-nav);
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  margin-top: 0.5rem;
}

.form-submit:hover:not(:disabled) {
  background: transparent;
  color: var(--white);
}

.form-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-message {
  color: rgba(100, 255, 150, 0.8);
  font-size: 0.9rem;
  text-align: center;
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

  .contact-form {
    max-width: 100%;
  }
}
</style>
