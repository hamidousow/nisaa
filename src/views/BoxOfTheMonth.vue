<script lang="ts" setup>
import gsap from 'gsap';
import { onBeforeMount, onMounted } from 'vue';
import masque from "@/assets/images/masque.png";

const products = [
    {
        name: "masque",
        image: masque,
        description: "une petitedescription"
    }
]


function fadeTitle() {
    if (window.scrollY > 0) {
        gsap.to('.sticky-title', {
            opacity: 0,
            duration: 1
        })
    } else if (window.scrollY <= 0) {
        gsap.to('.sticky-title', {
            opacity: 1,
            duration: 1
        })
    }
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
        <div class="wrapper-content">
            <div class="wrapper-items">
                <div class="item">
                    <p>image du produit</p>
                    <h2>Nom du produit</h2>
                </div>
            </div>
            <div class="container-box box-products">
                <img :src="masque" alt="box nisaa" class="box-image">
            </div>
            <div class="product-description">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus aspernatur atque cumque expedita
                    consequuntur </p>
            </div>
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
    height: 100dvh;
}

.box-products {
    min-height: 100vh;
}

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

.wrapper-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.box-image {
    margin-top: 60px;
    display: block;
    height: 250px;
}

.wrapper-items {
    display: flex;
    flex-direction: column;
}
</style>