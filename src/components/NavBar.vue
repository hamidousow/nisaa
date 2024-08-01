<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconCart from '@/components/icons/IconCart.vue';
import IconButton from '@/components/icons/IconButton.vue';
import nissaLogo from '@/assets/images/nisaa-logo.svg';

const isMenuOpen = ref(false);


const menuActive = ref("nav-menu active");

const btnContent = ref("menu")

</script>

<template>
    <nav class="nav">
        <div class="nav-content container">
            <RouterLink to="/" @click="isMenuOpen = false">
                <img :src="nissaLogo" alt="nisaa logo" class="nav-brand">
            </RouterLink>
            <ul :class="[isMenuOpen ? menuActive : 'nav-menu']">
                <li class="menu-link">
                    <RouterLink to="/" @click="isMenuOpen = false" class="abril-fatface-font"> panier (0)
                    </RouterLink>
                </li>
                <li class="menu-link">
                    <RouterLink to="/" @click="isMenuOpen = false" class="abril-fatface-font"> l'histoire de nisaa
                    </RouterLink>
                </li>
                <li class="menu-link">
                    <RouterLink to="/" @click="isMenuOpen = false" class="abril-fatface-font">la box du mois
                    </RouterLink>
                </li>
                <li class="menu-link">
                    <RouterLink to="/" @click="isMenuOpen = false" class="abril-fatface-font">contact</RouterLink>
                </li>
            </ul>
            <div class="utils-wrapper">
                <div class="menu-utils">
                    <!-- <IconSearch /> -->
                    <IconCart />
                </div>
                <span class="btn-toggle-menu" @click="isMenuOpen = !isMenuOpen">
                    <span class="toggle-menu abril-fatface-font"
                        v-if="isMenuOpen ? btnContent = 'close' : btnContent = 'menu'"
                        :class="[isMenuOpen ? 'clr-maroon' : 'clr-green']">
                        {{ btnContent }}</span>
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
    fill: var(--clr-maroon);
    color: var(--clr-maroon);
    z-index: 10;
}

.nav-menu {
    display: none;
    height: 100vh;
    flex-direction: column;
    position: absolute;
    align-items: flex-end;
    top: 0;
    right: 0;
    left: 0;
    padding: 25px;
    background-color: var(--clr-green);
    row-gap: 15px;

}

.nav-menu.active {
    display: flex;
    justify-content: center;
    z-index: -10;
}

.menu-link {
    list-style: none;
}

.menu-link a {
    color: var(--clr-maroon);
    text-decoration: none;
    font-size: 31px;
    font-weight: 500;
    text-transform: uppercase
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

.toggle-menu {
    font-size: 25px;
}



@media screen and (min-width: 768px) {

    .nav-menu {
        display: flex;
        position: initial;
        flex-direction: row;
        width: auto;
        height: auto;
        column-gap: 20px;
        flex: 1;
        padding: 0 15px;
        background-color: transparent;
        justify-content: center;
    }

    .menu-link a {
        color: var(--clr-green);
        text-decoration: none;
        font-size: 21px;
    }

    .btn-toggle-menu {
        display: none;
    }
}
</style>