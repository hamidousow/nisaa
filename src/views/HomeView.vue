<script setup lang="ts">

import HeroComponent from "@/components/HeroComponent.vue";
import womanOne from "@/assets/images/woman-1.jpg";
import masjid from "@/assets/images/masjid.jpg";
import WrapImageText from '@/components/WrapImageText.vue';
</script>

<template>
  <HeroComponent />
  <main>
    <div id="section-box-arguments" class=" container">
      <!-- <h1 class="section-title abril-fatface-font">Découvrez notre box !</h1> -->
      <WrapImageText :img-src="womanOne" :img-alt="'woman'" :title="'La box mensuelle qui te veut du bien'"
        :text="'Produits de soin, cosmétiques, accessoires, lectures, bien-être, et d\'autres surprises t\'attendent !'" />
      <WrapImageText :img-src="masjid" :img-alt="'masjid'"
        :title="'La box qui se préoccupe aussi de ta beauté intérieur'"
        :text="'Ta box Nisaa a la modeste ambition d\'éveiller ta curiosité et t\'encourage à en apprendre davantage sur la religion musulmane.'"
        :text-background-color="'bg-clr-maroon'" />
    </div>

  </main>
</template>

<style>
.section-title {
  font-size: 29px;
  margin: 25px 0 35px;
  text-align: center;
}

@media screen and (min-width: 768px) {

  #section-box-arguments {
    position: relative;
    top: -65px;
  }

  .wrap-image-text {
    display: flex !important;
    flex-direction: row !important;
    margin-bottom: 75px;
  }

  .wrap-title-text {
    justify-content: center !important;
    padding: 30px !important;
    position: relative;
    top: 0 !important;
    justify-content: center;
  }

  .wrap-image-text:nth-child(2) {
    display: flex !important;
    flex-direction: row-reverse !important;
    margin-bottom: 75px;
  }

  .wrap-image-text:nth-child(2) .wrap-title-text {
    padding-right: 90px !important;
    position: relative;
    top: 0 !important;
    justify-content: center;
    left: 80px;
    top: 80px !important;
  }


}
</style>
