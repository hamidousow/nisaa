<script setup lang="ts">

const props = defineProps(["title", "text", "bgCardHeader"])
</script>

<template>
    <RouterLink to="/" class="card-link">
        <div class="card-link__header" :class="props.bgCardHeader">
            <slot></slot>
        </div>
        <div v-if="props.title || props.text" class="card-link__body">
            <h3 class="card-link__title">{{ props.title }}</h3>
            <p class="card-link__text">{{ props.text }}</p>
        </div>
    </RouterLink>
</template>

<style>
.card-link {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    aspect-ratio: 3/2;
}

.card-link__header {
    max-height: 400px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-link img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-link .card-link__body {
    padding: 10px;
}

.card-link .card-link__title,
.card-link .card-link__text {
    color: var(--clr-green);
}

.card-link .card-link__title {
    font-size: clamp(14px, 2vw, 19px);
}

.card-link .card-link__text {
    font-size: clamp(12px, 2vw, 17px);
}
</style>