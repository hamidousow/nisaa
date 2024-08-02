<script lang="ts" setup>
import heroImage from "@/assets/images/femme-background-detouree.webp"
import Button from "@/components/ButtonCta.vue";
</script>

<template>
    <div id="hero" class="bg-clr-maroon">
        <div class="hero-content container">
            <div class="hero-left">
                <h1 class="hero-title abril-fatface-font">Le soin du corps et de l'esprit</h1>
                <p class="hero-text futura-regular-font">Découvre la première box beauté et lifestyle inspirée des
                    principes et
                    valeurs de l'islam.</p>
                <Button path="/">Découvrez nos produits</Button>
            </div>
            <div class="hero-container-image">
                <img :src="heroImage" alt="femme">
            </div>
        </div>

    </div>
</template>



<style>
.hero-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    row-gap: 30px;
    height: 550px;
    width: 100%;

    padding-top: 85px;
    padding-bottom: 0;

    overflow: hidden;
}

.hero-left {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.hero-title {
    font-size: clamp(27px, 2vw, 50px);
    font-weight: 500;
}

.hero-text {
    font-size: clamp(16px, 2vw, 30px);
}

.hero-container-image {
    width: 100%;
    height: 100%;
    /* max-height: 250px; */
    position: relative;
}

.hero-container-image img {
    position: absolute;
    bottom: 0;
    display: block;
    width: auto;
    height: 100%;
}

.button {
    align-self: center;
    border-radius: 3px;
}

@media screen and (min-width: 567px) {

    .hero-content {
        flex-direction: row;
        height: 550px;
        width: 100%;
        padding-bottom: 0;
        overflow: hidden;
    }

    .hero-left {
        row-gap: 20px;
        z-index: 1;
        justify-content: center;
        flex: 2;
    }

    .hero-container-image {
        max-height: inherit;
        flex: 1;
    }

    .hero-container-image img {
        right: -60%;
    }

    .button {
        align-self: flex-start;
    }
}

@media screen and (min-width: 768px) {

    .hero-container-image img {
        right: 0;
    }
}

@media screen and (min-width: 992px) {
    .hero-content {
        height: 80vh;
    }

    .hero-left {
        row-gap: 20px;
        z-index: 1;
        justify-content: center;
        flex: 1;
    }

    .hero-title {
        font-size: 50px;
    }

    .hero-text {
        font-size: 30px;
    }
}
</style>