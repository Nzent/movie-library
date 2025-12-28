<template>
    <img src="/images/landing.jpg" alt="" class="carousel-images">
</template>

<style scoped>
.carousel-images {
    width: 100%;
    object-fit: cover;
    height: 622px;
    object-position: 50% 100%;
}

@media (max-width: 820px) {
    .carousel-images {
        width: 100%;
        object-fit: cover;
        height: 400px;
        object-position: 50% 50%;
    }
}
</style>
