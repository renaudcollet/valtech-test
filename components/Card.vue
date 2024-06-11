<template>
    <div class="card" :class="{'card--hover': isMouseOver}" @mouseover="onMouseOver" @mouseout="onMouseOut">
        <div class="card__bg" :style="`background-image: url(${props.card.image})`"></div>
        <div class="card__title">
            <div class="card__title__country">{{ props.card.country }}</div>
            <h2 class="card__title__h2">{{ props.card.city }}</h2>
        </div>
        <p class="card__p" v-html="props.card.resume"></p>
        <a class="card__a" :href="props.card.link" target="_blank">Explore more</a>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    card: {
        city: string,
        country: string,
        resume: string,
        link: string,
        image: string,
    }
}>()

const isMouseOver:Ref<boolean> = ref(false)

const onMouseOver = () => {
    isMouseOver.value = true
}

const onMouseOut = () => {
    isMouseOver.value = false
}
</script>