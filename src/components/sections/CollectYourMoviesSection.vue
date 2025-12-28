<script setup lang="ts">
import { useShowsStore } from '../../store/PiniaStore';
import Card from '../Widgets/Card.vue';
import SearchBar from '../Widgets/SearchBar.vue';

const showsStore = useShowsStore()

const handleRemove = (showId: number) => {
    showsStore.removeShow(showId)
}
</script>

<template>
    <section class="main-section">
        <div class="search-section">
            <h3 class="title">Collect your favorites</h3>
            <SearchBar />
        </div>
        <hr>

        <div v-if="showsStore.selectedShows.length === 0" class="empty-state">
            <p>No shows added yet. Search and click on shows to add them here!</p>
        </div>
        <div v-else class="grid-section">
            <div v-for="show in showsStore.selectedShows" :key="show.id" class="grid">
                <Card :id="show.id" :title="show.name" :description="show?.summary ?? ''" :image="show.image?.original"
                    @remove="handleRemove" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.main-section {
    padding: 51px 115px;
    background-color: #1D1D1D;
    display: flex;
    flex-direction: column;
}

.grid-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 40px;
    gap: 20px;
}
.grid{
    margin-bottom: 30px;
}
.empty-state {
    text-align: center;
    padding: 60px 20px;
    color: #999;
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

@media (max-width: 1444px) {
    .grid-section {
        display: grid;
        row-gap: 20px;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 40px;
    }
}

@media (max-width: 1036px) {
    .grid-section {
        grid-template-columns: repeat(1, 1fr);
    }
}

@media (max-width: 820px) {
    .main-section {
        padding: 63px 43px;
    }

    .search-section {
        display: flex;
        flex-wrap: wrap;
        row-gap: 30px;
        justify-content: space-between;
    }

    .grid-section {
        display: grid;
        row-gap: 20px;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 40px;
    }
}

@media (max-width: 810px) {
    .grid-section {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>