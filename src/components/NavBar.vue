<script lang="ts" setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <nav class="nav">
        <div class="nav-content">
            <a href="/">
                <img src="" alt="nisaa logo">
            </a>
            <ul class="nav-menu">
                <li class="menu-link">
                    <RouterLink to="/"> l'histoire de nisaa </RouterLink>
                </li>
                <li class="menu-link">
                    <RouterLink to="/">les sagesses</RouterLink>
                </li>
                <li class="menu-link">
                    <RouterLink to="/">la box du mois</RouterLink>
                </li>
                <li class="menu-link">
                    <RouterLink to="/">contact</RouterLink>
                </li>
            </ul>
            <div class="menu-utils">
                <div>recherche</div>
                <div>panier</div>
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
}

.nav-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    max-width: 1480px;
}

.nav-menu {
    display: flex;
    flex-direction: column;
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
</style>