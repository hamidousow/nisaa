<script lang="ts" setup>
import boxClosed from '@/assets/images/box-close.svg';
import gsap from 'gsap';
import { onBeforeMount, onMounted } from 'vue';

function fadeTitle() {

    gsap.to('.sticky-title', {
        opacity: 0
    })
}

onMounted(() => {
    window.addEventListener('scroll', fadeTitle)
})

onBeforeMount(() => {
    window.removeEventListener('scroll', fadeTitle)
})

</script>
<template>
    <section class="container-title" :on-scroll="fadeTitle">
        <!-- <span class="subtitle futura-regular-font">Découvres la</span> -->
        <h1 class="h1 abril-fatface-font clr-maroon sticky-title">Box du mois</h1>

    </section>
    <section class="container-box">
        <div class="container-box box-products">
            <img :src="boxClosed" alt="box nisaa" class="box-image">
        </div>
    </section>
</template>


<style scoped>
.container-title {
    height: 100vh;
    width: 100%;
}

.container-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

/* .container-box {
    min-height: 100vh;
} */

.subtitle {
    font-size: clamp(25px, 10vw, 55px);
    text-align: center;
}

.sticky-title {
    font-size: clamp(55px, 10vw, 100px);
    text-align: center;
    position: sticky;
    top: 0;
    padding-top: 40vh;
}


.box-image {
    margin-top: 60px;
    display: block;
    height: 250px;
    /*position: sticky;
    top: 250px;*/
}
</style>