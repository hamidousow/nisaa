<script setup lang="ts">

const path = defineProps(['path'])
</script>

<template>
    <RouterLink :to="path" class="button">
        <slot></slot>
    </RouterLink>
</template>

<style scoped>
.button {
    display: block;
    width: fit-content;
    background-color: var(--clr-green);
    padding: 10px 20px;
    color: var(--clr-white);
    /* margin: 15px 0; */
    text-decoration: none;
}
</style>