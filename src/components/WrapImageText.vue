<script setup lang="ts">
import ImageComponent from '@/components/ImageComponent.vue';

const props = defineProps(["imgSrc", "imgAlt", "title", "text", "textColor", "textBackgroundColor"])
</script>

<template>
    <div class="wrap-image-text">
        <ImageComponent :src="props.imgSrc" :alt="props.imgAlt" class="border-white" />
        <div class="wrap-title-text" :class="[props.textBackgroundColor]">
            <h2 class="title-h2 abril-fatface-font" :class="[props.textColor]">{{ props.title }}
            </h2>
            <p class="text futura-regular-font" :class="[props.textColor]">{{ props.text }}</p>
        </div>
    </div>
</template>

<style scoped>
.border-white {
    border: 8px solid var(--clr-white);
    border-radius: 3px;
}

.container-image {
    width: 80%;
    /* margin: auto; */
}

.wrap-image-text {
    display: grid;
    grid-template-rows: 1fr auto;
}

.wrap-title-text {
    /* margin: 15px 0; */
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    padding: 40px 10px 10px;
    position: relative;
    top: -20px;
    justify-content: flex-end;
    z-index: -2;
    width: 80%;
    margin-left: auto;
    border-radius: 3px;
}

.title-h2 {
    font-size: 21px;
    line-height: 100%;
}

.text {
    font-size: clamp(16px, 2vw, 19px);
}

@media screen and (min-width: 768px) {

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