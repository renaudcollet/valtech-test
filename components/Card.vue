<template>
    <div class="card" :class="{'card--hover': isMouseOver}">
        <div class="card__bg"></div>
        <div class="card__title">
            <div class="card__title__country">ITALY</div>
            <h2 class="card__title__h2">VENICE</h2>
        </div>
        <p class="card__p">
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
        </p>
        <a class="card__a" href="/">Explore more</a>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const isMouseOver = ref(false)

const onMouseOver = () => {
    isMouseOver.value = true
}

const onMouseOut = () => {
    isMouseOver.value = false
}

onMounted(() => {
    card.value.addEventListener('mouseover', onMouseOver)
    card.value.addEventListener('mouseout', onMouseOut)
})

onUnmounted(() => {
    card.value.removeEventListener('mouseover', onMouseOver)
    card.value.removeEventListener('mouseout', onMouseOut)
})

</script>