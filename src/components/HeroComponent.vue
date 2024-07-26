<script lang="ts" setup>
import heroImage from "@/assets/images/femme-background-detouree.webp"
import Button from "@/components/ButtonCta.vue";
</script>

<template>
    <header class="bg-clr-maroon">
        <div class="header-content container">
            <div class="header-left">
                <h1 class="header-title abril-fatface-font">Le soin du corps et de l'esprit</h1>
                <p class="header-text futura-regular-font">Découvre la première box beauté et lifestyle inspirée des
                    principes et
                    valeurs de l'islam.</p>
                <Button path="/">Découvrez nos produits</Button>
            </div>
            <div class="header-container-image">
                <img :src="heroImage" alt="femme">
            </div>
        </div>

    </header>
</template>



<style>
.header-content {
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

.header-left {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.header-title {
    font-size: clamp(27px, 2vw, 50px);
    font-weight: 500;
}

.header-text {
    font-size: clamp(16px, 2vw, 30px);
}

.header-container-image {
    width: 100%;
    height: 100%;
    /* max-height: 250px; */
    position: relative;
}

.header-container-image img {
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

    .header-content {
        flex-direction: row;
        height: 550px;
        width: 100%;
        padding-bottom: 0;
        overflow: hidden;
    }

    .header-left {
        row-gap: 20px;
        z-index: 1;
        justify-content: center;
        flex: 2;
    }

    .header-container-image {
        max-height: inherit;
        flex: 1;
    }

    .header-container-image img {
        right: -60%;
    }

    .button {
        align-self: flex-start;
    }
}

@media screen and (min-width: 768px) {

    .header-container-image img {
        right: 0;
    }
}

@media screen and (min-width: 992px) {
    .header-content {
        height: 80vh;
    }

    .header-left {
        row-gap: 20px;
        z-index: 1;
        justify-content: center;
        flex: 1;
    }

    .header-title {
        font-size: 50px;
    }

    .header-text {
        font-size: 30px;
    }
}
</style>