<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconCart from '@/components/icons/IconCart.vue';
import IconButton from '@/components/icons/IconButton.vue';
import nissaLogo from '@/assets/images/nisaa-logo.svg';

const isMenuOpen = ref(false);

const menuOpen = ref("menu-open");


</script>

<template>
    <nav class="nav">
        <div class="nav-content">
            <a href="/" @clic="isMenuOpen = false">
                <img :src="nissaLogo" alt="nisaa logo" class="nav-brand">
            </a>
            <ul :class="[isMenuOpen ? 'menu-open' : 'nav-menu']">
                <li class="menu-link">
                    <RouterLink to="/"> l'histoire de nisaa </RouterLink>
                </li>
                <li class="menu-link">
                    <RouterLink to="/" @clic="isMenuOpen = false">les sagesses</RouterLink>
                </li>
                <li class="menu-link">
                    <RouterLink to="/" @clic="isMenuOpen = false">la box du mois</RouterLink>
                </li>
                <li class="menu-link">
                    <RouterLink to="/" @clic="isMenuOpen = false">contact</RouterLink>
                </li>
            </ul>
            <div class="utils-wrapper">
                <div class="menu-utils">
                    <IconSearch />
                    <IconCart />
                </div>
                <span class="btn-toggle-menu" @click="isMenuOpen = !isMenuOpen">
                    <IconButton />
                </span>
            </div>
        </div>
    </nav>
</template>



<style>
.nav {
    display: flex;
    flex-direction: row;
    align-content: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: var(--clr-maroon);
    z-index: 99;
}

.nav-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    padding: 20px;
    max-width: 1480px;
    position: relative;
}

.nav-brand {
    width: 60px;
    fill: var(--clr-green);
    color: var(--clr-green);
}

.nav-menu {
    display: none;
    visibility: hidden;
    transition: .5s;

}

.menu-link {
    list-style: none;

}

.menu-link a {
    color: var(--clr-green);
}

.utils-wrapper {
    display: flex;
    flex-direction: row;
    column-gap: 30px;
}

.menu-utils {
    display: flex;
    flex-direction: row;
    column-gap: 15px;
}

.menu-open {
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    top: 65px;
    right: 0;
    left: 0;
    padding: 25px;
    background-color: var(--clr-maroon);
    row-gap: 15px;
    visibility: visible;

}
</style>