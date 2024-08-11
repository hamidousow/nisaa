<script lang="ts" setup>
import boxClosed from '@/assets/images/box-close.svg';
</script>
<template>
    <section class="box-presentation">
        <span class="subtitle futura-regular-font">Découvres la</span>
        <h1 class="h1 abril-fatface-font clr-maroon">Box du mois</h1>
        <img :src="boxClosed" alt="box nisaa" class="box-image">
        <div class="box-products">

        </div>
    </section>
</template>


<style scoped>
.box-presentation {
    min-height: 80dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.subtitle {
    font-size: clamp(25px, 10vw, 55px);
    text-align: center;
}

.h1 {
    font-size: clamp(55px, 10vw, 100px);
    text-align: center;
    position: sticky;
    top: 191px;
}

.box-image {
    margin-top: 60px;
    display: block;
    height: 250px;
    position: sticky;
    top: 250px;
}
</style>