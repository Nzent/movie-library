<script setup lang="ts">
import Card from '../Widgets/Card.vue';
import SearchBar from '../Widgets/SearchBar.vue';

</script>

<template>
    <section class="main-section">

        <div class="search-section">
            <h3 class="title">Collect your favorites</h3>
            <SearchBar />
        </div>
        <hr>

        <div class="grid-section">
            <Card />
            <Card />
            <Card />
        </div>
    </section>
</template>

<style scoped>
.main-section {
    height: 100%;
    padding: 51px 115px;
    background-color: #1D1D1D;
    display: flex;
    flex-direction: column;
}

.grid-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 40px;
}


.title {
    font-family: "DIN Alternate", sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 150%;
    letter-spacing: -1.1%;
    color: #FFFFFF;
}

hr {
    margin-top: 30px;
    border: 2.29px solid #FFFFFF;
}

.search-section {
    display: flex;
    justify-content: space-between;
}
</style>