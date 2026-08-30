<script setup>
import { ref } from 'vue'

const title = ref('Newton Transport Plan')
</script>

<template>
  <main class="app-shell">
    <section class="welcome-card">
      <p class="eyebrow">Vue 3 + Vite</p>
      <h1>{{ title }}</h1>
      <p>
        Your project scaffold is ready. Start building the transport plan here.
      </p>
    </section>
  </main>
</template>

