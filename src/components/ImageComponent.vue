<script setup lang="ts">

const props = defineProps(["src", "alt"])

</script>


<template>
    <div class="container-image">
        <img :src="props.src" :alt="props.alt">
    </div>
</template>

<style scoped>
.container-image {
    max-width: 645px;
    max-height: 430px;
}

.container-image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>