<script setup lang="ts">
import { ref } from 'vue';
import IconArrowBack from './icons/IconArrowBack.vue';
import IconArrowForward from './icons/IconArrowForward.vue';

const props = defineProps(["text", "author", "comments"])

const tabComments = [
    {
        text: "Je viens de recevoir ma box Ramadan et franchement j'aime trop le concept, les produits, la box en elle même est trop jolie ! Trop hâte de recevoir la prochaine box mais c'est le début d'une vraie routine pour moi, merci beaucoup !",
        author: "Margot B"
    },
    {
        text: "Je ne suis pas du genre à laisser des commentaires aux marques mais là je tenais à vous dire que je suis plus que satisfaite !! La box, les couleurs, le message à l'intérieur, tout est trop joli! C'est super fin et mignon, et surtout les produits sont très bien sélectionnés!",
        author: "Soraya M"
    },
    {
        text: "Je voulais vous dire merci, je suis super contente de ma box elle est trop belle. Je suis fan des propositions de choses à faire pour le ramadan. Ca donne envie de bien s'organiser et que chaque jour du ramadan soit productif! Concept innovant et au top.",
        author: "Habi B"
    }
]

const currentComm = ref(0)

function previousComment() {
    if (currentComm.value > 0) {
        return currentComm.value--
    }
}

function nextComment() {
    if (currentComm.value < tabComments.length - 1) {
        currentComm.value++
    }
}

</script>
<template>
    <div class="comment">
        <IconArrowBack @click="previousComment" class="comment__arrow"
            :class="[currentComm == 0 ? 'opacity-half cursor-desactived' : 'opacity-full cursor-actived']" />
        <div class="comment__content">
            <p class="comment__text">{{ tabComments[currentComm].text }}</p>
            <p class="comment__author">{{ "- " + tabComments[currentComm].author }}</p>
        </div>
        <IconArrowForward @click="nextComment" class="comment__arrow"
            :class="[currentComm == tabComments.length - 1 ? 'opacity-half cursor-desactived' : 'opacity-full cursor-actived']" />
        <div class="comment__container-indicators">
            <div v-for="comment, index in tabComments" :key="index" class="indicator"
                :class="[currentComm == index ? 'opacity-half cursor-desactived' : 'opacity-full cursor-actived']"
                @click="currentComm = index">•</div>
        </div>
    </div>
</template>

<style scoped>
.comment {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    max-width: 1000px;
    margin: auto;
    padding: 25px 5px;
}

.comment::before,
.comment::after {
    content: "\"";
    display: block;
    height: 20px;
    position: absolute;
    font-family: "Abril Fatface";
    font-size: clamp(30px, 3vw, 47px);

}

.comment::before {
    top: 0;
    left: 10px;
}

.comment::after {
    bottom: 0;
    right: 0;
}


.comment__content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    row-gap: 10px;
}

.comment__text,
.comment_author {
    color: var(--clr-green);
}

.comment__text {
    font-size: clamp(13px, 2vw, 24px);
}

.comment__author {
    font-size: clamp(12px, 2vw, 21px);
}

.comment__arrow {
    cursor: pointer;
    fill: var(--clr-green);
}

.comment__container-indicators {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: row;
    column-gap: 12px;
    justify-content: center;
    font-size: 25px;
}

.opacity-full {
    opacity: 1;
}

.opacity-half {
    opacity: 0.5;
}

.cursor-actived {
    cursor: pointer;
}

.cursor-desactived {
    cursor: inherit;
}

@media screen and (min-width: 768px) {
    .comment[data-v-19e4945f] {
        padding: 25px;
    }

    .comment__text {
        padding: 0 20px;
    }
}
</style>