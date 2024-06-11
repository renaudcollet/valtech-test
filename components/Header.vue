<template>
    <header>
        <div class="bg"></div>
        <div class="content">
            <div class="cat">Front-end</div>
            <h1>valtech_</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
    </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
    header {
        position: relative;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: $border-radius;
        height: 350px;
        padding: 1.5rem;
    }
    .content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        max-width: 480px;
    }
    .cat {
        color: #fff;
        text-transform: uppercase;
        font-weight: 300;
        font-size: 0.65rem;
        letter-spacing: 0.15rem;

        @media (min-width: $breakpoint-lg) {
            font-size: 0.75rem;
            letter-spacing: 0.25rem;
        }
    }
    h1 {
        color: #fff;
        font-size: 3rem;
        margin: 0;
        font-weight: 500;

        @media (min-width: $breakpoint-lg) {
            font-size: 5rem;
        }
    }
    p {
        font-weight: 300;
        text-align: center;
        line-height: 1.1rem;
        font-size: 0.8rem;

        @media (min-width: $breakpoint-lg) {
            font-size: 1rem;
            line-height: 1.3rem;
        }
    }
    .bg {
        position: absolute;
        top: 0;
        left: 0;
        background: url(//picsum.photos/id/18/600/300);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;

        @media (min-width: $breakpoint-md) {
            background-image: url(//picsum.photos/id/18/600/300);
        }

        @media (min-width: $breakpoint-lg) {
            background-image: url(//picsum.photos/id/18/1280/400);
        }
    }
</style>