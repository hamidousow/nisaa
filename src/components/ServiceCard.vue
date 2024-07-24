<script setup lang="ts">
const props = defineProps(["imgSrc", "imgAlt", "text"])
</script>

<template>
    <div class="service-card">

        <img :src="props.imgSrc" :alt="props.imgAlt">

        <div class="card-body">
            <p>{{ props.text }}</p>
        </div>
    </div>
</template>

<style scoped>
.service-card {
    display: grid;
    grid-template-rows: 50px auto;
    padding: 20px;
    row-gap: 7px;
    /* border: 1px solid var(--clr-green); */
    border-radius: 3px;
}

.service-card img {
    width: 80%;
    height: 80%;
    margin: auto;
    max-width: 100px;
}

@media screen {
    .service-card {
        max-width: 300px;
        height: auto;
    }
}
</style>