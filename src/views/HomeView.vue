<script setup lang="ts">

import HeroComponent from "@/components/HeroComponent.vue";
import womanOne from "@/assets/images/woman-1.jpg";
import masjid from "@/assets/images/masjid.jpg";
import WrapImageText from '@/components/WrapImageText.vue';
import nisaaBox from "@/assets/images/nisaa-box.jpg";
import woman4 from "@/assets/images/woman-makeup.png";
import ServiceCard from "@/components/ServiceCard.vue";
import bioImg from "@/assets/images/icon-eco.svg";
import handsCare from "@/assets/images/icon-hands-care.svg";
import ButtonCta from "@/components/ButtonCta.vue";
import CardLink from "@/components/CardLink.vue";
import CommentComponent from "@/components/CommentComponent.vue";

</script>

<template>
  <HeroComponent />
  <main class=" container">
    <div id="section-box-arguments" class=" mb-130">

      <WrapImageText :img-src="womanOne" :img-alt="'woman'" :title="'La box mensuelle qui te veut du bien'"
        :text="'Produits de soin, cosmétiques, accessoires, lectures, bien-être, et d\'autres surprises t\'attendent !'" />
      <WrapImageText :img-src="masjid" :img-alt="'masjid'"
        :title="'La box qui se préoccupe aussi de ta beauté intérieur'"
        :text="'Ta box Nisaa a la modeste ambition d\'éveiller ta curiosité et t\'encourage à en apprendre davantage sur la religion musulmane.'"
        :text-background-color="'bg-clr-maroon'" />
    </div>
    <section class="mb-130">
      <h2 class="h2 abril-fatface-font mb-60"> Produits de soi, cosmétiques, accessoires, lectures, bien-être
        et d’autres surprises t’attendent !</h2>
      <div class="container-image-shaped">
        <img :src="woman4" alt="woman make up">
      </div>
    </section>
    <section class="section-services mb-130">
      <h2 class="h2 abril-fatface-font mb-60"><span class="text-underline"> Chaque mois </span>, tu recevras <span
          class="text-underline"> 5 essentiels
        </span>soigneusement
        sélectionnés qui te permettront de méditer et prendre soin de toi.</h2>
      <div class="grid-services mb-30">
        <ServiceCard :img-src="bioImg" :img-alt="'icon bio'"
          :text="'Nous sélectionnons des produits de beauté qui te veulent du bien: naturels, bios, éthiques.'" />
        <ServiceCard :img-src="handsCare" :img-alt="'icon bio'"
          :text="'Retrouve dans chaque box l\'article Niya [نية] faisant écho à la thématique religieuse.'" />
        <ServiceCard :img-src="bioImg" :img-alt="'icon bio'"
          :text="'Nous sélectionnons des produits de beauté qui te veulent du bien: naturels, bios, éthiques.'" />
      </div>
      <ButtonCta :path="'/'" class="mt">Je m'abonne !</ButtonCta>
    </section>
    <section class="section-quick-shop mb-60">
      <CardLink :title="'la box du mois'" :text="'34.95€'">
        <img :src="nisaaBox" alt="box nisaa box">
      </CardLink>
      <CardLink :bg-card-header="'bg-clr-maroon'">
        <h2 class="card-link__header__title abril-fatface-font">découvres <br> les box <br> précédentes</h2>
      </CardLink>
    </section>
    <section class="section-comments mb-130">
      <h2 class="h2 abril-fatface-font mb-60">Vos retours</h2>
      <CommentComponent />
    </section>

  </main>
</template>

<style scoped>
.h2 {
  font-size: clamp(21px, 2vw, 29px);
  text-align: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.container-image-shaped img {
  display: block;
  width: 75%;
  height: 75%;
  max-width: 820px;
  max-height: 420px;
  /* object-fit: cover; */
  margin: auto;
}

.grid-services {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  align-items: center;
  justify-content: center;
}

.section-services .button {
  margin: auto;
}

.section-quick-shop {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 10px;
}

.card-link__header__title {
  text-align: center;
  color: var(--clr-green);
  text-transform: uppercase;
  font-size: clamp(19px, 3vw, 39px);
  padding: 10px;
}

@media screen and (min-width: 568px) {

  .grid-services {
    flex-direction: row;
    column-gap: 12px;
  }
}



@media screen and (min-width: 768px) {

  #section-box-arguments {
    position: relative;
    top: -65px;
  }
}
</style>
