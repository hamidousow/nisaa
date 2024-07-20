<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);

const menuOpen = ref("menu-open");


</script>

<template>
    <nav class="nav">
        <div class="nav-content">
            <a href="/" @clic="isMenuOpen = false">
                <img src="" alt="nisaa logo">
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
            <div class="menu-utils">
                <div>recherche</div>
                <div>panier</div>
            </div>
            <span class="btn-toggle-menu" @click="isMenuOpen = !isMenuOpen">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="#e8eaed">
                    <path d="M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z" />
                </svg>
            </span>
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

.nav-menu {
    display: none;

}

.menu-link {
    list-style: none;

}

.menu-link a {
    color: var(--clr-green);
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
}
</style>