<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import IconCart from '@/components/icons/IconCart.vue';
import nissaLogo from '@/assets/images/nisaa-logo.svg';
import IconFacebook from './icons/IconFacebook.vue';
import IconInstagram from './icons/IconInstagram.vue';

const isMenuOpen = ref(false);


const menuActive = ref("container-menu active");

const btnContent = ref("menu")

</script>

<template>
    <nav class="nav">
        <div class="nav-content">
            <RouterLink to="/" @click="isMenuOpen = false">
                <img :src="nissaLogo" alt="nisaa logo" class="nav-brand">
            </RouterLink>

            <div class="utils-wrapper">
                <div class="menu-utils">
                    <IconCart />
                </div>
                <span class="btn-toggle-menu toggle-menu abril-fatface-font" @click="isMenuOpen = !isMenuOpen"
                    v-if="isMenuOpen ? btnContent = 'close' : btnContent = 'menu'"
                    :class="[isMenuOpen ? 'clr-maroon' : 'clr-green']">
                    {{ btnContent }}</span>
            </div>
        </div>
        <div :class="[isMenuOpen ? menuActive : 'container-menu']">

            <div class="menu">

                <RouterLink to="/" @click="isMenuOpen = false" class="abril-fatface-font menu__link"> panier (0)
                </RouterLink>
                <ul class="menu__list">

                    <li>
                        <RouterLink to="/" @click="isMenuOpen = false" class="abril-fatface-font menu__link"> l'histoire
                            de nisaa
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" @click="isMenuOpen = false" class="abril-fatface-font menu__link">la box du
                            mois
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" @click="isMenuOpen = false" class="abril-fatface-font menu__link">contact
                        </RouterLink>
                    </li>
                </ul>
                <div class="menu-footer">
                    <div class="container_social-links">
                        <ul class="social-links__list">
                            <li>
                                <RouterLink to="/">
                                    <IconFacebook />
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/">
                                    <IconInstagram />
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>



<style scoped>
.nav {
    display: flex;
    flex-direction: row;
    align-content: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
    justify-content: space-around;
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

.container-menu {
    display: none;
}

.container-menu.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100vh;
    width: 100%;
    inset: 0;
		padding: 25px;
    padding-top: 120px;
    background-color: var(--clr-green);
    z-index: -10;
}

.menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    row-gap: 125px;
}

.menu__list {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
}

.menu__link,
.menu__list li {
    list-style: none;
    text-align: right;
    color: var(--clr-maroon);
    text-decoration: none;
    font-size: 27px;
    font-weight: 500;
    text-transform: uppercase;
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

.social-links__list {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
}

.btn-toggle-menu {
    text-transform: uppercase;
}

.btn-toggle-menu {
    cursor: pointer;
}

@media screen and (min-width: 768px) {

    .menu {
        max-width: 1480px;
        margin: 0 auto;
        height: 100%;
        padding: 20px;
    }

    .menu__list .menu__link {
        font-size: 70px !important;
    }
}
</style>