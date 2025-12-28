<script setup lang="ts">
import { ref } from 'vue'
import { useShowsStore } from '../../store/PiniaStore'

interface Show {
    show: {
        id: number
        name: string
        image?: {
            medium: string
            original: string
        }
        summary?: string
        premiered?: string
        genres?: string[]
        rating?: {
            average: number | null
        }
    }
}

const searchQuery = ref('')
const shows = ref<Show[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
let debounceTimeout: ReturnType<typeof setTimeout> | null = null
const showsStore = useShowsStore()
const handleSearch = async () => {
    if (debounceTimeout) {
        clearTimeout(debounceTimeout)
    }

    if (!searchQuery.value.trim()) {
        shows.value = []
        return
    }

    debounceTimeout = setTimeout(async () => {
        loading.value = true
        error.value = null

        try {
            const response = await fetch(
                `${import.meta.env.VITE_MOVIES_API}/search/shows?q=${encodeURIComponent(searchQuery.value)}`
            )

            if (!response.ok) {
                throw new Error('Failed to fetch shows')
            }

            const data = await response.json()
            shows.value = data
            console.log('Shows:', shows.value)
        } catch (err) {
            error.value = 'Error fetching shows. Please try again.'
            console.error(err)
        } finally {
            loading.value = false
        }
    }, 300)
}
const handleAddShow = (show: Show['show']) => {
    showsStore.addShow(show)
    alert(`Added: ${show.name}`)
    searchQuery.value = ''
    shows.value = []
}
</script>

<template>
    <div class="search-bar-container">
        <input type="text" name="search" id="search" placeholder="Search title and add to grid" class="search-input"
            v-model="searchQuery" @input="handleSearch" />

        <div v-if="loading" class="results">Searching...</div>

        <div v-if="error" class="results">
            <span style="color: red;">
                {{ error }}
            </span>
        </div>

        <div v-if="shows.length > 0" class="results">
            <ul class="shows-list">
                <li v-for="show in shows" :key="show.show.id" class="show-item" @click="handleAddShow(show.show)">
                    <div>
                        <img v-if="show.show.image" :src="show.show.image.medium" :alt="show.show.name"
                            class="show-image" />
                    </div>
                    <div class="show-details">
                        <h3 class="show-title">{{ show.show.name }}</h3>
                        <div class="show-meta">
                            <div v-if="show.show.premiered" class="show-year">
                                {{ show.show.premiered.split('-')[0] }}
                            </div>
                            <div v-if="show.show.genres && show.show.genres.length" class="show-genres">
                                {{ show.show.genres.join(', ') }}
                            </div>
                            <div v-if="show.show.rating?.average" class="show-rating">
                                ⭐ {{ show.show.rating.average }}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div v-else-if="searchQuery && !loading && !error" class="results">
            <span style="color: yellow;">No shows found</span>
        </div>
    </div>
</template>

<style scoped>
.show-meta {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    row-gap: 4px;
}

.show-item {
    cursor: pointer;
    display: flex;
    column-gap: 1%;
}

.show-details {
    display: flex;
    flex-direction: column;
    align-items: start;
    line-height: 1;
}

.show-image {
    width: 80px;
    height: auto;
    margin-right: 12px;
    border-radius: 4px;
    margin-bottom: 8px;
}

.search-bar-container {
    position: relative;
}

.search-input {
    padding: 12px 20px 12px 44px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 0.5px solid #fff;
    border-radius: 4px;
    font-size: 16px;
    width: 424px;
    height: 49px;
    background-image: url("/search.svg");
    background-repeat: no-repeat;
    background-color: transparent;
    background-position: 14px center;
    background-size: 20px 20px;
}

.loading,
.error,
.no-results {
    margin-top: 16px;
    padding: 12px;
}

.loading {
    color: #666;
}

.error {
    color: #f44336;
}

.no-results {
    color: #999;
}

.results {
    position: absolute;
    background-color: #3C3C3C;
    margin-top: 16px;
    padding: 12px;
    color: #4CAF50;
    z-index: 10;
    max-height: 500px;
    overflow-y: auto;
}
</style>