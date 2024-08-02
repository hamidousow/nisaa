<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div>
    <NavBar />
    <main id="main" class="main">
      <RouterView />
    </main>

    <FooterComponent />
  </div>
</template>

<style>
.main {
  min-height: 100vh;
}
</style>
