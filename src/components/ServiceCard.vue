<script setup lang="ts">
const props = defineProps(["imgSrc", "imgAlt", "text"])
</script>

<template>
    <div class="service-card">
        <div class="container-img">
            <img :src="props.imgSrc" :alt="props.imgAlt">
        </div>

        <div class="card-body">
            <p>{{ props.text }}</p>
        </div>
    </div>
</template>

<style scoped>
.service-card {
    display: flex;
    flex-direction: column;
    padding: 20px;
    row-gap: 7px;
    max-width: 300px;
    height: 250px;
}

.service-card .container-img {
    height: 50px;
}

.service-card .container-img img {
    display: block;
    width: 80%;
    height: 80%;
    margin: auto;
    max-width: 100px;
}

@media screen and (min-width: 768px) {
    .service-card {
        display: flex;
        flex-direction: column;
        padding: 20px;
        row-gap: 7px;
        max-width: 300px;
        height: 230px;
    }
}
</style>