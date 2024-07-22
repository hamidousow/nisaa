<script setup lang="ts">
import ImageComponent from '@/components/ImageComponent.vue';

const props = defineProps(["imgSrc", "imgAlt", "title", "text"])
</script>

<template>
    <div class="wrap-iamge-text">
        <ImageComponent :src="props.imgSrc" :alt="props.imgAlt" class="border-white" />
        <div class="wrap-title-text">
            <h2 class="title-h2 abril-fatface-font ">{{ props.title }}</h2>
            <p class="text futura-regular-font">{{ props.text }}</p>
        </div>
    </div>
</template>

<style scoped>
.border-white {
    border: 8px solid var(--clr-white);
    border-radius: 3px;
}

.wrap-title-text {
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
}

.title-h2 {
    font-size: 21px;
    line-height: 100%;
}

.text {
    font-size: 16px;
}
</style>