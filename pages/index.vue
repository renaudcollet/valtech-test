<template>
    <Header />
    <div class="cards">
        <template v-for="card in storeDatas.datas.cards">
            <Card :card="card" />
        </template>
    </div>
</template>

<script setup>
import Card from '@/components/Card.vue';
import Header from '@/components/Header.vue';

import { useDatasStore } from '~/stores/datas';

const storeDatas = useDatasStore();
const { fetchDatas } = storeDatas;
await fetchDatas();


</script>

<style lang="scss" scoped>
.cards {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 0;

    .card {
        &:nth-child(1) {
            grid-column: 1 / 5;
        }
        &:nth-child(2) {
            grid-column: 1 / 3;
        }
        &:nth-child(3) {
            grid-column: 3 / 5;
        }
        &:nth-child(4) {
            grid-column: 1 / 3;
        }
        &:nth-child(5) {
            grid-column: 3 / 5;
        }
        &:nth-child(6) {
            grid-column: 1 / 5;
        }
    }

    @media (min-width: $breakpoint-md) {
        .card {
            &:nth-child(1) {
                grid-column: 1 / 3;
            }
            &:nth-child(2) {
                grid-column: 3 / 4;
            }
            &:nth-child(3) {
                grid-column: 4 / 5;
            }
            &:nth-child(4) {
                grid-column: 1 / 2;
            }
            &:nth-child(5) {
                grid-column: 2 / 3;
            }
            &:nth-child(6) {
                grid-column: 3 / 5;
            }
        }            
    }
}
    
</style>