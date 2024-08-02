<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import IconCart from '@/components/icons/IconCart.vue';
import nissaLogo from '@/assets/images/nisaa-logo.svg';
import IconFacebook from './icons/IconFacebook.vue';
import IconInstagram from './icons/IconInstagram.vue';
import { gsap } from "gsap";

const isMenuOpen = ref(false);


const menuActive = ref("container-menu active");

const btnContent = ref("menu");




function toggleMenu() {
    if (isMenuOpen.value == false) {
        isMenuOpen.value = true
        gsap.to(".container-menu", { height: "100vh", duration: .5, display: "flex" })
        gsap.to(".menu", { opacity: 1, delay: .2, duration: .2 })

    } else {
        isMenuOpen.value = false
        gsap.to(".menu", { opacity: 0, duration: .1 })
        gsap.to(".container-menu", { height: 0, delay: .2, duration: .2, display: "none" })
    }
}

</script>

<template>
    <nav class="nav">
        <div class="nav-content">
            <RouterLink to="/" @click="isMenuOpen = !isMenuOpen">
                <img :src="nissaLogo" alt="nisaa logo" class="nav-brand">
            </RouterLink>

            <div class="utils-wrapper">
                <div class="menu-utils">
                    <IconCart />
                </div>
                <span class="btn-toggle-menu toggle-menu abril-fatface-font" @click="toggleMenu"
                    v-if="isMenuOpen ? btnContent = 'close' : btnContent = 'menu'"
                    :class="[isMenuOpen ? 'clr-maroon' : 'clr-green']">
                    {{ btnContent }}</span>
            </div>
        </div>
        <div class="container-menu__style" :class="[isMenuOpen ? menuActive : 'container-menu']">

            <div class="menu">

                <RouterLink to="/" @click="toggleMenu" class="abril-fatface-font menu__link"> panier (0)
                </RouterLink>
                <ul class="menu__list">

                    <li>
                        <RouterLink to="/" @click="toggleMenu" class="abril-fatface-font menu__link"> l'histoire
                            de nisaa
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" @click="toggleMenu" class="abril-fatface-font menu__link">la box du
                            mois
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" @click="toggleMenu" class="abril-fatface-font menu__link">contact
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
    height: 0;
    display: none;
}

.container-menu.active {
    display: flex;
}

.container-menu__style {
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
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
    opacity: 0;
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
    transition: transform .7s ease;
}

.menu__link:hover,
.menu__list li:hover {
    transform: translateX(-30px);
    color: var(--clr-white);

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