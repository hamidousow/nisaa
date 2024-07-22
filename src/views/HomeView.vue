<script setup lang="ts">

import HeroComponent from "@/components/HeroComponent.vue";
import womanOne from "@/assets/images/woman-1.jpg";
import masjid from "@/assets/images/masjid.jpg";
import WrapImageText from '@/components/WrapImageText.vue';
</script>

<template>
  <HeroComponent />
  <main>
    <section id="section-box-arguments" class=" container">
      <h1 class="section-title abril-fatface-font">Découvrez notre box !</h1>
      <WrapImageText :img-src="womanOne" :img-alt="'woman'" :title="'La box mensuelle qui te veut du bien'"
        :text="'Produits de soin, cosmétiques, accessoires, lectures, bien-être, et d\'autres surprises t\'attendent !'" />
      <WrapImageText :img-src="masjid" :img-alt="'masjid'"
        :title="'La box qui se préoccupe aussi de ta beauté intérieur'"
        :text="'Ta box Nisaa a la modeste ambition d\'éveiller ta curiosité et t\'encourage à en apprendre davantage sur la religion musulmane.'"
        :text-background-color="'bg-clr-maroon'" />
    </section>

  </main>
</template>

<style scoped>
.section-title {
  font-size: 29px;
  margin: 25px 0 35px;
  text-align: center;
}
</style>
