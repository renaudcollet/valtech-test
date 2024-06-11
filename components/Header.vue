<template>
    <header>
        <div class="bg"></div>
        <div class="content">
            <div class="cat">Front-end</div>
            <h1>valtech_</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
        font-size: 0.75rem;
        font-weight: 300;
    }
    h1 {
        color: #fff;
        font-size: 3rem;
        margin: 0;
        font-weight: 500;
    }
    p {
        font-weight: 300;
        text-align: center;
        line-height: 1;
        font-size: 0.8rem;
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
    }
</style>