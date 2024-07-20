<script lang="ts" setup>
import heroImage from "@/assets/images/femme-background-detouree.png"
import Button from "@/components/ButtonCta.vue";
</script>

<template>
    <header>
        <div class="header-content container">
            <div class="header-left">
                <h1 class="title abril-fatface-font">Le soin du corps et de l'esprit</h1>
                <p class="futura-regular-font">Découvre la première box beauté et lifestyle inspirée des principes et
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
    background-color: var(--clr-maroon);
    height: 80vh;
    height: 550px;
    width: 100%;
    position: relative;
    padding-top: 85px;
}

.header-left {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.header-container-image {
    width: 100%;
    height: 220px;
    position: absolute;
    bottom: 0;
    right: 0;
}

.header-container-image img {
    display: block;
    width: auto;
    height: 100%;
    margin-left: auto;
}

.button {
    align-self: center;
}
</style>