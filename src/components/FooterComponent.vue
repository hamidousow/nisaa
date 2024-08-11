<script setup lang="ts">
import IconFacebook from './icons/IconFacebook.vue';
import IconInstagram from './icons/IconInstagram.vue';

</script>

<template>
    <footer class="footer  bg-clr-green">
        <div class="footer__content container">
            <div class="content__top">
                <div class="content__newsletter">
                    <h3 class="clr-maroon mb-10">Newsletter</h3>
                    <div class="container-input">
                        <input type="email" name="" id="" placeholder="ton adresse email">
                        <input type="submit" value="s'inscrire" class="bg-clr-maroon">
                    </div>
                </div>
                <div class="content__fast-links">
                    <h3 class="clr-maroon mb-10">Liens rapides</h3>
                    <ul class="footer__menu">
                        <li class="footer__link">
                            <RouterLink to="/"> S'abonner </RouterLink>
                        </li>
                        <li class="footer__link">
                            <RouterLink to="/"> CVG </RouterLink>
                        </li>
                        <li class="footer__link">
                            <RouterLink to="/"> Mentions légales </RouterLink>
                        </li>
                        <li class="footer__link">
                            <RouterLink to="/"> Nous contacter </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="content__bottom">
                <p class="clr-maroon"> 2021, Nisaabox</p>
                <div class="footer__social-links">
                    <RouterLink to="/">
                        <IconFacebook />
                    </RouterLink>
                    <RouterLink to="/">
                        <IconInstagram />
                    </RouterLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    margin-top: auto;
    width: 100%;
    padding: 30px 0;
}

.footer__content {
    display: flex;
    flex-direction: column;
    row-gap: 25px;
}

.footer .content__top {
    display: flex;
    flex-direction: column;
    row-gap: 25px;
}

.footer .container-input {
    display: flex;
    height: 40px;
}

.container-input input:first-child {
    flex: 2;
}

.container-input input:nth-child(2) {
    flex: 1;
}

input[type="submit"] {
    border-width: 2px;
    border-color: transparent;
    font-size: 13px;
    color: var(--clr-green);
    text-transform: uppercase;
    border-radius: 0 3px 3px 0;

}

input[type="email"] {
    padding: 0 10px;
    border-color: transparent;
    border-radius: 3px 0 0 3px;
}

input[type="email"]:focus-visible {
    transition: .5s;
    outline: transparent auto 1px;
    /* border: 1px solid var(--clr-maroon); */
    border-radius: 3px 0 0 3px;
}

.footer__menu {
    display: flex;
    flex-direction: row;
    padding: 0;
    flex-wrap: wrap;
    gap: 10px 25px;
}

.footer__link a {
    color: var(--clr-maroon);
}

.footer .content__bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.footer__social-links {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
}

.footer__social-links a svg {
    height: 19px;
}

@media screen and (min-width: 768px) {

    .footer__content {
        row-gap: 100px;
    }

    .footer .content__top {
        display: flex;
        flex-direction: row;
        column-gap: 70px;
    }

    .footer .content__newsletter {
        flex: 1;
    }

    .footer .content__fast-links {
        flex: 1;
    }

    .footer .footer__menu {
        justify-content: space-between;
    }
}
</style>