<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div>
    <NavBar />
    <RouterView />
    <FooterComponent />
  </div>
</template>

<style>
.main {
  min-height: 100vh;
}
</style>
